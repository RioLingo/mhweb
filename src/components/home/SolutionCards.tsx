import Link from 'next/link'
import { Network, Server, BarChart3, Code2, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const solutions = [
  {
    icon: BarChart3,
    title: 'Đo kiểm & phân tích mạng',
    description: 'Máy đo cáp quang, máy đo truyền dẫn mạng, phân tích hiệu năng thiết bị viễn thông và CNTT.',
    href: '/dich-vu#do-kiem',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Network,
    title: 'Thiết bị mạng & viễn thông',
    description: 'Ethernet Switch, WiFi Router/AP, PDH/SDH, OTN, xWDM, tổng đài điện thoại cho doanh nghiệp.',
    href: '/dich-vu#thiet-bi',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Server,
    title: 'Giám sát hạ tầng & QoS',
    description: 'Giám sát mạng cáp quang, IP/Ethernet, hiệu năng thiết bị và chất lượng trải nghiệm người dùng.',
    href: '/dich-vu#giam-sat',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: Code2,
    title: 'Giải pháp phần mềm',
    description: 'Phần mềm chuyển đổi số: quản lý tài sản, quản lý dự án, quản lý dữ liệu tập trung cho doanh nghiệp.',
    href: '/dich-vu#phan-mem',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

export default function SolutionCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-3">Giải pháp & Dịch vụ</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            MHconnect cung cấp đầy đủ các giải pháp viễn thông, CNTT cho doanh nghiệp từ thiết bị đến phần mềm
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <Card key={s.title} className="group hover:shadow-lg transition-shadow border-0 shadow-sm">
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl ${s.bg} mb-4`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.description}</p>
                <Link
                  href={s.href}
                  className={`inline-flex items-center gap-1 text-sm font-medium ${s.color} hover:gap-2 transition-all`}
                >
                  Xem thêm <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
