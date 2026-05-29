export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="noir-heading text-6xl mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-zinc-800 p-10 hover:border-zinc-600 transition">

            <p className="text-zinc-600 text-sm tracking-[0.4em]">
              PROJECT 001
            </p>

            <h3 className="text-3xl mt-4">
              CampusKarma
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              Peer-help platform designed to connect students
              for academic collaboration and support.
            </p>

            <p className="text-zinc-500 mt-6">
              Django • PostgreSQL • Docker
            </p>

          </div>

          <div className="border border-zinc-800 p-10 hover:border-zinc-600 transition">

            <p className="text-zinc-600 text-sm tracking-[0.4em]">
              PROJECT 002
            </p>

            <h3 className="text-3xl mt-4">
              Emotion Classification using GAT
            </h3>

            <p className="text-zinc-400 mt-4 leading-7">
              Context-aware emotion detection using
              Graph Attention Networks.
            </p>

            <p className="text-zinc-500 mt-6">
              Python • PyTorch • NLP
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}