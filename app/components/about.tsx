export default function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <div className="about__container">
        <header className="about__head">
          <h2 id="about-title" className="about__title">Sobre a Conatus</h2>
          <p className="about__subtitle">
            Consultoria especializada em excelência operacional para Data Centers críticos, com foco em governança, padronização e confiabilidade ao longo de todo o ciclo de vida da infraestrutura.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__card">
            <p className="about__text">
              A Conatus Data Centers lidera a estruturação, padronização e governança operacional de ambientes críticos.
            </p>

            <p className="about__text" style={{ marginTop: '1rem' }}>
              Atuamos desde a implementação até a operação contínua, assegurando:
            </p>
            <ul className="about__list" style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Consistência operacional</li>
              <li>Alta confiabilidade dos sistemas</li>
              <li>Mitigação de riscos operacionais</li>
              <li>Evolução contínua dos ativos</li>
            </ul>

            <p className="about__text" style={{ marginTop: '1rem' }}>
              Nossa estrutura é baseada em três pilares:
            </p>
            <ul className="about__list" style={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
              <li>Procedures → Padronização e governança (SOP, MOP, EOP)</li>
              <li>Institute → Capacitação e certificação técnica</li>
              <li>Operations & Technology → Execução, inovação e performance operacional</li>
            </ul>

            <div className="about__metrics" style={{ marginTop: '1.5rem' }}>
              <div className="metric">
                <span className="metric__label">Foco</span>
                <span className="metric__value">Conformidade, segurança e governança operacional</span>
              </div>
              <div className="metric">
                <span className="metric__label">Atuação</span>
                <span className="metric__value">Ambientes críticos de missão crítica</span>
              </div>
              <div className="metric">
                <span className="metric__label">Experiência</span>
                <span className="metric__value">Data Centers Tier III e IV</span>
              </div>
            </div>
          </div>

          <div className="about__card about__card--list">
            <h3 className="about__listTitle">Diferenciais</h3>
            <ul className="about__list">
              <li>Governança operacional baseada em padrões globais</li>
              <li>Padronização completa de SOP, MOP e EOP</li>
              <li>Forte atuação em ambientes de missão crítica</li>
              <li>Integração entre estratégia, operação e tecnologia</li>
              <li>Experiência prática em Data Centers Tier III e IV</li>
              <li>Documentação técnica clara, auditável e padronizada</li>
              <li>Capacitação contínua de equipes operacionais</li>
              <li>Suporte especializado em todas as fases da operação</li>
            </ul>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Estruturamos operações críticas para máxima confiabilidade, segurança e performance.
        </p>
      </div>
    </section>
  )
}