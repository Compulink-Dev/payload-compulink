// components/dropDownNavLink.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { NavLink } from "@/lib/Navigation";

interface DropdownLinkProps {
  mainLink: NavLink;
}

export function DropdownLink({ mainLink }: DropdownLinkProps) {
  // Only render dropdown if there are subLinks
  if (!mainLink.subLinks || mainLink.subLinks.length === 0) {
    return (
      <Button variant="ghost" asChild>
        <Link href={mainLink.href}>{mainLink.name}</Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0">
          {mainLink.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {mainLink.subLinks.map((subLink) => (
          <DropdownMenuItem key={subLink.href} asChild>
            <Link href={subLink.href}>{subLink.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
