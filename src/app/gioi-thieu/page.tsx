import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = { title: 'Giới thiệu' }

const strengths = [
  'Kinh nghiệm hơn 15 năm trong lĩnh vực viễn thông và CNTT',
  'Đội ngũ kỹ sư được đào tạo chuyên sâu, có chứng chỉ quốc tế',
  'Hợp tác với các hãng hàng đầu thế giới: EXFO, VIAVI, SPIRENT...',
  'Dịch vụ hỗ trợ kỹ thuật 24/7 cho khách hàng doanh nghiệp',
  'Hiện diện tại Hà Nội và TP. Hồ Chí Minh',
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-[#003087] mb-2">Giới thiệu</h1>
      <p className="text-gray-500 mb-10">Công ty Cổ phần MHconnect</p>

      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Về chúng tôi</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Công ty Cổ phần MHconnect được thành lập với sứ mệnh cung cấp các giải pháp và dịch vụ toàn diện trong lĩnh vực
              Viễn Thông, Công Nghệ Thông Tin và Truyền Thông cho các doanh nghiệp tại Việt Nam.
            </p>
            <p>
              Với đội ngũ chuyên gia giàu kinh nghiệm và mạng lưới đối tác quốc tế rộng khắp, MHconnect cam kết mang đến
              cho khách hàng những giải pháp công nghệ tiên tiến nhất, đáp ứng mọi nhu cầu từ tư vấn, cung cấp thiết
              bị đến triển khai và vận hành hệ thống.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Thế mạnh</h2>
          <ul className="space-y-3">
            {strengths.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#003087] text-white rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: '15+', label: 'Năm kinh nghiệm' },
          { value: '200+', label: 'Khách hàng' },
          { value: '500+', label: 'Dự án hoàn thành' },
          { value: '2', label: 'Văn phòng' },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-bold text-blue-200 mb-1">{stat.value}</div>
            <div className="text-sm text-blue-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
