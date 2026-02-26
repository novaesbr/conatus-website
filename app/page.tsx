import TopBar from "./components/topBar"
import Hero from "./components/hero"
import Coverage from "./components/coverage"
import About from "./components/about"
import Services from "./components/services"


export default function Page() {
  return (
    <>
      <TopBar />
      <Hero />
      <About />
      <Services />
      <Coverage />
    </>
  )
}