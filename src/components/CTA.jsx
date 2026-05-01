export default function CTA() {
  return (
    <section
      className="relative bg-blue-950 overflow-hidden mx-6 my-16 px-8 py-16 text-center"
      aria-label="서비스 소개 바로가기"
    >
      {/* 배경 패턴 */}
      <img
        src="/images/bg-pattern-how-we-work-mobile.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 md:hidden pointer-events-none"
      />

      <div className="relative z-10">
        <h2 className="text-preset-4 text-white mb-10">
          Find out more about how we work
        </h2>
        <a
          href="#"
          className="inline-block text-preset-8 border-2 border-white text-white px-10 py-4 hover:bg-white hover:text-blue-950 transition-colors"
          aria-label="서비스 작동 방식 알아보기"
        >
          HOW WE WORK
        </a>
      </div>
    </section>
  )
}
