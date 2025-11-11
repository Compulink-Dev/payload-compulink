// components/header.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/Navigation";
import { MobileNavSheet } from "./mobileNavSheet";
import { DropdownLink } from "./dropDownNavLink";

export function Header() {
  return (
    <div className="">
      <nav className="bg-white dark:bg-gray-900 fixed w-screen z-20 top-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-10" alt="Compulink Logo" />
          </Link>

          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <Button asChild className="button bg-blue-800 hover:bg-blue-500">
              <Link href="/contact">Get started</Link>
            </Button>

            {/* Mobile menu button - shows only on small screens */}
            <div className="flex lg:hidden">
              <MobileNavSheet />
            </div>
          </div>

          {/* Desktop navigation - hidden on mobile */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.subLinks ? (
                    <DropdownLink mainLink={link} />
                  ) : (
                    <Button variant="ghost" asChild>
                      <Link href={link.href}>{link.name}</Link>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
