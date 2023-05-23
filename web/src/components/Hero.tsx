import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW Spacetime" />

      <div className="max-w-[26.25rem] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your Time Capsule
        </h1>
        <p className="text-lg leading-relaxed">
          Collect memorable moments from your journey and share them (if you
          like) with the world!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new"
      >
        REGISTER REMINDER
      </Link>
    </div>
  )
}
