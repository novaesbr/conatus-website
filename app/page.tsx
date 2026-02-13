"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const slides = [
    "/images/slide1.jpeg",
    "/images/slide2.jpeg",
    "/images/slide3.jpeg",
    "/images/slide4.jpeg",
    "/images/slide5.jpeg",
    "/images/slide6.jpeg",
    "/images/slide7.jpeg",
    "/images/slide8.jpeg",
    "/images/slide9.jpeg",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container">
          <div className="brand">
            <img src="/images/logo.png" alt="Conatus Logo" />
          </div>

          <nav className="nav">
            <a href="#">Início</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Institucional</a>
            <a href="#">Aplicações</a>
            <a href="#">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-slider">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`slide ${i === index ? "active" : ""}`}
            />
          ))}
        </div>

        <div className="hero-text">
          <h1>Excelência Operacional para Data Centers</h1>

          <p className="intro">
            A <strong>Conatus Data Centers</strong> é uma consultoria
            especializada em sustentabilidade operacional de data centers.
          </p>

          <p>
            Atuamos com a elaboração de procedimentos operacionais
            (<strong>MOPs, SOPs e EOPs</strong>), alinhados às melhores práticas
            e padrões exigidos pelo <strong>Uptime Institute</strong>.
          </p>

          <ul className="benefits">
            <li>Foco em conformidade e segurança</li>
            <li>Personalização para cada cliente</li>
            <li>Experiência com ambientes críticos</li>
            <li>Procedimentos alinhados ao Uptime Institute</li>
            <li>Suporte técnico contínuo em implantações</li>
            <li>Equipe com experiência em data centers Tier III e IV</li>
            <li>Documentação clara, visual e auditável</li>
            <li>Capacitação de equipes operacionais</li>
          </ul>

          <a href="#" className="btn-primary">
            Solicitar Proposta
          </a>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="coverage" id="atuacao">
        <div className="coverage__inner">
          <div className="coverage__text">
            <h2>Atuação na América Latina</h2>

            <p>
              Nossa equipe já atuou em projetos e rotinas de operação em
              ambientes críticos nos principais polos da região.
            </p>

            <div className="coverage__chips">
              <span className="chip">México</span>
              <span className="chip">Chile</span>
              <span className="chip">Brasil — São Paulo (SP)</span>
            </div>

            <p className="coverage__note">
              Procedimentos (MOP/SOP/EOP), validações técnicas, suporte em
              implantações e capacitação operacional.
            </p>
          </div>

          <div className="coverage__map">
            <img
              src="/images/latam-map-final.png"
              alt="Mapa de atuação Conatus"
              className="coverage__map-img"
            />
          </div>
        </div>
      </section>
    </>
  )
}