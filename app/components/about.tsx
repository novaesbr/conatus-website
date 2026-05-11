"use client"

import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function About() {
  const { t } = useContext(LanguageContext)

  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <div className="about__container">
        <header className="about__head">
          <h2 id="about-title" className="about__title">{t("about.title")}</h2>
          <p className="about__subtitle">
            {t("about.subtitle")}
          </p>
        </header>

        <div className="about__grid">
          <div className="about__card">
            <p className="about__text">
              {t("about.grid.p1")}
            </p>

            <p className="about__text" style={{ marginTop: '1rem' }}>
              {t("about.grid.p2")}
            </p>
            <ul className="about__list" style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>{t("about.list.item1")}</li>
              <li>{t("about.list.item2")}</li>
              <li>{t("about.list.item3")}</li>
              <li>{t("about.list.item4")}</li>
            </ul>

            <p className="about__text" style={{ marginTop: '1rem' }}>
              {t("about.pillars.title")}
            </p>
            <ul className="about__list" style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>{t("about.pillars.item1")}</li>
              <li>{t("about.pillars.item2")}</li>
              <li>{t("about.pillars.item3")}</li>
            </ul>

            <div className="about__metrics" style={{ marginTop: '1.5rem' }}>
              <div className="metric">
                <span className="metric__label">{t("about.metrics.label1")}</span>
                <span className="metric__value">{t("about.metrics.value1")}</span>
              </div>
              <div className="metric">
                <span className="metric__label">{t("about.metrics.label2")}</span>
                <span className="metric__value">{t("about.metrics.value2")}</span>
              </div>
              <div className="metric">
                <span className="metric__label">{t("about.metrics.label3")}</span>
                <span className="metric__value">{t("about.metrics.value3")}</span>
              </div>
            </div>
          </div>

          <div className="about__card about__card--list">
            <h3 className="about__listTitle">{t("about.diff.title")}</h3>
            <ul className="about__list">
              <li>{t("about.list.item1")}</li>
              <li>{t("about.list.item2")}</li>
              <li>{t("about.list.item3")}</li>
              <li>Governança operacional baseada em padrões globais</li>
              <li>Padronização completa de SOP, MOP e EOP</li>
              <li>Forte atuação em ambientes de missão crítica</li>
              <li>Integração entre estratégia, operação e tecnologia</li>
              <li>Experiência prática em Data Centers Tier III e IV</li>
            </ul>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {t("about.footer")}
        </p>
      </div>
    </section>
  )
}