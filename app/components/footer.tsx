"use client"
import { useContext } from "react"
import Link from "next/link"
import { LanguageContext } from "../context/LanguageContext"

export default function Footer() {
  const { t } = useContext(LanguageContext)

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* COLUNA 1 */}
        <div className="footer__col">
          <h3 className="footer__brand">Conatus Data Centers</h3>
          <p>
            {t("hero.intro")}
          </p>
        </div>

        {/* COLUNA 2 */}
        <div className="footer__col">
          <h4>{t("nav.institutional")}</h4>
          <ul>
            <li><Link href="/#grupo">{t("nav.group")}</Link></li>
            <li><Link href="/#sobre">{t("nav.about")}</Link></li>
            <li><Link href="/#servicos">{t("nav.services")}</Link></li>
            <li><Link href="/#institucional">{t("nav.institutional")}</Link></li>
            <li><Link href="/contato">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        {/* COLUNA 3 */}
        <div className="footer__col">
          <h4>{t("footer.contact")}</h4>
          <ul>
            <li>giovanni.silva@conatusprocedures.com</li>
            <li>+55 11 91230-1413</li>
            <li>São Paulo, SP - Brasil</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Conatus Data Centers – {t("footer.rights")}
      </div>
    </footer>
  )
}