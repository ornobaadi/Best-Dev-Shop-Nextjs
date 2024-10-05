// src/app/page.tsx

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import IdealProjectPartner from '@/components/IdealProjectPartner';
import SlidingLogos from '@/components/SlidingLogos'
import ClientTestimonials from '@/components/ClientTestimonials'
import FeaturedAgenciesSection from '@/components/FeaturedAgenciesSection'

const agencies = [
  {
    name: 'Digital Silk',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$150/hr',
  },
  {
    name: 'Think to Share',
    location: 'San Francisco, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'Vrrb',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'Ignite Visibility',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'Trango Tech',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  {
    name: 'Eseo Space',
    location: 'New York City, US',
    teamSize: '50-100',
    rate: '$200/hr',
  },
  // Add more agencies as needed...
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [filteredAgencies, setFilteredAgencies] = useState(agencies) // New state to hold filtered agencies
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formattedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, '-')
    const formattedLocation = location.toLowerCase().replace(/\s+/g, '-')

    // Use filter to get all matching agencies
    const matchingAgencies = agencies.filter(agency =>
      agency.name.toLowerCase().replace(/\s+/g, '-').startsWith(formattedSearchQuery) &&
      agency.location.toLowerCase().includes(formattedLocation)
    )

    // Update the filteredAgencies state with the results
    if (matchingAgencies.length > 0) {
      setFilteredAgencies(matchingAgencies)
    } else {
      alert('No agencies found')
    }
  }

  return (
    <div className="min-h-screen bg-white">

      <main>
        <HeroSection
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          location={location}
          setLocation={setLocation}
        />
        {/* Display filtered agencies */}
        <IdealProjectPartner />
        <FeaturedAgenciesSection agencies={filteredAgencies} />
        <SlidingLogos />
        <ClientTestimonials />
      </main>
      <Footer/>
    </div>
  )
}
