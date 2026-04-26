import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = { title: 'Dịch vụ' }

const services = [
  {
    id: 'do-kiem',
    title: 'Dịch vụ kỹ thuật Viễn Thông & CNTT',
    badge: 'Kỹ thuật',
    image: '/images/services/device-analytics.png',
    description:
      'Tư vấn, phân tích, đo kiểm, kiểm tra hạ tầng mạng truyền dẫn và đánh giá thiết bị, phần mềm, dịch vụ trước khi đưa vào khai thác vận hành.',
    details: [
      'Đo kiểm và phân tích hiệu năng mạng cáp quang',
      'Kiểm tra hạ tầng mạng IP/Ethernet',
      'Đánh giá chất lượng thiết bị trước triển khai',
      'Phân tích sự cố và tối ưu hóa mạng',
    ],
  },
  {
    id: 'dao-tao',
    title: 'Dịch vụ đào tạo & chuyển giao công nghệ',
    badge: 'Đào tạo',
    image: '/images/services/training.jpg',
    description:
      'Tổ chức các khóa đào tạo và chuyển giao công nghệ theo dự án, phối hợp cùng các nhà sản xuất thiết bị nổi tiếng và đơn vị đào tạo quốc tế.',
    details: [
      'Đào tạo vận hành thiết bị đo kiểm chuyên nghiệp',
      'Chứng chỉ kỹ thuật được công nhận quốc tế',
      'Đào tạo tại chỗ hoặc trực tuyến theo yêu cầu',
      'Chuyển giao công nghệ cho đội ngũ kỹ thuật',
    ],
  },
  {
    id: 'tich-hop',
    title: 'Tích hợp hệ thống Viễn Thông & CNTT',
    badge: 'Tích hợp hệ thống',
    image: '/images/services/datacenter.jpg',
    description:
      'Hơn 10 năm kinh nghiệm cung cấp dịch vụ trọn gói từ thiết kế, cung cấp thiết bị, lắp đặt, cấu hình đến triển khai kỹ thuật toàn bộ hệ thống.',
    details: [
      'Thiết kế và quy hoạch hạ tầng mạng',
      'Cung cấp và lắp đặt thiết bị chính hãng',
      'Cấu hình và tích hợp hệ thống hoàn chỉnh',
      'Bảo hành và hỗ trợ kỹ thuật sau triển khai',
    ],
  },
  {
    id: 'bao-tri',
    title: 'Sửa chữa, hiệu chuẩn & cung cấp linh kiện',
    badge: 'Bảo trì',
    image: '/images/services/repair.jpg',
    description:
      'Là đại diện ủy quyền chính thức của các hãng Spirent, VeEX, Sunrise Telecom — cung cấp dịch vụ sửa chữa, hiệu chuẩn và linh kiện thay thế chính hãng.',
    details: [
      'Sửa chữa thiết bị đo kiểm chính hãng',
      'Hiệu chuẩn thiết bị theo tiêu chuẩn quốc tế',
      'Cung cấp linh kiện thay thế chính hãng',
      'Dịch vụ bảo hành mở rộng cho thiết bị',
    ],
  },
  {
    id: 'cho-thue',
    title: 'Dịch vụ cho thuê thiết bị & phần mềm',
    badge: 'Cho thuê',
    image: '/images/services/rental.jpg',
    description:
      'Cho thuê thiết bị đo kiểm và phần mềm ngắn hạn hoặc dài hạn, bao gồm bản quyền phần mềm, hướng dẫn chuyên gia và hỗ trợ kỹ thuật chuyên nghiệp.',
    details: [
      'Cho thuê thiết bị đo kiểm theo ngày/tuần/tháng',
      'Bản quyền phần mềm đo kiểm linh hoạt',
      'Kỹ sư hỗ trợ trực tiếp tại hiện trường',
      'Tiết kiệm chi phí đầu tư thiết bị đắt tiền',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#003087] mb-2">Dịch vụ</h1>
        <p className="text-gray-500 max-w-xl">
          MHconnect cung cấp đầy đủ các dịch vụ kỹ thuật từ tư vấn, triển khai đến bảo trì cho hạ tầng Viễn Thông và CNTT.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {services.map((s, i) => (
          <Card key={s.id} id={s.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Image */}
                <div className="relative w-full md:w-80 lg:w-96 h-56 md:h-auto shrink-0 bg-gray-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <Badge variant="secondary" className="mb-3">{s.badge}</Badge>
                  <h2 className="text-xl font-bold text-[#003087] mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#003087] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-1 mt-6 text-sm font-medium text-[#003087] hover:gap-2 transition-all"
                  >
                    Liên hệ tư vấn <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
