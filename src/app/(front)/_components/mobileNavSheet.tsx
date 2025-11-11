// components/mobileNavSheet.tsx
"use client";

import { NAV_LINKS } from "@/lib/Navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-2 mt-6">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link.href}>
              {link.subLinks ? (
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                  <div className="pl-4 space-y-1">
                    {link.subLinks.map((subLink) => (
                      <SheetClose asChild key={subLink.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          asChild
                        >
                          <Link href={subLink.href}>{subLink.name}</Link>
                        </Button>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              )}
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
