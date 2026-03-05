"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function TopBar() {
  const [appsOpen, setAppsOpen] = useState(false)
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
            src="/images/logo-v2.png"
            alt="Conatus Logo"
            width={280}
            height={90}
            priority
            className="brand-logo"
          />
        </div>

        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#institucional">Institucional</a>

          {/* DROPDOWN APLICAÇÕES */}
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
              <a role="menuitem" href="https://conatus.core.conatusprocedures.com/login" onClick={() => setAppsOpen(false)}>
                Área do Cliente
              </a>
            </div>
          </div>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}