"use client"

import Image from "next/image"
import { useState } from "react"

type CountryData = {
  id: string;
  name: string;
  top: string;
  left: string;
  description: string;
  services: string[];
}

const countries: CountryData[] = [
  {
    id: "mexico",
    name: "México",
    top: "20%",
    left: "26%",
    description: "Operações estratégicas e suporte técnico avançado para data centers no polo tecnológico do México.",
    services: ["MOP/SOP/EOP", "Auditoria Operacional", "Diagnóstico"]
  },
  {
    id: "brasil",
    name: "Brasil (São Paulo)",
    top: "64%",
    left: "69%",
    description: "Nossa sede e principal hub de atuação, com centenas de atendimentos e projetos de missão crítica.",
    services: ["Retrofit", "Consultoria Uptime", "Termografia", "Certificação"]
  },
  {
    id: "chile",
    name: "Chile",
    top: "65%",
    left: "51%",
    description: "Presença consolidada apoiando a expansão de infraestrutura crítica e hiperescala na região andina.",
    services: ["Comissionamento", "Validações Técnicas", "Capacitação"]
  }
];

export default function Coverage() {
  const [activeCountry, setActiveCountry] = useState<CountryData | null>(null);

  const defaultContent = (
    <div className="coverage__info coverage__info--enter">
      <p>
        Nossa equipe já atuou em projetos e rotinas de operação em ambientes
        críticos nos principais polos da região.
      </p>
      <div className="coverage__chips">
        {countries.map(c => (
          <button key={c.id} className="chip chip--clickable" onClick={() => setActiveCountry(c)}>{c.name}</button>
        ))}
      </div>
      <p className="coverage__note">
        Procedimentos (MOP/SOP/EOP, manutenção), validações técnicas, suporte em
        implantações e capacitação operacional.
      </p>
    </div>
  );

  return (
    <section className="coverage" id="atuacao">
      <div className="coverage__inner">
        <div className="coverage__text">
          <h2 className="coverage__heading">
            {activeCountry ? activeCountry.name : "Atuação na América Latina"}
          </h2>
          
          <div className="coverage__info-container">
            {activeCountry ? (
              <div key={activeCountry.id} className="coverage__info coverage__info--enter">
                <p className="coverage__desc">{activeCountry.description}</p>
                <h4 className="coverage__info-title">Principais Serviços:</h4>
                <div className="coverage__chips">
                  {activeCountry.services.map(s => (
                    <span key={s} className="chip chip--active">{s}</span>
                  ))}
                </div>
                <button 
                   className="coverage__back-btn"
                   onClick={() => setActiveCountry(null)}
                >
                  ← Voltar para visão geral
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
              alt="Mapa de atuação Conatus"
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
                aria-label={`Ver informações sobre ${country.name}`}
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