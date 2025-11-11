'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface GalleryItem {
    projectName: string;
    description: string;
    company: string;
    createdAt: string;
    // Add other fields as necessary
}

const getGalleries = async (): Promise<{ gallery: GalleryItem[] }> => {
    try {
        console.log("Fetching galleries from:", `${process.env.NEXT_PUBLIC_API_ROUTE}/api/gallery`);
        const res = await fetch(`/api/gallery`);
        if (!res.ok) {
            throw new Error("Failed to fetch gallery");
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return { gallery: [] }; // Return an empty array in case of error
    }
};

const GalleryCard: React.FC = () => {
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchGalleries = async () => {
            const data = await getGalleries();
            console.log("Galleries : ", data);

            setGallery(data.gallery);
            setLoading(false);
        };

        fetchGalleries();
    }, []);

    if (loading) {
        return <div className="px-8">
            <p>Loading...</p>
        </div>
    }

    return (
        <>
            {gallery.length === 0 ? (
                <div className="px-8">
                    <p>No galleries found</p>
                </div>
            ) : (
                gallery.slice(0, 2).map((item, index) => (
                    <div
                        key={index}
                        className="w-96 h-full border rounded"
                    >
                        <Image
                            src="/images/gallery.gif"
                            height={400}
                            width={500}
                            alt={item.projectName}
                            className="w-96 h-56 object-contain"
                        />
                        <div className="p-2">
                            <h1 className="uppercase text-sm font-semibold">
                                Technology
                                <hr className="border bg-blue-700 py-[0.8px] w-24" />
                            </h1>
                            <p className="text-2xl font-bold">{item.projectName}</p>
                            <p className="text-ellipsis overflow-hidden py-2 text-gray-600">
                                {item.description}
                            </p>
                            <p className="text-gray-700">
                                By <span className="text-black">{item.company}</span> -{" "}
                                {/* {dateFormat(item.createdAt)} */}
                            </p>
                            <Button className="bg-blue-700 hover:bg-blue-500 my-2">View More</Button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}

export default GalleryCard;
