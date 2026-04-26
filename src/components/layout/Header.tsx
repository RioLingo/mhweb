'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Dịch vụ', href: '/dich-vu' },
  { label: 'Đối tác', href: '/doi-tac' },
  { label: 'Tin tức', href: '/tin-tuc' },
  { label: 'Liên hệ', href: '/lien-he' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-[#003087] text-white text-sm py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="hidden md:block">Giải pháp Viễn Thông – CNTT – Truyền Thông</span>
          <div className="flex items-center gap-4">
            <a href="tel:+842437674480" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={13} />
              <span>(84-24) 3767 4480</span>
            </a>
            <a href="mailto:sales@mhconnect.vn" className="hover:text-blue-200 transition-colors">
              sales@mhconnect.vn
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl text-[#003087] tracking-tight">
              MH<span className="text-[#e8232a]">connect</span>
            </div>
            <div className="hidden sm:block text-xs text-gray-500 leading-tight">
              <div>CÔNG TY CỔ PHẦN</div>
              <div>MHconnect</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#003087] hover:bg-blue-50 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile nav */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden p-2 text-gray-700" aria-label="Menu">
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="font-bold text-xl text-[#003087] mt-2 mb-6">
                MH<span className="text-[#e8232a]">connect</span>
              </div>
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#003087] hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
