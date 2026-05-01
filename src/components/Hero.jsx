export default function Hero() {
  return (
    <section className="relative bg-blue-950" aria-label="메인 배너">
      {/* 모바일: 이미지가 위 */}
      <img
        src="/images/image-intro-mobile.jpg"
        alt="행복한 가족의 모습"
        className="w-full block md:hidden"
      />

      {/* 배경 패턴 (모바일) */}
      <img
        src="/images/bg-pattern-intro-left-mobile.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-[452px] md:hidden pointer-events-none"
      />
      <img
        src="/images/bg-pattern-intro-right-mobile.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-[-176px] md:hidden pointer-events-none z-20"
      />

      {/* 텍스트 영역 */}
      <div className="relative z-10 px-6 py-[93px] text-center md:text-left">
        {/* 데스크톱용 구분선 */}
        <div className="hidden md:block w-36 h-px bg-white mb-12 opacity-50" aria-hidden="true" />

        <h1 className="text-preset-3 text-white mb-4">
          Humanizing your insurance.
        </h1>
        <p className="text-preset-7 text-white mb-8 max-w-sm mx-auto md:mx-0">
          Get your life insurance coverage easier and faster. We blend our expertise
          and technology to help you find the plan that's right for you. Ensure you
          and your loved ones are protected.
        </p>
        <a
          href="#"
          className="inline-flex w-[146px] h-[40px] items-center justify-center text-preset-8 border-[1.5px] border-white text-white hover:bg-white hover:text-blue-950 transition-colors"
          aria-label="보험 플랜 보기"
        >
          VIEW PLANS
        </a>
      </div>
    </section>
  )
}
