"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

export default function Hero() {
  const slides = useMemo(
    () => [
      "/images/slide1.jpeg",
      "/images/slide2.jpeg",
      "/images/slide3.jpeg",
      "/images/slide4.jpeg",
      "/images/slide5.jpeg",
      "/images/slide6.jpeg",
      "/images/slide7.jpeg",
      "/images/slide8.jpeg",
      "/images/slide9.jpeg",
    ],
    []
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            sizes="(max-width: 1000px) 100vw, 50vw"
            className={`slide ${i === index ? "active" : ""}`}
            priority={i === 0}
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
          Atuamos com a elaboração de procedimentos operacionais (
          <strong>MOPs, SOPs e EOPs</strong>), alinhados às melhores práticas
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
  )
}