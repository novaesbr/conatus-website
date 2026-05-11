"use client"

import Image from "next/image"
import { useState, useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

type CountryData = {
  id: string;
  name: string;
  top: string;
  left: string;
  description: string;
  services: string[];
}

export default function Coverage() {
  const { language, t } = useContext(LanguageContext)
  const [activeCountry, setActiveCountry] = useState<CountryData | null>(null);

  const countries: CountryData[] = [
    {
      id: "mexico",
      name: language === "pt" ? "México" : (language === "en" ? "Mexico" : "México"),
      top: "20%",
      left: "26%",
      description: language === "pt" 
        ? "Operações estratégicas e suporte técnico avançado para data centers no polo tecnológico do México."
        : (language === "en" 
            ? "Strategic operations and advanced technical support for data centers in Mexico's technology hub."
            : "Operaciones estratégicas y soporte técnico avanzado para centros de datos en el polo tecnológico de México."),
      services: language === "pt" 
        ? ["MOP/SOP/EOP", "Auditoria Operacional", "Diagnóstico"]
        : (language === "en" 
            ? ["MOP/SOP/EOP", "Operational Audit", "Diagnosis"]
            : ["MOP/SOP/EOP", "Auditoría Operativa", "Diagnóstico"])
    },
    {
      id: "brasil",
      name: language === "pt" ? "Brasil (São Paulo)" : (language === "en" ? "Brazil (São Paulo)" : "Brasil (São Paulo)"),
      top: "64%",
      left: "69%",
      description: language === "pt"
        ? "Nossa sede e principal hub de atuação, com centenas de atendimentos e projetos de missão crítica."
        : (language === "en"
            ? "Our headquarters and main hub of operations, with hundreds of services and mission-critical projects."
            : "Nuestra sede y principal centro de operaciones, con cientos de servicios y proyectos de misión crítica."),
      services: language === "pt"
        ? ["Retrofit", "Consultoria Uptime", "Termografia", "Certificação"]
        : (language === "en"
            ? ["Retrofit", "Uptime Consultancy", "Thermography", "Certification"]
            : ["Retrofit", "Consultoría Uptime", "Termografía", "Certificación"])
    },
    {
      id: "chile",
      name: "Chile",
      top: "65%",
      left: "51%",
      description: language === "pt"
        ? "Presença consolidada apoiando a expansão de infraestrutura crítica e hiperescala na região andina."
        : (language === "en"
            ? "Consolidated presence supporting the expansion of critical infrastructure and hyperscale in the Andean region."
            : "Presencia consolidada apoyando la expansión de infraestructura crítica e hiperescala en la región andina."),
      services: language === "pt"
        ? ["Comissionamento", "Validações Técnicas", "Capacitação"]
        : (language === "en"
            ? ["Commissioning", "Technical Validations", "Training"]
            : ["Comisionamiento", "Validaciones Técnicas", "Capacitación"])
    }
  ];

  const defaultContent = (
    <div className="coverage__info coverage__info--enter">
      <p>
        {t("coverage.intro")}
      </p>
      <div className="coverage__chips">
        {countries.map(c => (
          <button key={c.id} className="chip chip--clickable" onClick={() => setActiveCountry(c)}>{c.name}</button>
        ))}
      </div>
      <p className="coverage__note">
        {t("coverage.note")}
      </p>
    </div>
  );

  return (
    <section className="coverage" id="atuacao">
      <div className="coverage__inner">
        <div className="coverage__text">
          <h2 className="coverage__heading">
            {activeCountry ? activeCountry.name : t("coverage.title")}
          </h2>
          
          <div className="coverage__info-container">
            {activeCountry ? (
              <div key={activeCountry.id} className="coverage__info coverage__info--enter">
                <p className="coverage__desc">{activeCountry.description}</p>
                <h4 className="coverage__info-title">{t("coverage.services_label")}</h4>
                <div className="coverage__chips">
                  {activeCountry.services.map(s => (
                    <span key={s} className="chip chip--active">{s}</span>
                  ))}
                </div>
                <button 
                   className="coverage__back-btn"
                   onClick={() => setActiveCountry(null)}
                >
                  {t("coverage.back")}
                </button>
              </div>
            ) : (
              defaultContent
            )}
          </div>
        </div>

        <div className="coverage__map">
          <div className="coverage__map-container">
            <Image
              src="/images/latam-map-dark.png"
              alt={t("coverage.title")}
              width={900}
              height={520}
              className="coverage__map-img"
            />
            {countries.map((country) => (
              <button
                key={country.id}
                className={`coverage__pin ${activeCountry?.id === country.id ? 'coverage__pin--active' : ''}`}
                style={{ top: country.top, left: country.left }}
                onClick={() => setActiveCountry(country)}
                title={country.name}
                aria-label={`${t("language.en") === "English" ? "View info about" : (t("language.es") === "Español" ? "Ver información sobre" : "Ver informações sobre")} ${country.name}`}
              >
                <span className="coverage__pin-ring"></span>
                <span className="coverage__pin-dot"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}