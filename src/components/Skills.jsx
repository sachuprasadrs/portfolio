const skills = {
  Languages: ["Python", "Java", "JavaScript", "SQL"],
  Frontend: ["React", "HTML", "CSS", "Tailwind"],
  Backend: ["Django", "REST APIs", "Authentication", "ORM"],
  Database: ["PostgreSQL", "MySQL", "SQLite"],
  Tools: ["Git", "GitHub", "Docker", "Linux"],
  AI_ML: ["PyTorch", "NLP", "Graph Neural Networks"]
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-light mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border border-zinc-800 p-8"
            >
              <h3 className="text-2xl mb-4">
                {category.replace("_", " / ")}
              </h3>

              <div className="flex flex-wrap gap-3">

                {items.map((item) => (
                  <span
                    key={item}
                    className="border border-zinc-700 px-3 py-1 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}