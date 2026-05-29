export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">

        <p className="uppercase tracking-[0.5em] text-zinc-600 mb-6">
          Software Engineer
        </p>

        <h1 className="text-7xl md:text-8xl font-light leading-none">
          SACHUPRASAD
          <br />
          R S
        </h1>

        <div className="w-32 h-px bg-zinc-700 my-8" />

        <p className="text-zinc-400 text-lg leading-8 max-w-xl">
          Full-Stack Development • AI/ML Engineering
          <br />
          Building scalable software systems,
          intelligent applications,
          and practical solutions to real-world problems.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition">
            View Projects
          </button>

          <button className="border border-zinc-700 px-6 py-3 hover:bg-white hover:text-black transition">
            GitHub
          </button>

        </div>

      </div>
    </section>
  )
}