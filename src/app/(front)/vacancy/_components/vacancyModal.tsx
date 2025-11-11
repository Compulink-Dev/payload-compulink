// app/vacancy/_components/vacancyModal.tsx
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VacancyApplyModal } from "./vacancyApplyModal";

interface VacancyModalProps {
  vacancy: {
    position: string;
    status: string;
    duration: string;
    imageUrl: string;
    description?: string;
    qualifications?: string[];
    skills?: string[];
    experience?: string;
  };
  onClose: () => void;
}

export function VacancyModal({ vacancy, onClose }: VacancyModalProps) {
  return (
    <Dialog open={!!vacancy} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{vacancy.position}</DialogTitle>
          <DialogDescription>
            {vacancy.status} • {vacancy.duration}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <img
            src={vacancy.imageUrl}
            alt={vacancy.position}
            className="w-full h-auto rounded-lg"
          />

          {vacancy.description && (
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-700">{vacancy.description}</p>
            </div>
          )}

          {vacancy.experience && (
            <div>
              <h3 className="font-semibold mb-2">Experience Required</h3>
              <p className="text-gray-700">{vacancy.experience}</p>
            </div>
          )}

          {vacancy.qualifications?.length ? (
            <div>
              <h3 className="font-semibold mb-2">Qualifications</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {vacancy.qualifications.map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {vacancy.skills?.length ? (
            <div>
              <h3 className="font-semibold mb-2">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {vacancy.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex justify-between pt-4">
            <a href={vacancy.imageUrl} download>
              <Button variant="outline">Download Details</Button>
            </a>
            <VacancyApplyModal />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
