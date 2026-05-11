"use client"

import Image from "next/image"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function ABDC() {
  const { t } = useContext(LanguageContext)

  return (
    <section className="abdc" id="abdc">
      <div className="abdc__container">
        <header className="abdc__head">
          <h2>{t("abdc.title")}</h2>
          <p className="abdc__subtitle">
            {t("abdc.subtitle")} <span className="abdc__dot">•</span> 2025
          </p>
        </header>

        <div className="abdc__grid">
          <div className="abdc__text">
            <p>
              {t("abdc.text1")}
            </p>

            <p>
              {t("abdc.text2")}
            </p>

            <p>
              {t("abdc.text3")}
            </p>

            <a
              className="abdc__link"
              href="https://datacenter.org.br/"
              target="_blank"
              rel="noreferrer"
            >
              {t("partners.visit")} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="abdc__logoWrap">
            <div className="abdc__logoCard">
              <Image
                src="/images/logo-abdc.png"
                alt="ABDC — Associação Brasileira de Data Center"
                width={520}
                height={260}
                className="abdc__logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}