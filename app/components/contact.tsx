"use client"

import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      mensagem: formData.get("mensagem"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="contact" id="contato">
      <div className="contact__container">
        <div className="contact__head">
          <h2 className="contact__title">Entre em <span>Contato</span></h2>
          <p className="contact__subtitle">
            Fale com a equipe Conatus para receber uma proposta especializada ou diagnóstico na América Latina.
          </p>
        </div>

        <div className="contact__grid">
          {/* INFO PANELS */}
          <aside className="contact__info">
            <div className="contact-card glass">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="contact-card__text">
                <h3>E-mail Direto</h3>
                <a href="mailto:giovanni.silva@conatusprocedures.com">giovanni.silva@conatusprocedures.com</a>
              </div>
            </div>

            <div className="contact-card glass">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-card__text">
                <h3>Telefone</h3>
                <a href="tel:+5511912301413">+55 11 91230-1413</a>
              </div>
            </div>

            <div className="contact-card glass">
              <div className="contact-card__icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-card__text">
                <h3>Sede Principal</h3>
                <span>São Paulo, SP – Brasil</span>
              </div>
            </div>

            <div className="contact__note glass">
              <strong>Atendimento:</strong> Segunda a Sexta, 08h–18h (BRT).
            </div>
          </aside>

          {/* FORM */}
          <form className="contact__form glass-form" onSubmit={handleSubmit}>
            {status === "success" && (
              <div className="form-message success">
                Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            )}
            {status === "error" && (
              <div className="form-message error">
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
            <div className="field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" placeholder="Seu Nome" />
            </div>

            <div className="field">
              <label htmlFor="email">E-mail corporativo</label>
              <input id="email" name="email" placeholder="nome@empresa.com" />
            </div>

            <div className="field field--full">
              <label htmlFor="empresa">Nome da Empresa</label>
              <input id="empresa" name="empresa" placeholder="Empresa S.A." />
            </div>

            <div className="field field--full">
              <label htmlFor="mensagem">Mensagem, escopo ou demanda</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Detalhe brevemente as necessidades do seu ambiente crítico..."
                rows={5}
              />
            </div>

            <div className="contact__actions">
              <button className="btn-glow" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}