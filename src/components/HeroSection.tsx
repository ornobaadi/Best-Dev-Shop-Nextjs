'use client'

import { Search } from 'lucide-react'

interface HeroSectionProps {
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    location: string;
    setLocation: (location: string) => void;
}

export default function HeroSection({ handleSearch, searchQuery, setSearchQuery, location, setLocation }: HeroSectionProps) {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto flex items-center space-x-12">
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold mb-4">Where you find the right company</h1>
                    <p className="text-xl mb-8">Rely on databases of 50,000+ verified client reviews and real user insights to choose the right company for your business.</p>
                    <form className="flex" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="p-2 rounded-l-md w-64 border border-gray-300"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            className="p-2 w-48 border border-gray-300"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button className="bg-black text-white p-2 rounded-r-md">
                            <Search className="w-6 h-6" />
                        </button>
                    </form>
                </div>
                <div className="w-1/2">
                    {/* Add your Image here */}
                </div>
            </div>
        </section>
    )
}
