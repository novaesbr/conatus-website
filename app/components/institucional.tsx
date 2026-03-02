export default function Institutional() {
    return (
      <section className="institutional" id="institucional">
        <div className="institutional__container">
          <header className="institutional__head">
            <h2>Institucional</h2>
            <p>
              Direcionadores que sustentam a atuação da Conatus em ambientes de missão crítica.
            </p>
          </header>
  
          <div className="institutional__grid">
            <article className="institutional__card">
              <h3>Missão</h3>
              <p>
                Prover excelência na elaboração de procedimentos operacionais para data centers,
                garantindo a sustentabilidade operacional, a segurança e a conformidade com os mais
                altos padrões da indústria, como os definidos pelo Uptime Institute.
              </p>
            </article>
  
            <article className="institutional__card">
              <h3>Visão</h3>
              <p>
                Ser referência nacional e internacional em consultoria de procedimentos operacionais
                para data centers, contribuindo para operações resilientes, eficientes e seguras nas
                infraestruturas críticas do mundo digital.
              </p>
            </article>
  
            <article className="institutional__card">
              <h3>Valores</h3>
              <ul className="institutional__list">
                <li>Confiabilidade</li>
                <li>Excelência Técnica</li>
                <li>Inovação Responsável</li>
                <li>Compromisso com o Cliente</li>
                <li>Ética e Transparência</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    )
  }