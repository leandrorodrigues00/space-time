import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col gap-4 space-y-8 p-16">
      <h2 className="text-3xl font-bold leading-tight text-gray-50">
        Thank you for visiting our site!
      </h2>
      <p className="text-lg leading-relaxed">
        We are currently working on this feature and will launch soon. Check
        back for something amazing on this page.
      </p>
      <div>
        <Link href="/" className="underline hover:text-gray-200">
          Go back to Home
        </Link>
      </div>
    </div>
  )
}
