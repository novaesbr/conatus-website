"use client"

import { useState, useEffect, useRef, useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useContext(LanguageContext)

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      empresa: formData.get("empresa"),
      mensagem: formData.get("mensagem"),
      confirmEmail: formData.get("confirmEmail"), // Honeypot
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus("success")
        formRef.current?.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

return (
    <section className="contact" id="contato">
      {status === "success" && (
        <div className="toast-notification success-toast">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div>
            <strong>{t("contact.success_title")}</strong>
            <p>{t("contact.success_message")}</p>
          </div>
          <button className="toast-close" onClick={() => setStatus("idle")}>×</button>
        </div>
      )}
      {status === "error" && (
        <div className="toast-notification error-toast">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          <div>
            <strong>{t("contact.error_title")}</strong>
            <p>{t("contact.error_message")}</p>
          </div>
          <button className="toast-close" onClick={() => setStatus("idle")}>×</button>
        </div>
      )}
      <div className="contact__container">
        <div className="contact__head">
          <h2 className="contact__title">{t("contact.title_prefix")} <span>{t("contact.title_highlight")}</span></h2>
          <p className="contact__subtitle">
            {t("contact.subtitle")}
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
                <h3>{t("contact.email_title")}</h3>
                <a href="mailto:giovanni.silva@conatusprocedures.com">giovanni.silva@conatusprocedures.com</a>
              </div>
            </div>

            <div className="contact-card glass">
              <div className="contact-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="contact-card__text">
                <h3>{t("contact.phone_title")}</h3>
                <a href="tel:+5511912301413">+55 11 91230-1413</a>
              </div>
            </div>

            <div className="contact-card glass">
              <div className="contact-card__icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="contact-card__text">
                <h3>{t("contact.address_title")}</h3>
                <span>{t("contact.address_value")}</span>
              </div>
            </div>

            <div className="contact__note glass">
              <strong>{t("contact.hours_label")}:</strong> {t("contact.hours_value")}
            </div>
          </aside>

          {/* FORM */}
          <form ref={formRef} className="contact__form glass-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nome">{t("contact.name_label")}</label>
              <input id="nome" name="nome" placeholder={t("contact.name")} required />
            </div>

            <div className="field">
              <label htmlFor="email">{t("contact.email_label")}</label>
              <input id="email" name="email" type="email" placeholder={t("contact.email")} required />
            </div>

            <div className="field field--full">
              <label htmlFor="empresa">{t("contact.company_label")}</label>
              <input id="empresa" name="empresa" placeholder={t("contact.company")} />
            </div>

            <div className="field field--full">
              <label htmlFor="mensagem">{t("contact.message_label")}</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder={t("contact.message")}
                rows={5}
                required
              />
            </div>

            {/* Honeypot Field - Spammers will fill this, humans won't see it */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input 
                type="text" 
                name="confirmEmail" 
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

            <div className="contact__actions">
              <button className="btn-glow" type="submit" disabled={status === "loading"}>
                {status === "loading" ? t("contact.sending") : t("contact.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}