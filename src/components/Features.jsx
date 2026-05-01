import features from '../data/features'

export default function Features() {
  return (
    <section className="px-6 pt-[140px] pb-[70px] text-center" aria-label="우리가 다른 이유">
      {/* 구분선 */}
      <div className="w-[150px] h-[1px] bg-pink-400 mx-auto mb-10 md:hidden" aria-hidden="true" />

      <h2 className="text-preset-3 text-gray-950 mb-20">
        We're different
      </h2>

      <div className="flex flex-col items-center gap-14">
        {features.map((feature) => (
          <article key={feature.id} className="flex flex-col items-center max-w-xs">
            <img
              src={feature.icon}
              alt=""
              aria-hidden="true"
              className="mb-8 w-[86px] h-[86px]"
            />
            <h3 className="text-preset-5 text-gray-950 mb-4">
              {feature.title}
            </h3>
            <p className="text-preset-7 text-gray-700">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
