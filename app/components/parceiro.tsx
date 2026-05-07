"use client"

import Image from "next/image"

export default function Parceiro() {
  return (
    <section className="parceiro" id="parceiros">
      <div className="parceiro__container">
        <header className="parceiro__head">
          <h2>Parceiros</h2>
          <p className="parceiro__subtitle">
            Colaborações que impulsionam resultados
          </p>
        </header>

        <div className="parceiro__grid">
          <div className="parceiro__text">
            <p>
              A Conatus Data Centers estabeleceu parcerias estratégicas com
              líderes do setor para oferecer as melhores soluções em
              infraestrutura de Data Centers.
            </p>

            <p>
              Nossas parcerias com empresas como a DCA garantem acesso às mais modernas
              tecnologias e práticas do mercado, permitindo entregar
              resultados excepcionais aos nossos clientes.
            </p>

            <a
              className="parceiro__link"
              href="https://dca.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Visite o site <span aria-hidden>→</span>
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