export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">

      <div className="max-w-6xl mx-auto w-full">

        <p className="uppercase tracking-[0.5em] text-zinc-600 mb-6">
          Software Engineer
        </p>

        <h1 className="noir-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-none">
          SACHUPRASAD
          <br />
          R S
        </h1>

        <div className="w-40 h-px bg-zinc-700 my-10" />

        <p className="text-zinc-400 text-lg md:text-xl leading-9 max-w-2xl">
          Full-Stack Development • AI/ML Engineering
          <br />
          Building scalable software systems,
          intelligent applications,
          and practical solutions to real-world problems.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <a
            href="#projects"
            className="border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/sachuprasadrs"
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