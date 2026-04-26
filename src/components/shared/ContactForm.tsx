'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-green-50 rounded-xl border border-green-100">
        <div className="text-3xl mb-3">✓</div>
        <p className="font-semibold text-green-800">Gửi thành công!</p>
        <p className="text-sm text-green-600 mt-1">Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-700 underline"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
          <input
            type="text"
            required
            placeholder="Nguyễn Văn A"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Công ty</label>
          <input
            type="text"
            placeholder="Tên công ty"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input
          type="email"
          required
          placeholder="email@company.com"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
        <input
          type="tel"
          placeholder="0909 xxx xxx"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087] focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung *</label>
        <textarea
          required
          rows={4}
          placeholder="Mô tả yêu cầu của bạn..."
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087] focus:border-transparent resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#003087] hover:bg-[#00256b] text-white"
      >
        {loading ? (
          'Đang gửi...'
        ) : (
          <>
            <Send size={14} className="mr-2" /> Gửi yêu cầu
          </>
        )}
      </Button>
    </form>
  )
}
