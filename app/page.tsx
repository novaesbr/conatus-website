import TopBar from "./components/topBar"
import Hero from "./components/hero"
import Grupo from "./components/grupo";
import Coverage from "./components/coverage"
import About from "./components/about"
import Services from "./components/services"
import Parceiro from "./components/parceiro"
import ABDC from "./components/abdc"
import Institucional from "./components/institucional"
import Footer from "./components/footer"


export default function Page() {
  return (
    <>
      <TopBar />
      <Hero />
      <Grupo />
      <About />
      <Services />
      <Institucional />
      <Coverage />
      <Parceiro />
      <ABDC />
      <Footer />
    </>
  )
}