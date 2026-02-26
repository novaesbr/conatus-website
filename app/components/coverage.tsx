import Image from "next/image"

export default function Coverage() {
  return (
    <section className="coverage" id="atuacao">
      <div className="coverage__inner">
        <div className="coverage__text">
          <h2>Atuação na América Latina</h2>

          <p>
            Nossa equipe já atuou em projetos e rotinas de operação em
            ambientes críticos nos principais polos da região.
          </p>

          <div className="coverage__chips">
            <span className="chip">México</span>
            <span className="chip">Chile</span>
            <span className="chip">Brasil — São Paulo (SP)</span>
          </div>

          <p className="coverage__note">
            Procedimentos (MOP/SOP/EOP, manutenção), validações técnicas, suporte em
            implantações e capacitação operacional.
          </p>
        </div>

        <div className="coverage__map">
          <Image
            src="/images/latam-map-final.png"
            alt="Mapa de atuação Conatus"
            width={900}
            height={520}
            className="coverage__map-img"
          />
        </div>
      </div>
    </section>
  )
}