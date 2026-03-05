export default function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <div className="about__container">
        <header className="about__head">
          <p className="about__eyebrow">Quem somos</p>
          <h2 id="about-title" className="about__title">Sobre a Conatus</h2>
          <p className="about__subtitle">
            Consultoria especializada em sustentabilidade operacional de Data Centers, com foco em
            procedimentos e padronização para ambientes críticos.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__card">
            <p className="about__text">
              A Conatus Data Centers atua com a elaboração de procedimentos operacionais
              <strong> (MOPs, SOPs e EOPs)</strong>, alinhados às melhores práticas e aos padrões
              exigidos pelo <strong>Uptime Institute</strong>.
            </p>

            <div className="about__metrics">
              <div className="metric">
                <span className="metric__label">Foco</span>
                <span className="metric__value">Conformidade & Segurança</span>
              </div>
              <div className="metric">
                <span className="metric__label">Atuação</span>
                <span className="metric__value">Ambientes críticos</span>
              </div>
              <div className="metric">
                <span className="metric__label">Experiência</span>
                <span className="metric__value">Tier III & IV</span>
              </div>
            </div>
          </div>

          <div className="about__card about__card--list">
            <h3 className="about__listTitle">Diferenciais</h3>
            <ul className="about__list">
              <li>Foco em conformidade e segurança</li>
              <li>Personalização para cada cliente</li>
              <li>Experiência com ambientes críticos</li>
              <li>Procedimentos alinhados ao Uptime Institute</li>
              <li>Suporte técnico contínuo em implantações</li>
              <li>Equipe com experiência em data centers Tier III e IV</li>
              <li>Documentação clara, visual e auditável</li>
              <li>Capacitação de equipes operacionais</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}