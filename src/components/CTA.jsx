export default function CTA() {
  return (
    <section
      className="relative bg-blue-950 overflow-hidden mx-6 mt-[70px] mb-[140px] px-6 py-[72px] text-center"
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
          className="inline-flex w-[160px] h-[40px] items-center justify-center text-preset-8 border-[1.5px] border-white text-white hover:bg-white hover:text-blue-950 transition-colors"
          aria-label="서비스 작동 방식 알아보기"
        >
          HOW WE WORK
        </a>
      </div>
    </section>
  )
}
