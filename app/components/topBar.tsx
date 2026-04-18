"use client"

import Image from "next/image"
import Link from "next/link"
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
            src="/images/logo-data-centers.svg"
            alt="Conatus Logo"
            width={280}
            height={90}
            priority
            className="brand-logo"
          />
        </div>

        <nav className="nav">
          <Link href="/#inicio">Início</Link>
          <Link href="/#grupo">Grupo</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#institucional">Institucional</Link>

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
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  )
}