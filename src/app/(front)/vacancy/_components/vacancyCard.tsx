// app/vacancy/_components/vacancyCard.tsx
"use client";

import { Button } from "@/components/ui/button";
import { VacancyApplyModal } from "./vacancyApplyModal";

interface VacancyCardProps {
  vacancy: {
    _id: string;
    position: string;
    status: string;
    duration: string;
    imageUrl: string;
  };
  onClick: () => void;
}

export function VacancyCard({ vacancy, onClick }: VacancyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-auto overflow-hidden">
        <img
          src={vacancy.imageUrl}
          alt={vacancy.position}
          className="w-full h-full object-cover cursor-pointer"
          onClick={onClick}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{vacancy.position}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Status:</span> {vacancy.status}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Duration:</span> {vacancy.duration}
        </p>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={onClick}>
            View Details
          </Button>
          <VacancyApplyModal />
        </div>
      </div>
    </div>
  );
}
