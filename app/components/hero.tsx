"use client"

import Image from "next/image"
import { useEffect, useMemo, useState, useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function Hero() {
  const { t } = useContext(LanguageContext)
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
        <h1>{t("hero.title")}</h1>

        <p className="intro">
          {t("hero.intro")}
        </p>

        <p>
          {t("hero.p1")}
        </p>

        <p>
          {t("hero.p2")}
        </p>

        <ul className="benefits">
          <li>Conatus Procedures</li>
          <li>Conatus Institute</li>
          <li>Conatus Operations & Technology</li>
        </ul>

        <a href="/contato" className="btn-primary">
          {t("hero.btn")}
        </a>
      </div>
    </section>
  )
}