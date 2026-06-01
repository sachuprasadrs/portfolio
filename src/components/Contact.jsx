import { profile } from "../data/profile"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="noir-heading text-6xl mb-16">
          Contact
        </h2>

        <div className="space-y-8">

          <p className="text-zinc-400 text-lg">
            Interested in collaborating, discussing projects,
            or exploring opportunities.
          </p>

          <div className="space-y-4 text-lg">

            <p>
              <span className="text-zinc-500">
                Email:
              </span>{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-zinc-200 hover:text-white transition"
              >
                {profile.email}
              </a>
            </p>

            <p>
              <span className="text-zinc-500">
                GitHub:
              </span>{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-200 hover:text-white transition"
              >
                github.com/sachuprasadrs
              </a>
            </p>

            <p>
              <span className="text-zinc-500">
                LinkedIn:
              </span>{" "}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-200 hover:text-white transition"
              >
                linkedin.com/in/sachuprasadrs
              </a>
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}