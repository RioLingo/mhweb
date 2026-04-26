import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllNews } from '@/lib/news'

export const metadata: Metadata = { title: 'Tin tức' }

const categoryLabel: Record<string, string> = {
  company: 'Tin công ty',
  product: 'Sản phẩm mới',
  event: 'Sự kiện',
  tech: 'Công nghệ',
}

export default function NewsPage() {
  const news = getAllNews()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003087] mb-2">Tin tức</h1>
        <p className="text-gray-500">Cập nhật thông tin mới nhất về sản phẩm, sự kiện và hoạt động của MHconnect</p>
      </div>

      {news.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <p className="text-lg">Chưa có tin tức nào.</p>
          <p className="text-sm mt-1">Vui lòng quay lại sau.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.slug} className="group overflow-hidden hover:shadow-md transition-shadow border-0 shadow-sm">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-blue-200">
                      {categoryLabel[item.category]?.[0] ?? 'N'}
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {item.category && (
                    <Badge variant="secondary" className="text-xs">
                      {categoryLabel[item.category] ?? item.category}
                    </Badge>
                  )}
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={11} />
                    {new Date(item.date).toLocaleDateString('vi-VN')}
                  </span>
                </div>
                <h2 className="font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
                  <Link href={`/tin-tuc/${item.slug}`} className="hover:text-[#003087] transition-colors">
                    {item.title}
                  </Link>
                </h2>
                {item.excerpt && (
                  <p className="text-sm text-gray-500 line-clamp-3">{item.excerpt}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
