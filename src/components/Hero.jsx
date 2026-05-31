import { profile } from "../data/profile"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">

      <div className="max-w-6xl mx-auto w-full">

        <p className="uppercase tracking-[0.5em] text-zinc-600 mb-6">
          {profile.role}
        </p>

        <h1 className="noir-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-none">
          {profile.name}
        </h1>

        <div className="w-40 h-px bg-zinc-700 my-10" />

        <p className="text-zinc-400 text-lg md:text-xl leading-9 max-w-2xl">
          {profile.tagline}
        </p>

        <p className="text-zinc-500 mt-6 max-w-2xl text-lg leading-8">
          {profile.description}
        </p>

        <div className="flex gap-4 mt-10">

          <a
            href="#projects"
            className="border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}