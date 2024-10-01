'use client'

import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">DevShop</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="#" className="hover:text-gray-300">Development</Link></li>
                        <li><Link href="#" className="hover:text-gray-300">IT Services</Link></li>
                        <li><Link href="#" className="hover:text-gray-300">Marketing</Link></li>
                        <li><Link href="#" className="hover:text-gray-300">Design</Link></li>
                        <li><Link href="#" className="hover:text-gray-300">Business Services</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
