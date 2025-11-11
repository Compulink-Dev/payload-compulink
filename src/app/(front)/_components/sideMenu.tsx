import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Home, Image, Menu, Phone, ScanEye, ShieldAlert, Workflow } from "lucide-react"
import Link from "next/link"
import DropDownMenu from "./dropDownMenu"
import { DropdownLink } from "./dropDownLink"
import { FaBlog } from "react-icons/fa"

export function SideMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    {/* <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription> */}
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex gap-2 items-center">
                        <Home />
                        <Link href={'/'}>Home</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ScanEye />
                        <Link href={'/portfolio'}>Portfolio</Link>
                    </div>
                    <div className="flex gap-2 items-center bg-blue-600 h-auto rounded text-white">
                        <DropdownLink />
                    </div>
                    <div className="flex gap-2 items-center">
                        < ShieldAlert />
                        <Link href={'/events'}>Events</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image />
                        <Link href={'/gallery'}>Gallery</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaBlog />
                        <Link href={'/blog'}>Blog</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Workflow />
                        <Link href={'/vacancy'}>Vacancy</Link>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Phone />
                        <Link href={'/contact'}>Contact Us</Link>
                    </div>
                </div>
                {/* <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
