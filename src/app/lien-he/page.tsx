import type { Metadata } from 'next'
import { MapPin, Phone, Mail } from 'lucide-react'
import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = { title: 'Liên hệ' }

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold text-[#003087] mb-2">Liên hệ</h1>
      <p className="text-gray-500 mb-10">Chúng tôi sẵn sàng hỗ trợ bạn. Hãy để lại thông tin để được tư vấn.</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact info */}
        <div className="space-y-8">
          <div>
            <h2 className="font-semibold text-gray-900 mb-4">Trụ sở Hà Nội</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#003087] shrink-0 mt-0.5" />
                <span>P.602, Hanoi Group Building, 445 Đội Cấn, Phường Ngọc Hà, Ba Đình, Hà Nội</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#003087] shrink-0" />
                <a href="tel:+842437674480" className="hover:text-[#003087] transition-colors">(84-24) 3767 4480</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#003087] shrink-0" />
                <a href="mailto:sales@mhconnect.vn" className="hover:text-[#003087] transition-colors">sales@mhconnect.vn</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 mb-4">Chi nhánh TP. HCM</h2>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#003087] shrink-0 mt-0.5" />
                <span>Tầng 18, Tòa nhà Indochina Park Tower, 4 Nguyễn Đình Chiểu, Phường Tân Định, Quận 1, TP. HCM</span>
              </li>
            </ul>
          </div>

          {/* Map embed placeholder */}
          <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Google Maps embed (thêm API key)
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-4">Gửi yêu cầu tư vấn</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
