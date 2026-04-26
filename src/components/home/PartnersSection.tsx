import Link from 'next/link'
import Image from 'next/image'

const partners = [
  { name: 'Consultix',  logo: '/images/partners/consultix.png',  description: 'Tối ưu hóa mạng di động' },
  { name: 'VeEX Inc',   logo: '/images/partners/veex.png',       description: 'Đo kiểm viễn thông & CNTT' },
  { name: 'Planet',     logo: '/images/partners/planet.png',     description: 'Thiết bị mạng doanh nghiệp' },
  { name: 'Ekahau',     logo: '/images/partners/ekahau.png',     description: 'Khảo sát & thiết kế WiFi' },
  { name: 'Furukawa',   logo: '/images/partners/furukawa.png',   description: 'Cáp quang & hạ tầng mạng' },
  { name: 'Frankin',    logo: '/images/partners/frankin.png',    description: 'Giải pháp nguồn điện mạng' },
  { name: 'Synway',     logo: '/images/partners/synway.png',     description: 'Thiết bị thoại & VoIP' },
  { name: 'ATCOM',      logo: '/images/partners/atcom.png',      description: 'IP Phone & tổng đài' },
  { name: 'HRUI',       logo: '/images/partners/hrui.png',       description: 'Switch công nghiệp' },
]

export default function PartnersSection() {
  return (
    <section className="py-14 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003087] mb-2">Đối tác & Nhà cung cấp</h2>
          <p className="text-gray-500 text-sm">Hợp tác với các hãng hàng đầu thế giới</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              title={p.description}
              className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="relative w-full h-12">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
              <span className="text-[11px] text-gray-500 text-center leading-tight">{p.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/doi-tac" className="text-sm font-medium text-[#003087] hover:underline">
            Xem tất cả đối tác →
          </Link>
        </div>
      </div>
    </section>
  )
}
