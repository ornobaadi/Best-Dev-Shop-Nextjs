// src/app/[agency]/page.tsx

'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

interface Agency {
    name: string;
    location: string;
    teamSize: string;
    rate: string;
}

interface AgencyPageProps {
    params: { agency: string };
}

export default function AgencyPage({ params }: AgencyPageProps) {
    const { agency } = params; // Get the dynamic route parameter
    const [agencyData, setAgencyData] = useState<Agency | null>(null); // State to hold agency data
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        if (agency) {
            // Simulate fetching agency data based on the agency name
            // In a real app, you'd fetch from an API or your data source
            const agencyDetails = {
                name: agency, // Use the agency parameter directly
                location: 'New York City, US',
                teamSize: '50-100',
                rate: '$200/hr'
            };

            setAgencyData(agencyDetails);
            setLoading(false);
        }
    }, [agency]);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (!agencyData) {
        return <div>Agency not found.</div>; // Handle case where agency data is not found
    }

    // Construct the image path for the agency logo
    const imagePath = `/images/${agencyData.name.toLowerCase().replace(/\s+/g, '-')}.png`;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{agencyData.name}</h1>
            <Image
                src={imagePath}
                alt={`${agencyData.name} logo`}
                width={300}
                height={150}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default-image.png'; // Fallback image
                }}
                className="mb-4"
            />
            <div className="mb-2">
                <strong>Location:</strong> {agencyData.location}
            </div>
            <div className="mb-2">
                <strong>Team Size:</strong> {agencyData.teamSize}
            </div>
            <div className="mb-2">
                <strong>Rate:</strong> {agencyData.rate}
            </div>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded">Visit Website</button>
        </div>
    );
}
