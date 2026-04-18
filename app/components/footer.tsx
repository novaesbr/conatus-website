"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* COLUNA 1 */}
        <div className="footer__col">
          <h3 className="footer__brand">Conatus Data Centers</h3>
          <p>
            Excelência na elaboração de procedimentos operacionais
            para data centers e infraestruturas de missão crítica.
          </p>
        </div>

        {/* COLUNA 2 */}
        <div className="footer__col">
          <h4>Navegação</h4>
          <ul>
            <li><Link href="/#grupo">Grupo</Link></li>
            <li><Link href="/#sobre">Sobre</Link></li>
            <li><Link href="/#servicos">Serviços</Link></li>
            <li><Link href="/#institucional">Institucional</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* COLUNA 3 */}
        <div className="footer__col">
          <h4>Contato</h4>
          <ul>
            <li>contato@conatusprocedures.com</li>
            <li>+55 (11) 9 7121-6364</li>
            <li>São Paulo – Brasil</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Conatus Data Centers – Todos os direitos reservados.
      </div>
    </footer>
  )
}