import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = { title: 'Đối tác' }

const partners = [
  {
    name: 'VeEX Inc',
    logo: '/images/partners/veex.png',
    category: 'Đo kiểm & phân tích',
    description:
      'VeEX Inc là nhà sản xuất thiết bị đo kiểm viễn thông và CNTT hàng đầu thế giới. Sản phẩm bao gồm máy đo cáp quang, đo truyền dẫn mạng, phân tích hiệu năng và giám sát chất lượng dịch vụ.',
    website: 'https://www.veexinc.com',
  },
  {
    name: 'Consultix',
    logo: '/images/partners/consultix.png',
    category: 'Tối ưu mạng di động',
    description:
      'Consultix cung cấp các giải pháp đo kiểm, tối ưu hóa và phân tích mạng di động (2G/3G/4G/5G), được sử dụng rộng rãi bởi các nhà khai thác viễn thông lớn trên toàn thế giới.',
    website: 'https://www.consultix.com',
  },
  {
    name: 'Planet',
    logo: '/images/partners/planet.png',
    category: 'Thiết bị mạng',
    description:
      'Planet Technology là nhà sản xuất thiết bị mạng doanh nghiệp bao gồm Ethernet Switch, WiFi Access Point, IP Camera và các thiết bị hạ tầng mạng chuyên nghiệp.',
    website: 'https://www.planet.com.tw',
  },
  {
    name: 'Ekahau',
    logo: '/images/partners/ekahau.png',
    category: 'WiFi Design & Survey',
    description:
      'Ekahau là công ty hàng đầu thế giới về giải pháp khảo sát, thiết kế và tối ưu hóa mạng WiFi doanh nghiệp. Phần mềm Ekahau AI Pro được dùng bởi hàng nghìn kỹ sư mạng toàn cầu.',
    website: 'https://www.ekahau.com',
  },
  {
    name: 'Furukawa',
    logo: '/images/partners/furukawa.png',
    category: 'Cáp quang & hạ tầng',
    description:
      'Furukawa Electric là tập đoàn Nhật Bản chuyên sản xuất cáp quang, thiết bị truyền dẫn và các giải pháp hạ tầng mạng với chất lượng hàng đầu thế giới.',
    website: 'https://www.furukawa.com',
  },
  {
    name: 'Frankin',
    logo: '/images/partners/frankin.png',
    category: 'Nguồn điện mạng',
    description:
      'Franklin Electric cung cấp các giải pháp nguồn điện cho hạ tầng viễn thông và mạng, đảm bảo tính liên tục và ổn định cho các hệ thống quan trọng.',
    website: '#',
  },
  {
    name: 'Synway',
    logo: '/images/partners/synway.png',
    category: 'Thoại & VoIP',
    description:
      'Synway Communication chuyên sản xuất các thiết bị thoại VoIP, cổng kết nối thoại (VoIP Gateway) và các giải pháp hợp nhất thông tin liên lạc cho doanh nghiệp.',
    website: 'https://www.synway.net',
  },
  {
    name: 'ATCOM',
    logo: '/images/partners/atcom.png',
    category: 'IP Phone & Tổng đài',
    description:
      'ATCOM Technology là nhà sản xuất điện thoại IP (IP Phone), tổng đài IP-PBX và các thiết bị hội nghị truyền hình chuyên nghiệp cho doanh nghiệp.',
    website: 'https://www.atcom.cn',
  },
  {
    name: 'HRUI',
    logo: '/images/partners/hrui.png',
    category: 'Switch công nghiệp',
    description:
      'HRUI cung cấp các dòng Switch công nghiệp, Switch PoE và thiết bị mạng chịu nhiệt độ cao, phù hợp cho các môi trường công nghiệp khắc nghiệt.',
    website: '#',
  },
]

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#003087] mb-2">Đối tác & Nhà cung cấp</h1>
        <p className="text-gray-500 max-w-xl">
          MHconnect hợp tác với các hãng công nghệ hàng đầu thế giới để mang đến những giải pháp tốt nhất cho khách hàng tại Việt Nam.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((p) => (
          <Card key={p.name} className="hover:shadow-md transition-shadow border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="relative h-12 w-36 shrink-0">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain object-left"
                    sizes="144px"
                  />
                </div>
                <Badge variant="secondary" className="text-xs shrink-0">{p.category}</Badge>
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">{p.name}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
              {p.website !== '#' && (
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#003087] hover:underline"
                >
                  Trang chủ đối tác <ExternalLink size={11} />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
