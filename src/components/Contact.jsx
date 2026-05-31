import { profile } from "../data/profile"

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="noir-heading text-6xl mb-16">
          Contact
        </h2>

        <div className="space-y-6">

          <p className="text-zinc-400">
            Interested in collaborating or discussing opportunities.
          </p>

          <p>
            Email:
            {" "}
            <span className="text-zinc-300">
              {profile.email}
            </span>
          </p>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="block text-zinc-300"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}