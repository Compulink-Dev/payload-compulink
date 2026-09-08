import type { Metadata } from 'next'
import Technical from './page-client'

export const metadata: Metadata = {
  title: 'Technical Support',
  description:
    '24/7 technical IT support in Zimbabwe. Help desk, hardware maintenance, software support, and system monitoring from Compulink.',
}

export default function TechnicalPage() {
  return <Technical />
}