import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-[#001f5b] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <div className="font-bold text-2xl tracking-tight mb-3">
              MH<span className="text-[#e8232a]">connect</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Công ty Cổ phần MHconnect chuyên cung cấp giải pháp và dịch vụ Viễn Thông, CNTT, Truyền Thông cho doanh nghiệp.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm font-bold"
              >
                f
              </a>
            </div>
          </div>

          {/* HQ */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Trụ sở Hà Nội</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blue-300" />
                <span>P.602, Hanoi Group Building, 445 Đội Cấn, Phường Ngọc Hà, Ba Đình, Hà Nội</span>
              </li>
              <li className="flex gap-2">
                <Phone size={15} className="shrink-0 text-blue-300" />
                <a href="tel:+842437674480" className="hover:text-white transition-colors">(84-24) 3767 4480</a>
              </li>
              <li className="flex gap-2">
                <Mail size={15} className="shrink-0 text-blue-300" />
                <a href="mailto:sales@mhconnect.vn" className="hover:text-white transition-colors">sales@mhconnect.vn</a>
              </li>
            </ul>
          </div>

          {/* HCM Branch */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Chi nhánh TP. HCM</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blue-300" />
                <span>Tầng 18, Tòa nhà Indochina Park Tower, 4 Nguyễn Đình Chiểu, Phường Tân Định, Quận 1, TP. HCM</span>
              </li>
            </ul>

            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mt-6 mb-3">Liên kết nhanh</h3>
            <div className="flex flex-col gap-1 text-sm">
              {['Giới thiệu', 'Dịch vụ', 'Tin tức', 'Liên hệ'].map((item, i) => (
                <Link
                  key={i}
                  href={`/${item === 'Giới thiệu' ? 'gioi-thieu' : item === 'Dịch vụ' ? 'dich-vu' : item === 'Tin tức' ? 'tin-tuc' : 'lien-he'}`}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />
        <p className="text-center text-xs text-blue-300">
          © {new Date().getFullYear()} Công ty Cổ phần MHconnect. Tất cả quyền được bảo lưu.
        </p>
      </div>
    </footer>
  )
}
