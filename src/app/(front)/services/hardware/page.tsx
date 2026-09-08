import type { Metadata } from 'next'
import Hardware from './page-client'

export const metadata: Metadata = {
  title: 'Hardware Solutions',
  description:
    'Enterprise hardware solutions in Zimbabwe. Servers, workstations, storage, networking equipment, and peripherals from leading manufacturers.',
}

export default function HardwarePage() {
  return <Hardware />
}