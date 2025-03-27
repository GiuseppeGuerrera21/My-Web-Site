import AboutMe from "./components/AboutMe/AboutMe"
import Certifications from "./components/Certification/Certifications"
import HeroSec from "./components/HeroSec"
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/Contact/Contact"
import Project from "./components/Projec/Project"
import Footer from "./components/Footer"
function App() {

  return (
    <>
      <Navbar />
      <HeroSec />
      <AboutMe />
      <Certifications />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
