import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function LinkButton({ name, link }: { name: string; link: string }) {
  return (
    <div>
      <Button className={cn('bg-blue-800 text-white hover:bg-blue-500')}>
        <Link href={link}>{name}</Link>
      </Button>
    </div>
  )
}

export default LinkButton
