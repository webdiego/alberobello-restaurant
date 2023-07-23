import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 bg-white/70 supports-backdrop-blur:bg-white/95 ">
      <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              width={45}
              height={45}
              alt="logo"
            />
          </Link>
          <div className="flex gap-5  font-medium items-center justify-center">
            <Link href={'/menu'}>Menù</Link>
            <Link href="/#contatti">Contatti</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
