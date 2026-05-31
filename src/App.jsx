import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Texture from "./components/Texture"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="bg-black text-white relative">

      <Texture />

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />
        
        <Contact />

        <Footer />

      </div>

    </div>
  )
}