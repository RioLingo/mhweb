'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Giải pháp đo kiểm & phân tích mạng',
    subtitle: 'Cung cấp thiết bị đo cáp quang, đo truyền dẫn mạng, phân tích hiệu năng hàng đầu',
    image: '/images/news/banner1.jpg',
    cta: { label: 'Xem dịch vụ', href: '/dich-vu' },
  },
  {
    id: 2,
    title: 'Thiết bị mạng & viễn thông doanh nghiệp',
    subtitle: 'Ethernet Switch, WiFi Router/AP, PDH/SDH, OTN, xWDM và tổng đài điện thoại',
    image: '/images/news/network.jpg',
    cta: { label: 'Tìm hiểu thêm', href: '/dich-vu' },
  },
  {
    id: 3,
    title: 'Giám sát hạ tầng & trải nghiệm người dùng',
    subtitle: 'Giải pháp giám sát mạng cáp quang, IP/Ethernet và hiệu năng thiết bị toàn diện',
    image: '/images/news/monitoring.jpg',
    cta: { label: 'Liên hệ ngay', href: '/lien-he' },
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const slide = slides[current]

  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden bg-[#001f5b]">
      {/* Background image */}
      <Image
        key={slide.id}
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover opacity-40 transition-opacity duration-700"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f5b]/90 via-[#001f5b]/60 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {slide.title}
          </h1>
          <p className="text-blue-200 text-lg mb-8 leading-relaxed">{slide.subtitle}</p>
          <Link
            href={slide.cta.href}
            className="inline-block bg-[#e8232a] hover:bg-[#c41e24] text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            {slide.cta.label}
          </Link>
        </div>
      </div>

      {/* Controls */}
      <button onClick={prev} aria-label="Trước"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/25 rounded-full text-white transition-colors">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} aria-label="Tiếp"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/25 rounded-full text-white transition-colors">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40 w-2'}`}
          />
        ))}
      </div>
    </section>
  )
}
