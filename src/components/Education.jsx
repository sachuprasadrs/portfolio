import { education } from "../data/education"

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="noir-heading text-6xl mb-16">
          Education
        </h2>

        <div className="space-y-12">

          {education.map((item) => (
            <div
              key={item.id}
              className="border-l border-zinc-700 pl-8"
            >
              <p className="text-zinc-500 mb-2">
                {item.year}
              </p>

              <h3 className="text-2xl">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-3 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}