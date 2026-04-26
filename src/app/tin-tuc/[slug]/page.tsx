import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ChevronLeft } from 'lucide-react'
import { getAllNews, getNewsBySlug } from '@/lib/news'
import { Badge } from '@/components/ui/badge'

interface Props {
  params: Promise<{ slug: string }>
}

const categoryLabel: Record<string, string> = {
  company: 'Tin công ty',
  product: 'Sản phẩm mới',
  event: 'Sự kiện',
  tech: 'Công nghệ',
}

export async function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const news = await getNewsBySlug(slug)
  if (!news) return { title: 'Không tìm thấy' }
  return { title: news.title, description: news.excerpt }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const news = await getNewsBySlug(slug)

  if (!news) notFound()

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <Link
        href="/tin-tuc"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#003087] mb-6 transition-colors"
      >
        <ChevronLeft size={14} /> Quay lại tin tức
      </Link>

      <div className="flex items-center gap-3 mb-4">
        {news.category && (
          <Badge variant="secondary">{categoryLabel[news.category] ?? news.category}</Badge>
        )}
        <span className="flex items-center gap-1 text-sm text-gray-400">
          <Calendar size={13} />
          <time>{new Date(news.date).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-[#003087] leading-tight mb-6">
        {news.title}
      </h1>

      {news.thumbnail && (
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 bg-gray-100">
          <Image src={news.thumbnail} alt={news.title} fill className="object-cover" priority />
        </div>
      )}

      <div
        className="prose prose-gray max-w-none prose-headings:text-[#003087] prose-a:text-[#003087] prose-li:text-gray-600"
        dangerouslySetInnerHTML={{ __html: news.content ?? '' }}
      />
    </article>
  )
}
