import TopBar from "./components/topBar"
import Hero from "./components/hero"
import Coverage from "./components/coverage"
import About from "./components/about"
import Services from "./components/services"
import Institucional from "./components/institucional"


export default function Page() {
  return (
    <>
      <TopBar />
      <Hero />
      <About />
      <Services />
      <Institucional />
      <Coverage />
    </>
  )
}