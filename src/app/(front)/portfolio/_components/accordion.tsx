import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { BringToFront, Globe, ScanEye } from "lucide-react"

export function AccordionTabs() {
    return (
        <Accordion type="single" collapsible className="w-full p-8">
            <AccordionItem value="item-1">
                <AccordionTrigger className="py-4">
                    <div className="flex gap-4 text-2xl items-center">
                        <Globe width={40} height={40} />
                        <p className="font-bold">Our Mission</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                    Our mission is to innovate specific technologies that meet a need and transform experiences through innovation. We are committed to values such as excellence, integrity, sustainability and advancing the industry while embracing diversity.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="flex gap-4 text-2xl items-center">
                        <ScanEye width={40} height={40} />
                        <p className="font-bold">Our Vision</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                    Our vision is to lead technology by innovating specific area or technology. We aspire to create a world where a specific outcome or impact, fostering qualities like sustainability, connectivity and enhancing experiences for target audience or global community.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <div className="flex gap-4 text-2xl items-center">
                        <BringToFront width={40} height={40} />
                        <p className="font-bold">Our Strategy</p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                    Our strategy is to achieve key strategic goals by leveraging in specific technologies or areas. We will optimize product offerings through strategic initiatives such as partnerships, research and development, or market expansion. By implementing key embracing industry trends, we aim to lead in technology advancements and sustain long-term growth.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
