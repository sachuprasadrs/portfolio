import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="noir-heading text-6xl mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-zinc-800 p-10 hover:border-zinc-600 transition"
            >
              <p className="text-zinc-600 text-sm tracking-[0.4em]">
                PROJECT {String(project.id).padStart(3, "0")}
              </p>

              <h3 className="text-3xl mt-4">
                {project.title}
              </h3>

              <p className="text-zinc-400 mt-4 leading-7">
                {project.description}
              </p>

              <p className="text-zinc-500 mt-6">
                {project.tech.join(" • ")}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}