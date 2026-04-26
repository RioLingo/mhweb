import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const newsDir = path.join(process.cwd(), 'content/news')

export interface NewsItem {
  slug: string
  title: string
  date: string
  excerpt: string
  thumbnail: string
  category: string
  content?: string
}

export function getAllNews(): NewsItem[] {
  if (!fs.existsSync(newsDir)) return []
  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith('.md'))
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(newsDir, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        thumbnail: data.thumbnail ?? '',
        category: data.category ?? '',
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  const filePath = path.join(newsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html).process(content)
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    thumbnail: data.thumbnail ?? '',
    category: data.category ?? '',
    content: processed.toString(),
  }
}
