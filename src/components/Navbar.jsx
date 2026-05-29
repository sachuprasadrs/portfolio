export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-lg tracking-[0.4em] font-light">
          SACHUPRASAD R S
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-[0.2em] text-zinc-400">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}