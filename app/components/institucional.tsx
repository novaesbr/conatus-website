import { Target, Eye, Gem, ShieldCheck, Activity, Zap, FileCheck, Globe, Layers, Server, Cpu, Users } from 'lucide-react';

export default function Institutional() {
    return (
      <section className="institutional" id="institucional">
        <div className="institutional__container">
          <header className="institutional__head">
            <h2>Institucional</h2>
            <p>
              Direcionadores que sustentam a atuação da Conatus em ambientes de missão crítica.
            </p>
          </header>
   
          <div className="institutional__grid">
            <article className="institutional__card">
              <div className="institutional__card-header">
                <Target className="institutional__icon" />
                <h3>Missão</h3>
              </div>
              <p>
                Prover excelência na estruturação, padronização e governança de operações em Data Centers, garantindo <span className="institutional__highlight">segurança</span>, <span className="institutional__highlight">confiabilidade</span>, <span className="institutional__highlight">eficiência</span> e <span className="institutional__highlight">conformidade</span> ao longo de todo o ciclo de vida da infraestrutura, alinhado às melhores práticas globais, incluindo os padrões do Uptime Institute.
              </p>
              <div className="institutional__badges">
                <div className="institutional__badge" title="Segurança">
                  <ShieldCheck size={18} />
                  <span>Segurança</span>
                </div>
                <div className="institutional__badge" title="Confiabilidade">
                  <Activity size={18} />
                  <span>Confiabilidade</span>
                </div>
                <div className="institutional__badge" title="Eficiência">
                  <Zap size={18} />
                  <span>Eficiência</span>
                </div>
                <div className="institutional__badge" title="Conformidade">
                  <FileCheck size={18} />
                  <span>Conformidade</span>
                </div>
              </div>
            </article>
  
            <article className="institutional__card">
              <div className="institutional__card-header">
                <Eye className="institutional__icon" />
                <h3>Visão</h3>
              </div>
<p>
                Ser <span className="institutional__highlight">referência</span> nacional e internacional em excelência operacional para Data Centers, liderando a evolução de operações críticas por meio de processos estruturados, tecnologia e capacitação, contribuindo para <span className="institutional__highlight">infraestruturas resilientes</span>, sustentáveis e de alta performance no <span className="institutional__highlight">mundo digital</span>.
              </p>
              <div className="institutional__badges">
                <div className="institutional__badge" title="Referência">
                  <Globe size={18} />
                  <span>Referência</span>
                </div>
                <div className="institutional__badge" title="Resiliência">
                  <ShieldCheck size={18} />
                  <span>Resiliência</span>
                </div>
                <div className="institutional__badge" title="Infraestruturas Críticas">
                  <Server size={18} />
                  <span>Infraestruturas</span>
                </div>
                <div className="institutional__badge" title="Mundo Digital">
                  <Cpu size={18} />
                  <span>Mundo Digital</span>
                </div>
              </div>
            </article>
  
            <article className="institutional__card">
              <div className="institutional__card-header">
                <Gem className="institutional__icon" />
                <h3>Valores</h3>
              </div>
              <ul className="institutional__list">
                <li>Confiabilidade</li>
                <li>Excelência Técnica</li>
                <li>Inovação Responsável</li>
                <li>Compromisso com o Cliente</li>
                <li>Ética e Transparência</li>
              </ul>
            </article>
          </div>
          <p className="institutional__footer-text">
            <Users className="institutional__footer-icon" />
            Pessoas, processos e tecnologia integrados<br />
            <span className="institutional__highlight">para garantir excelência operacional e sustentabilidade em Data Centers.</span>
          </p>
        </div>
      </section>
    )
  }