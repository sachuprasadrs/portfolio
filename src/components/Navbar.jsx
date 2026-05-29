export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-900">

      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-sm md:text-base tracking-[0.35em] text-zinc-200">
            SACHUPRASAD R S
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-zinc-500 text-sm uppercase tracking-wider">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}