// 'use client'

// import { useParams } from 'next/navigation'
// import Image from 'next/image'

// const agencies = [
//   {
//     name: 'Digital Silk',
//     location: 'New York City, US',
//     teamSize: '50-100',
//     rate: '$150/hr',
//     description: 'Digital Silk specializes in growing brands online through innovative strategies and sleek designs.',
//     image: '/images/digital-silk.png',
//     website: 'https://digitalsilk.com',
//     portfolio: '#',
//   },
//   // Add more agencies here
// ]

// export default function AgencyPage() {
//   const { agency } = useParams()

//   // Find the agency by its formatted name
//   const selectedAgency = agencies.find(item =>
//     item.name.toLowerCase().replace(/\s+/g, '-') === agency
//   )

//   if (!selectedAgency) {
//     return <p>Agency not found</p>
//   }

//   return (
//     <div className="container mx-auto py-12">
//       <h1 className="text-3xl font-bold mb-8">{selectedAgency.name}</h1>

//       {/* Agency details */}
//       <div className="bg-white shadow-lg p-6 rounded-lg">
//         <div className="flex items-center space-x-4">
//           <Image src={selectedAgency.image} alt={selectedAgency.name} width={200} height={200} className="rounded-lg" />
//           <div>
//             <h2 className="text-2xl font-bold mb-2">{selectedAgency.name}</h2>
//             <p className="text-gray-600">{selectedAgency.description}</p>
//             <p className="text-sm mt-2">📍 {selectedAgency.location}</p>
//             <p className="text-sm">👥 Team Size: {selectedAgency.teamSize}</p>
//             <p className="text-sm">💵 {selectedAgency.rate}</p>
//           </div>
//         </div>

//         {/* Call to Action buttons */}
//         <div className="flex space-x-4 mt-6">
//           <a href={selectedAgency.website} target="_blank" className="bg-black text-white px-4 py-2 rounded-md">Visit Website</a>
//           <a href={selectedAgency.portfolio} target="_blank" className="bg-gray-200 text-black px-4 py-2 rounded-md">View Portfolio</a>
//         </div>
//       </div>
//     </div>
//   )
// }


import { notFound } from 'next/navigation'

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

export default function AgencyPage({ params }: { params: { agency: string } }) {
  const agencyName = params.agency.replace(/-/g, ' ')

  const agency = agencies.find(a => a.name.toLowerCase() === agencyName.toLowerCase())

  if (!agency) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl">{agency.name}</h1>
      </header>
      <main className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-8">{agency.name}</h2>
        <p className="text-xl">Location: {agency.location}</p>
        <p className="text-xl">Team Size: {agency.teamSize}</p>
        <p className="text-xl">Rate: {agency.rate}</p>
      </main>
    </div>
  )
}
