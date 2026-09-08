import type { Metadata } from 'next'
import Ticket from './page-client'

export const metadata: Metadata = {
  title: 'Support Ticket',
  description:
    'Submit a support ticket to Compulink Systems. Get help with technical issues, hardware problems, and software concerns.',
}

export default function TicketPage() {
  return <Ticket />
}