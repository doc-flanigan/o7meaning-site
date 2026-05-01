import Link from 'next/link'

const links = [
  { href: '/',                label: 'Home'           },
  { href: '/in-star-citizen', label: 'In Star Citizen' },
  { href: '/in-gaming',       label: 'In Gaming'      },
  { href: '/faq',             label: 'FAQ'            },
]

export default function NavBar() {
  return (
    <nav className="bg-sc-slate border-b border-sc-slate-mid px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-sc-cyan font-bold text-lg tracking-tight">
          o7meaning.com
        </Link>
        <div className="flex gap-5 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sc-white hover:text-sc-cyan transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
