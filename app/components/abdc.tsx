"use client"

import Image from "next/image"

export default function ABDC() {
  return (
    <section className="abdc" id="abdc">
      <div className="abdc__container">
        <header className="abdc__head">
          <h2>Associação com ABDC (Associação Brasileira de Data Center)</h2>
          <p className="abdc__subtitle">
            São Paulo, SP <span className="abdc__dot">•</span> 2025
          </p>
        </header>

        <div className="abdc__grid">
          <div className="abdc__text">
            <p>
              A Conatus Data Centers tem o prazer de comunicar que faz parte da
              Associação Brasileira de Data Center.
            </p>

            <p>
              A ABDC é uma associação de empresas e profissionais do setor de
              Data Center que se uniram para garantir que a próxima etapa de
              crescimento deste mercado no Brasil se dê de maneira estruturada,
              com profissionais qualificados, com normas técnicas locais e apoio
              do poder público.
            </p>

            <p>
              Com o ingresso da Conatus, temos a oportunidade de compartilhar
              nossa vasta experiência em projetos de Data Center e infraestruturas
              de missão crítica, contribuindo com a representatividade do setor,
              bem como para o acesso a informações e boas práticas.
            </p>

            <a
              className="abdc__link"
              href="https://datacenter.org.br/"
              target="_blank"
              rel="noreferrer"
            >
              Conheça o site <span aria-hidden>→</span>
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