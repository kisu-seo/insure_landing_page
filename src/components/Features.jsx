import features from '../data/features'

export default function Features() {
  return (
    <section className="px-6 py-16 text-center" aria-label="우리가 다른 이유">
      {/* 구분선 */}
      <div className="w-36 h-px bg-blue-950 mx-auto mb-8 opacity-30 md:hidden" aria-hidden="true" />

      <h2 className="text-preset-3 text-blue-950 mb-16">
        We're different
      </h2>

      <div className="flex flex-col items-center gap-12">
        {features.map((feature) => (
          <article key={feature.id} className="flex flex-col items-center max-w-xs">
            <img
              src={feature.icon}
              alt=""
              aria-hidden="true"
              className="mb-8 w-20 h-20"
            />
            <h3 className="text-preset-5 text-blue-950 mb-4">
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
