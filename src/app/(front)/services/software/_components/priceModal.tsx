import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export function PriceModal({ title }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='mt-4 bg-blue-800 hover:bg-blue-600 text-white'>
                    Order Now
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Order your package now
                    </DialogDescription>
                </DialogHeader>
                <div className="">
                    <div className="">
                        <Label>Name</Label>
                        <Input placeholder="Enter name" />
                    </div>
                    <div className="">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter email" />
                    </div>
                    <div className="">
                        <Label>Phone number</Label>
                        <Input
                            type="phone"
                            placeholder="Enter phone number" />
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                        <Label>Description</Label>
                        <textarea
                            placeholder="Please provide a brief description"
                            rows={4}
                            className="resize-none border round-full text-sm p-2"></textarea>
                    </div>

                </div>
                <DialogFooter>
                    <div className="flex items-center gap-2">
                        <Button className=' bg-blue-800 hover:bg-blue-600 text-white'>
                            Submit order
                        </Button>
                        <DialogClose>
                            <Button variant={'ghost'} className="border">Cancel</Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
