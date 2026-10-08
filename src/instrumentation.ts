import { logs, SeverityNumber } from '@opentelemetry/api-logs'
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

if ((!posthogKey || !posthogHost) && process.env.NODE_ENV === 'development') {
  const missingVariable = posthogKey ? 'NEXT_PUBLIC_POSTHOG_HOST' : 'NEXT_PUBLIC_POSTHOG_KEY'

  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  )
}

export const posthogLoggerProvider =
  posthogKey && posthogHost
    ? new LoggerProvider({
        resource: resourceFromAttributes({ 'service.name': 'compulink-nextjs' }),
        processors: [
          new BatchLogRecordProcessor({
            exporter: new OTLPLogExporter({
              url: `${posthogHost}/i/v1/logs`,
              headers: {
                Authorization: `Bearer ${posthogKey}`,
                'Content-Type': 'application/json',
              },
            }),
          }),
        ],
      })
    : undefined

export const posthogLogger = posthogLoggerProvider?.getLogger('posthog-integration')

export { SeverityNumber }

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && posthogLoggerProvider) {
    logs.setGlobalLoggerProvider(posthogLoggerProvider)
  }
}

export async function flushPostHogLogs() {
  await posthogLoggerProvider?.forceFlush()
}
