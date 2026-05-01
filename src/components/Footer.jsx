import footerLinks from '../data/footer'

const socialIcons = [
  { src: '/images/icon-facebook.svg', label: 'Facebook' },
  { src: '/images/icon-twitter.svg', label: 'Twitter' },
  { src: '/images/icon-pinterest.svg', label: 'Pinterest' },
  { src: '/images/icon-instagram.svg', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-50" aria-label="하단 정보">
      {/* 상단: 로고 + 소셜 */}
      <div className="relative overflow-hidden bg-gray-50 px-6 py-10 flex flex-col items-center gap-8">
        {/* 배경 패턴 */}
        <img
          src="/images/bg-pattern-footer-mobile.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col items-center gap-8 w-full">
          <a href="/" aria-label="Insure 홈으로 이동">
            <img src="/images/logo.svg" alt="Insure" />
          </a>

          <div className="w-full h-px bg-gray-700 opacity-30" aria-hidden="true" />

          <nav className="flex items-center gap-4" aria-label="소셜 미디어">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href="#"
                aria-label={`${icon.label}로 이동`}
                className="hover:opacity-70 transition-opacity"
              >
                <img src={icon.src} alt={icon.label} />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 하단: 링크 그룹 */}
      <div className="px-6 py-10 flex flex-col items-center gap-10">
        {footerLinks.map((section) => (
          <div key={section.group} className="w-full text-center">
            <h3 className="text-preset-8 text-gray-700 mb-6">
              {section.group}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-preset-8 text-blue-950 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
