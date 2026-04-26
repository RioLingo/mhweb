import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllNews } from '@/lib/news'

const categoryLabel: Record<string, string> = {
  company: 'Tin công ty',
  product: 'Sản phẩm mới',
  event: 'Sự kiện',
  tech: 'Công nghệ',
}

export default function NewsSection() {
  const news = getAllNews().slice(0, 4)

  if (!news.length) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-1">Tin tức mới nhất</h2>
            <p className="text-gray-500 text-sm">Cập nhật thông tin mới nhất từ MHconnect</p>
          </div>
          <Link
            href="/tin-tuc"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#003087] hover:gap-2 transition-all"
          >
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Card key={item.slug} className="group overflow-hidden hover:shadow-md transition-shadow border-0 shadow-sm">
              <div className="relative h-44 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-200">
                      {categoryLabel[item.category]?.[0] ?? 'N'}
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                {item.category && (
                  <Badge variant="secondary" className="text-xs mb-2">
                    {categoryLabel[item.category] ?? item.category}
                  </Badge>
                )}
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 line-clamp-2">
                  <Link href={`/tin-tuc/${item.slug}`} className="hover:text-[#003087] transition-colors">
                    {item.title}
                  </Link>
                </h3>
                {item.excerpt && (
                  <p className="text-xs text-gray-500 line-clamp-2 mb-3">{item.excerpt}</p>
                )}
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar size={11} />
                  <time>{new Date(item.date).toLocaleDateString('vi-VN')}</time>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link href="/tin-tuc" className="text-sm font-medium text-[#003087]">
            Xem tất cả tin tức →
          </Link>
        </div>
      </div>
    </section>
  )
}
