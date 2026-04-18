import TopBar from "../components/topBar"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function ContatoPage() {
  return (
    <>
      <TopBar />
      <div style={{ paddingTop: "80px" }}>
          <Contact />
      </div>
      <Footer />
    </>
  )
}
