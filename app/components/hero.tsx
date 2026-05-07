"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

export default function Hero() {
  const slides = useMemo(
    () => [
      "/images/slide1.jpeg",
      "/images/slide2.jpeg",
      "/images/slide3.jpeg",
      "/images/slide4.jpeg"
    ],
    []
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="hero" id="inicio">
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
        <h1>Excelência operacional e confiabilidade para Data Centers</h1>

        <p className="intro">
          A <strong>Conatus Data Centers</strong> é responsável por liderar a estratégia, governança e integração de serviços especializados para infraestruturas críticas de Data Centers.
        </p>

        <p>
          Atuamos garantindo consistência operacional, alta confiabilidade e evolução sustentável ao longo de todo o ciclo de vida dos ativos e sistemas, desde a implementação até a operação contínua.
        </p>

        <p>
          Somos o elo central que conecta pessoas, processos e tecnologia, assegurando excelência operacional e aderência às melhores práticas globais.
        </p>

        <ul className="benefits">
          <li>Conatus Procedures</li>
          <li>Conatus Institute</li>
          <li>Conatus Operations & Technology</li>
        </ul>

        <a href="/contato" className="btn-primary">
          Entrar em Contato
        </a>
      </div>
    </section>
  )
}