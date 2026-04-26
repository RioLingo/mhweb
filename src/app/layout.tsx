import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: {
    default: 'MHconnect – Giải pháp Viễn Thông, CNTT, Truyền Thông',
    template: '%s | MHconnect',
  },
  description: 'Công ty Cổ phần MHconnect cung cấp giải pháp và dịch vụ Viễn Thông, CNTT, Truyền Thông cho doanh nghiệp.',
  keywords: ['MHconnect', 'viễn thông', 'CNTT', 'giải pháp mạng', 'đo cáp quang'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
