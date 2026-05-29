export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-light mb-16">
          Projects
        </h2>

        <div className="space-y-8">

          <div className="border border-zinc-800 p-10">
            <h3 className="text-3xl">
              CampusKarma
            </h3>

            <p className="text-zinc-400 mt-4">
              Peer-help platform designed to connect
              students for academic collaboration and support.
            </p>

            <p className="text-zinc-500 mt-4">
              Django • PostgreSQL • Docker
            </p>
          </div>

          <div className="border border-zinc-800 p-10">
            <h3 className="text-3xl">
              Emotion Classification using GAT
            </h3>

            <p className="text-zinc-400 mt-4">
              Context-aware emotion detection using
              Graph Attention Networks.
            </p>

            <p className="text-zinc-500 mt-4">
              Python • PyTorch • NLP
            </p>
          </div>

          <div className="border border-zinc-800 p-10">
            <h3 className="text-3xl">
              Backend Systems Project
            </h3>

            <p className="text-zinc-400 mt-4">
              Coming soon.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}