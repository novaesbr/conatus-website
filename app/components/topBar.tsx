"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function TopBar() {
  const [appsOpen, setAppsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const appsRef = useRef<HTMLDivElement | null>(null)

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
          <Link href="/#inicio" onClick={() => setMobileOpen(false)}>Início</Link>
          <Link href="/#grupo" onClick={() => setMobileOpen(false)}>Grupo</Link>
          <Link href="/#sobre" onClick={() => setMobileOpen(false)}>Sobre</Link>
          <Link href="/#servicos" onClick={() => setMobileOpen(false)}>Serviços</Link>
          <Link href="/#institucional" onClick={() => setMobileOpen(false)}>Institucional</Link>

          <div className="nav__dropdown" ref={appsRef}>
            <button
              type="button"
              className="nav__dropdownBtn"
              aria-haspopup="menu"
              aria-expanded={appsOpen}
              onClick={() => setAppsOpen((v) => !v)}
            >
              Aplicações <span className={`nav__chev ${appsOpen ? "is-open" : ""}`}>▾</span>
            </button>

            <div className={`nav__menu ${appsOpen ? "is-open" : ""}`} role="menu">
              <a role="menuitem" href="https://conatus.core.conatusprocedures.com/login" onClick={() => { setAppsOpen(false); setMobileOpen(false) }}>
                Área do Cliente
              </a>
            </div>
          </div>
          <Link href="/contato" onClick={() => setMobileOpen(false)}>Contato</Link>
        </nav>

        <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span className={`hamburger ${mobileOpen ? 'is-open' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}