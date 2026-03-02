"use client"

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
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#institucional">Institucional</a></li>
            <li><a href="#contato">Contato</a></li>
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