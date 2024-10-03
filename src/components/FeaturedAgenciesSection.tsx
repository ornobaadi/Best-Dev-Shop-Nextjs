'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface Agency {
    name: string;
    location: string;
    teamSize: string;
    rate: string;
}

interface FeaturedAgenciesSectionProps {
    agencies: Agency[];
}

export default function FeaturedAgenciesSection({ agencies }: FeaturedAgenciesSectionProps) {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Featured Agencies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agencies.map((agency) => {
                        // Construct the dynamic image path
                        const imagePath = `/images/${agency.name.toLowerCase().replace(/\s+/g, '-')}.png`;
                        console.log('Image Path:', imagePath); // Log the generated path

                        return (
                            <Link key={agency.name} href={`/${agency.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
                                    {/* Use the dynamic image path */}
                                    <Image
                                        src={imagePath}
                                        alt={`${agency.name} logo`}
                                        width={100}
                                        height={50}
                                        className="mb-4"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/images/fallback-logo.png'; // Set your fallback image path
                                        }}
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{agency.name}</h3>
                                    <div className="flex items-center mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">Growing Brands Online</p>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>{agency.location}</span>
                                        <span>{agency.rate}</span>
                                    </div>
                                    <button className="mt-4 bg-black text-white px-4 py-2 rounded">Visit Website</button>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
