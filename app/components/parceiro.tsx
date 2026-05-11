"use client"

import Image from "next/image"
import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function Parceiro() {
  const { t } = useContext(LanguageContext)

  return (
    <section className="parceiro" id="parceiros">
      <div className="parceiro__container">
        <header className="parceiro__head">
          <h2>{t("partners.title")}</h2>
          <p className="parceiro__subtitle">
            {t("partners.subtitle")}
          </p>
        </header>

        <div className="parceiro__grid">
          <div className="parceiro__text">
            <p>
              {t("partners.text1")}
            </p>

            <p>
              {t("partners.text2")}
            </p>

            <a
              className="parceiro__link"
              href="https://dca.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              {t("partners.visit")} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="parceiro__logoWrap">
            <div className="parceiro__logoCard">
              <Image
                src="/images/logo_dca.png"
                alt="DCA - Data Center Analysis"
                width={520}
                height={260}
                className="parceiro__logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}