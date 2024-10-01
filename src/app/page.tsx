// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { Search, Star } from 'lucide-react'

// const agencies = [
//   {
//     name: 'Digital Silk',
//     location: 'New York City, US',
//     teamSize: '50-100',
//     rate: '$150/hr',
//   },
//   {
//     name: 'Think to Share',
//     location: 'San Francisco, US',
//     teamSize: '50-100',
//     rate: '$200/hr',
//   },
//   // Add more agencies as needed...
// ]

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('')
//   const [location, setLocation] = useState('')
//   const router = useRouter()

//   // Handles the search functionality
//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const formattedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, '-')
//     const formattedLocation = location.toLowerCase().replace(/\s+/g, '-')

//     // Direct the user to the detailed page if the search matches an agency
//     const foundAgency = agencies.find(agency =>
//       agency.name.toLowerCase().replace(/\s+/g, '-').includes(formattedSearchQuery) &&
//       agency.location.toLowerCase().includes(formattedLocation)
//     )

//     if (foundAgency) {
//       // Redirect to the detailed page of the found agency
//       router.push(`/${foundAgency.name.toLowerCase().replace(/\s+/g, '-')}`)
//     } else {
//       alert('Agency not found')
//     }
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-black text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold">DevShop</Link>
//           <nav>
//             <ul className="flex space-x-4">
//               <li><Link href="#" className="hover:text-gray-300">Development</Link></li>
//               <li><Link href="#" className="hover:text-gray-300">IT Services</Link></li>
//               <li><Link href="#" className="hover:text-gray-300">Marketing</Link></li>
//               <li><Link href="#" className="hover:text-gray-300">Design</Link></li>
//               <li><Link href="#" className="hover:text-gray-300">Business Services</Link></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <main>
//         <section className="bg-gray-100 py-20">
//           <div className="container mx-auto flex items-center space-x-12">
//             <div className="w-1/2">
//               <h1 className="text-5xl font-bold mb-4">Where you find the right company</h1>
//               <p className="text-xl mb-8">Rely on databases of 50,000+ verified client reviews and real user insights to choose the right company for your business.</p>
//               <form className="flex" onSubmit={handleSearch}>
//                 <input
//                   type="text"
//                   placeholder="What are you looking for?"
//                   className="p-2 rounded-l-md w-64 border border-gray-300"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   className="p-2 w-48 border border-gray-300"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)}
//                 />
//                 <button className="bg-black text-white p-2 rounded-r-md">
//                   <Search className="w-6 h-6" />
//                 </button>
//               </form>
//             </div>

//             <div className="w-1/2">
//               <Image
//                 src="/placeholder.svg" // Replace with actual image path
//                 alt="Hero image"
//                 width={500}
//                 height={300}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Featured Agencies Section */}
//         <section className="bg-gray-100 py-16">
//           <div className="container mx-auto">
//             <h2 className="text-3xl font-bold mb-8">Featured Agencies</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {agencies.map((agency) => (
//                 <Link key={agency.name} href={`/${agency.name.toLowerCase().replace(/\s+/g, '-')}`}>
//                   <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer">
//                     <Image src="/placeholder.svg" alt="Agency logo" width={100} height={50} className="mb-4" />
//                     <h3 className="text-xl font-semibold mb-2">{agency.name}</h3>
//                     <div className="flex items-center mb-2">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star key={star} className="w-4 h-4 text-yellow-400" />
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-600 mb-4">Growing Brands Online</p>
//                     <div className="flex justify-between text-sm text-gray-600">
//                       <span>{agency.location}</span>
//                       <span>{agency.rate}</span>
//                     </div>
//                     <button className="mt-4 bg-black text-white px-4 py-2 rounded">Visit Website</button>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
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
  // Add more agencies as needed...
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formattedSearchQuery = searchQuery.toLowerCase().replace(/\s+/g, '-')
    const formattedLocation = location.toLowerCase().replace(/\s+/g, '-')

    const foundAgency = agencies.find(agency =>
      agency.name.toLowerCase().replace(/\s+/g, '-').includes(formattedSearchQuery) &&
      agency.location.toLowerCase().includes(formattedLocation)
    )

    if (foundAgency) {
      router.push(`/${foundAgency.name.toLowerCase().replace(/\s+/g, '-')}`)
    } else {
      alert('Agency not found')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          location={location}
          setLocation={setLocation}
        />
        <FeaturedAgenciesSection agencies={agencies} />
      </main>
    </div>
  )
}
