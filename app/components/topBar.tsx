import Image from "next/image"

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="container">
        <div className="brand">
          <Image
            src="/images/logo-v2.png"
            alt="Conatus Logo"
            width={280}
            height={90}
            priority
            className="brand-logo"
          />
        </div>

        <nav className="nav">
          <a href="#">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#">Institucional</a>
          <a href="#">Aplicações</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  )
}