"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ArrowDown, ArrowDown01, ArrowDownIcon, ArrowDownNarrowWide, ChevronDown } from "lucide-react"

export function DropdownLink() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <div className="">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1 justify-center hover:bg-transparent">
            <p className="">Services</p>
            <ChevronDown width={14} height={14} className="text-slate-700" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="hardware">
              <Link href={'/services/hardware'}>Hardware</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="software">
              <Link href={'/services/software'}>Software</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="networks">
              <Link href={'/services/networks'}>Networks</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="networks">
              <Link href={'/services/cyber-security'}>Cyber Security</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="networks">
              <Link href={'/services/cloud-computing'}>Cloud Computing</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="technical">
              <Link href={'/services/technical'}>Technical Support</Link>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
