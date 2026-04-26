import { useState, useEffect } from 'react'

const navLinks = ['HOW WE WORK', 'BLOG', 'ACCOUNT']

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 데스크톱 사이즈(768px 이상)로 리사이즈 시 메뉴 자동 닫힘
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 메뉴 열림 시 body 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <header className="relative z-50 bg-white">
      <div className="flex items-center justify-between px-6 py-5">
        <a href="/" aria-label="Insure 홈으로 이동">
          <img src="/images/logo.svg" alt="Insure" />
        </a>

        {/* 모바일 햄버거/닫기 버튼 */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
        >
          <img
            src={isMenuOpen ? '/images/icon-close.svg' : '/images/icon-hamburger.svg'}
            alt=""
            aria-hidden="true"
          />
        </button>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans font-bold text-[13px] tracking-[1.5px] text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="font-sans font-bold text-[13px] tracking-[1.5px] border-2 border-neutral-950 text-neutral-950 px-6 py-3 hover:bg-neutral-950 hover:text-white transition-colors"
          >
            VIEW PLANS
          </a>
        </nav>
      </div>

      {/* 모바일 전체화면 메뉴 오버레이 */}
      {isMenuOpen && (
        <div
          className="fixed inset-x-0 top-[72px] bottom-0 bg-[#2C2830] flex flex-col items-center pt-12 overflow-hidden md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
        >
          {/* 배경 패턴 */}
          <img
            src="/images/bg-pattern-mobile-nav.svg"
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-full"
          />

          <nav className="relative z-10 flex flex-col items-center gap-8 w-full px-6" aria-label="모바일 메뉴">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans font-bold text-[20px] tracking-[1.5px] text-white w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="font-sans font-bold text-[20px] tracking-[1.5px] border-2 border-white text-white w-full text-center py-4 mt-2 hover:bg-white hover:text-neutral-950 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              VIEW PLANS
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
