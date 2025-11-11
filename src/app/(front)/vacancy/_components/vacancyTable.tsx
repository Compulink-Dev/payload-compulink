'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { VacancyModal } from "./vacancyModal"
import { VacancyApplyModal } from "./vacancyApplyModal"
import Link from "next/link"

const vacancies = [
    {
        position: "Software Developer",
        status: "Short term contract",
        duration: "3 Months",
        imageUrl: "/images/software.png",
    },
    {
        position: "Accounts Intern",
        status: "Internship",
        duration: "1 year",
        imageUrl: "/images/accountsIntern.png",
    },
    {
        position: "Sales & Marketing",
        status: "Internship",
        duration: "1 years",
        imageUrl: "/images/salesM.png",
    },
    {
        position: "Accounts Clerk",
        status: "Graduate Trainee",
        duration: "2 years",
        imageUrl: "/images/accountClerk.png"
    }
]

export function VacancyTable() {
    const [selectedVacancy, setSelectedVacancy] = useState(null)

    const handleViewClick = (vacancy: any) => {
        setSelectedVacancy(vacancy)
    }

    return (
        <>
            <Table className="mt-6">
                <TableCaption>A list of your recent job vacancies.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Position</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead className="text-right">Apply</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {vacancies.map((vacancy) => (
                        <TableRow key={vacancy.position}>
                            <TableCell className="font-medium">{vacancy.position}</TableCell>
                            <TableCell>{vacancy.status}</TableCell>
                            <TableCell>{vacancy.duration}</TableCell>
                            <TableCell className="text-right">
                                <div className="space-x-2 space-y-3">
                                    <Button
                                        className="border"
                                        variant={'ghost'}
                                        onClick={() => handleViewClick(vacancy)}
                                    >
                                        View
                                    </Button>
                                    <VacancyApplyModal />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {selectedVacancy && (
                <VacancyModal
                    vacancy={selectedVacancy}
                    onClose={() => setSelectedVacancy(null)}
                />
            )}
        </>
    )
}
