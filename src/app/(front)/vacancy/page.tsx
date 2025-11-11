// app/vacancy/page.tsx
"use client";

import { useEffect, useState } from "react";
import { VacancyCard } from "./_components/vacancyCard";
import { VacancyModal } from "./_components/vacancyModal";

interface Vacancy {
  _id: string;
  position: string;
  status: string;
  duration: string;
  imageUrl: string;
  description?: string;
  qualifications?: string[];
  skills?: string[];
  experience?: string;
}

export default function VacancyPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch("/api/vacancies");
        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <div>
      <div className="p-8 mt-20">
        <h1 className="text-center text-2xl font-bold mb-8">
          Available Vacancies
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading vacancies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacancies.map((vacancy) => (
              <VacancyCard
                key={vacancy._id}
                vacancy={vacancy}
                onClick={() => setSelectedVacancy(vacancy)}
              />
            ))}
          </div>
        )}

        {selectedVacancy && (
          <VacancyModal
            vacancy={selectedVacancy}
            onClose={() => setSelectedVacancy(null)}
          />
        )}
      </div>
    </div>
  );
}
