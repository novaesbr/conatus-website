"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState, useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

export default function TopBar() {
  const [appsOpen, setAppsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const appsRef = useRef<HTMLDivElement | null>(null)
  const { language, setLanguage, t } = useContext(LanguageContext)

  // fecha ao clicar fora
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!appsRef.current) return
      if (!appsRef.current.contains(e.target as Node)) setAppsOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  // fecha com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAppsOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header className="topbar">
      <div className="container">
        <div className="brand">
          <Image
            src="/images/logo-data-centers.svg"
            alt="Conatus Logo"
            width={280}
            height={90}
            priority
            className="brand-logo"
          />
        </div>

        <nav className={`nav ${mobileOpen ? 'nav--open' : ''}`}>
          <Link href="/#inicio" onClick={() => setMobileOpen(false)}>{t("nav.home")}</Link>
          <Link href="/#grupo" onClick={() => setMobileOpen(false)}>{t("nav.group")}</Link>
          <Link href="/#sobre" onClick={() => setMobileOpen(false)}>{t("nav.about")}</Link>
          <Link href="/#servicos" onClick={() => setMobileOpen(false)}>{t("nav.services")}</Link>
          <Link href="/#institucional" onClick={() => setMobileOpen(false)}>{t("nav.institutional")}</Link>

          <div className="nav__dropdown" ref={appsRef}>
            <button
              type="button"
              className="nav__dropdownBtn"
              aria-haspopup="menu"
              aria-expanded={appsOpen}
              onClick={() => setAppsOpen((v) => !v)}
            >
              {t("nav.apps")} <span className={`nav__chev ${appsOpen ? "is-open" : ""}`}>▾</span>
            </button>

            <div className={`nav__menu ${appsOpen ? "is-open" : ""}`} role="menu">
              <a role="menuitem" href="https://conatus.core.conatusprocedures.com/login" onClick={() => { setAppsOpen(false); setMobileOpen(false) }}>
                {t("nav.clientArea")}
              </a>
            </div>
          </div>
          <Link href="/contato" onClick={() => setMobileOpen(false)}>{t("nav.contact")}</Link>

          <div className="lang-switcher">
            <button 
              className={`lang-btn ${language === 'pt' ? 'active' : ''}`} 
              onClick={() => setLanguage('pt')}
              title="Português"
            >
              PT
            </button>
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
              onClick={() => setLanguage('en')}
              title="English"
            >
              EN
            </button>
            <button 
              className={`lang-btn ${language === 'es' ? 'active' : ''}`} 
              onClick={() => setLanguage('es')}
              title="Español"
            >
              ES
            </button>
          </div>
        </nav>


        <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span className={`hamburger ${mobileOpen ? 'is-open' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}