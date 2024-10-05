// src/app/components/Header.tsx


'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-center items-center">
                <nav>
                    <p>List your business to get top level clients and  level up your agency</p>
                </nav>
            </div>
        </header>
    )
}
