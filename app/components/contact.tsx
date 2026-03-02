"use client"

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__container">
        <div className="contact__head">
          <h2 className="contact__title">Contato</h2>
          <p className="contact__subtitle">
            Fale com a Conatus e receba uma proposta personalizada.
          </p>
        </div>

        <div className="contact__grid">
          {/* FORM */}
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" placeholder="Seu nome" />
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" placeholder="seuemail@empresa.com" />
            </div>

            <div className="field">
              <label htmlFor="empresa">Empresa</label>
              <input id="empresa" name="empresa" placeholder="Nome da empresa" />
            </div>

            <div className="field field--full">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Descreva sua necessidade (escopo, prazo, site, etc.)"
                rows={5}
              />
            </div>

            <div className="contact__actions">
              <button className="btn-primary btn-primary--full" type="submit">
                Enviar
              </button>
              <p className="contact__hint">
                Ou envie direto para{" "}
                <a href="mailto:contato@conatusprocedures.com">contato@conatusprocedures.com</a>
              </p>
            </div>
          </form>

          {/* INFO */}
          <aside className="contact__info">
            <div className="contact-card">
              <h3>Fale com a gente</h3>

              <a className="contact-link" href="mailto:contato@conatusprocedures.com">
                <span className="contact-link__label">E-mail</span>
                <span className="contact-link__value">contato@conatusprocedures.com</span>
              </a>

              <a className="contact-link" href="tel:+5511971216364">
                <span className="contact-link__label">Telefone</span>
                <span className="contact-link__value">+55 (11) 9 7121-6364</span>
              </a>
            </div>

            <div className="contact-card">
              <h3>Redes</h3>

              <a className="contact-link" href="https://www.linkedin.com/company/conatusprocedures/" target="_blank" rel="noreferrer">
                <span className="contact-link__label">LinkedIn</span>
                <span className="contact-link__value">Acessar perfil</span>
              </a>

              <a className="contact-link" href="https://www.instagram.com/conatusprocedures/" target="_blank" rel="noreferrer">
                <span className="contact-link__label">Instagram</span>
                <span className="contact-link__value">Acessar perfil</span>
              </a>
            </div>

            <div className="contact__note">
              <strong>Atendimento:</strong> Segunda a Sexta, 08h–18h (BRT).
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}