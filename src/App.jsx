import AboutMe from "./components/AboutMe"
import Certifications from "./components/Certifications"
import HeroSec from "./components/HeroSec"
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/Contact/Contact"
import Project from "./components/Project"
// import Slider from "./components/Slider";
function App() {

  return (
    <>
      <Navbar />
      <HeroSec />
      <AboutMe />
      <Certifications />
      {/* <Slider /> */}
      <Project />
      <Contact />
    </>
  )
}

export default App
