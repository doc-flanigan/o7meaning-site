'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/',                label: 'Home'            },
  { href: '/in-star-citizen', label: 'In Star Citizen' },
  { href: '/faq',             label: 'FAQ'             },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-sc-slate border-b border-sc-slate-mid px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-sc-cyan font-bold text-lg tracking-tight">
          o7meaning.com
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-5 text-sm">
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

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded p-1.5 text-sc-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-sc-slate-mid mt-3">
          <div className="max-w-4xl mx-auto flex flex-col py-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm text-sc-white hover:text-sc-cyan transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
