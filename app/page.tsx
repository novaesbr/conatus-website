import TopBar from "./components/topBar"
import Hero from "./components/hero"
import Coverage from "./components/coverage"
import About from "./components/about"
import Services from "./components/services"
import ABDC from "./components/abdc"
import Institucional from "./components/institucional"
import Contact from "./components/contact"
import Footer from "./components/footer"


export default function Page() {
  return (
    <>
      <TopBar />
      <Hero />
      <About />
      <Services />
      <Institucional />
      <ABDC />
      <Coverage />
      <Contact />
      <Footer />
    </>
  )
}