/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Gem, 
  Award, 
  TrendingUp, 
  TrendingDown, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Mail,
  Clock
} from 'lucide-react';

const GOLD_PRICES = [
  { type: 'SJC 1L - 10L', buy: 82500, sell: 85000, trend: 'up' },
  { type: 'Nhẫn Tròn Trơn 9999', buy: 74200, sell: 75800, trend: 'up' },
  { type: 'Vàng 24K (99.99%)', buy: 73500, sell: 75000, trend: 'down' },
  { type: 'Vàng 18K (75%)', buy: 54800, sell: 57200, trend: 'up' },
  { type: 'Vàng 14K (58.3%)', buy: 42300, sell: 44800, trend: 'up' },
];

const COLLECTIONS = [
  {
    title: 'Tình Yêu Vĩnh Cửu',
    subtitle: 'Bộ sưu tập nhẫn cưới 2024',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    category: 'Nhẫn Cưới'
  },
  {
    title: 'Kim Cương Tinh Tế',
    subtitle: 'Đẳng cấp và quyền quý',
    image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=800',
    category: 'Trang Sức Kim Cương'
  },
  {
    title: 'Quà Tặng Phong Thủy',
    subtitle: 'May mắn và thịnh vượng',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    category: 'Vàng Tài Lộc'
  }
];

const FEATURES = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Thu đổi 100% giá trị',
    desc: 'Cam kết bảo toàn giá trị tài sản cho khách hàng.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Kiểm định quốc tế',
    desc: 'Mọi sản phẩm đều có giấy tờ chứng nhận GIA, SJC.'
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'Chế tác thủ công',
    desc: 'Đội ngũ nghệ nhân kim hoàn hơn 20 năm kinh nghiệm.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Uy tín thương hiệu',
    desc: 'Hơn 30 năm đồng hành cùng niềm tin khách hàng.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black flex flex-col">
      {/* Header */}
      <header className="h-[70px] flex justify-between items-center px-10 border-b border-gold/20 sticky top-0 bg-black/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-3">
          <div className="text-gold font-display font-bold text-xl tracking-[2px] uppercase">
            Bảo Tín Minh Hưng
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 font-sans text-[11px] uppercase font-medium tracking-wider">
          {['Trang chủ', 'Trang sức cưới', 'Vàng 9999', 'Bảng giá vàng', 'Liên hệ'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-white opacity-80 hover:opacity-100 hover:text-gold transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://zalo.me" 
            className="cta-zalo gold-gradient px-5 py-2 rounded-full text-black text-[11px] font-bold uppercase shine-effect shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
          >
            Tư vấn Zalo
          </a>
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col"
          >
            <button 
              className="self-end p-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 mt-12">
              {['Trang chủ', 'Trang sức cưới', 'Vàng 9999', 'Bảng giá vàng', 'Liên hệ'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="text-3xl font-serif text-white hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Grid */}
      <main className="flex-1 editorial-grid p-10 max-w-[1440px] mx-auto w-full">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center border-l-2 border-gold pl-10 bg-gradient-to-r from-white/5 to-transparent">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-[12px] uppercase tracking-[3px] mb-4 block font-medium">
              Tinh Hoa Chế Tác
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] mb-6 font-normal">
              NƠI TÔN VINH <br />
              VẺ ĐẸP <span className="text-gold italic">ĐÍCH THỰC</span>
            </h1>
            <p className="text-[14px] opacity-70 max-w-[500px] leading-relaxed mb-8 font-light">
              Trang sức cao cấp, chế tác thủ công tinh xảo bởi những nghệ nhân hàng đầu. 
              Chúng tôi giữ trọn niềm tin trong từng sản phẩm vàng bạc đá quý.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 border border-gold text-gold text-[12px] uppercase tracking-[2px] hover:bg-gold hover:text-black transition-all duration-300">
                Khám Phá Bộ Sưu Tập
              </button>
            </div>
            
            <div className="flex gap-8 mt-12">
              {['Thu đổi 100%', 'Kiểm định GIA', 'Thủ công tinh xảo'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[10px] text-gold uppercase tracking-wider font-bold">
                  <div className="w-1 h-1 bg-gold rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Price Board (Sidebar) */}
        <aside className="glass-card rounded-sm p-6 flex flex-col row-span-2">
          <h2 className="text-gold font-serif text-lg mb-6 pb-2 border-b border-gold/20 text-center">
            Giá Vàng Trực Tuyến
          </h2>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="text-[10px] uppercase opacity-60">
                  <th className="text-left py-2 font-normal">Loại Vàng</th>
                  <th className="text-left py-2 font-normal">Mua vào</th>
                  <th className="text-left py-2 font-normal">Bán ra</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {GOLD_PRICES.map((item) => (
                  <tr key={item.type} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 pr-2 font-medium">{item.type}</td>
                    <td className="py-3 font-mono">{item.buy.toLocaleString()}</td>
                    <td className="py-3 font-mono text-gold flex items-center gap-1">
                      {item.sell.toLocaleString()}
                      <span className={item.trend === 'up' ? 'text-green-500 text-[10px]' : 'text-ruby text-[10px]'}>
                        {item.trend === 'up' ? '▲' : '▼'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="text-[10px] opacity-50 mb-3 uppercase tracking-wider">Đăng ký nhận báo giá</div>
            <div className="flex border-b border-gold pb-1">
              <input 
                type="email" 
                placeholder="Email của bạn..." 
                className="bg-transparent border-none text-white text-[12px] flex-1 outline-none placeholder:opacity-30"
              />
              <button className="text-gold text-[12px] hover:translate-x-1 transition-transform">
                →
              </button>
            </div>
          </div>
        </aside>

        {/* Collections Grid */}
        <section className="grid grid-cols-3 gap-4">
          {COLLECTIONS.map((item) => (
            <div 
              key={item.title}
              className="relative overflow-hidden border border-white/10 flex flex-col justify-end p-5 group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-gold text-[14px] uppercase mb-1 font-serif">{item.title}</h3>
                <p className="text-[11px] opacity-70 font-light">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="h-[60px] flex justify-between items-center px-10 text-[11px] opacity-60 border-t border-white/5">
        <div>© 2026 VÀNG BẠC BẢO TÍN MINH HƯNG</div>
        <div className="hidden md:block">Số 22 Phố Nối, Mỹ Hào, Hưng Yên</div>
        <div className="flex gap-6">
          {['Facebook', 'Instagram', 'Zalo'].map(social => (
            <a key={social} href="#" className="hover:text-gold transition-colors">{social}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
