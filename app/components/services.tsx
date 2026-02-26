"use client"

import { useMemo, useRef } from "react"

type Accent = "blue" | "green" | "yellow" | "red"
type GroupKey = "procedimentos" | "projetos" | "diagnostico"

type Service = {
  title: string
  description: string
  accent: Accent
  group: GroupKey
}

function GroupCarousel({ title, items }: { title: string; items: Service[] }) {
  const rowRef = useRef<HTMLDivElement | null>(null)

  const scrollRow = (direction: 1 | -1) => {
    const el = rowRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>(".service-card")
    const step = card ? card.offsetWidth + 16 : 320
    el.scrollBy({ left: step * direction, behavior: "smooth" })
  }

  return (
    <div className="services__group">
      <div className="services__group-head">
        <h3>{title}</h3>

        <div className="services__controls">
          <button
            type="button"
            className="services__btn"
            onClick={() => scrollRow(-1)}
            aria-label="Voltar"
          >
            ‹
          </button>
          <button
            type="button"
            className="services__btn"
            onClick={() => scrollRow(1)}
            aria-label="Avançar"
          >
            ›
          </button>
        </div>
      </div>

      <div className="services__row" ref={rowRef}>
        {items.map((s) => (
          <article
            key={s.title}
            className={`service-card service-card--${s.accent}`}
          >
            <div className="service-card__inner">
              <h4 className="service-card__title">{s.title}</h4>
              <p className="service-card__desc">{s.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const services = useMemo<Service[]>(
    () => [
      { group: "procedimentos", accent: "blue", title: "MOP – Method of Procedure", description: "Elaboração de procedimentos detalhados para manutenções planejadas em sistemas críticos, com foco na prevenção de riscos operacionais, validação técnica e rastreabilidade completa das atividades." },
      { group: "procedimentos", accent: "green", title: "SOP – Standard Operating Procedure", description: "Procedimentos padronizados para operações e manobras, garantindo segurança, eficiência e conformidade com protocolos técnicos definidos para ambientes de missão crítica." },
      { group: "procedimentos", accent: "yellow", title: "EOP – Emergency Operating Procedure", description: "Planos de ação claros, objetivos e testados para resposta a falhas ou emergências. Visam restaurar a operação com agilidade, segurança e controle, minimizando impactos." },

      { group: "projetos", accent: "blue", title: "Consultoria em Certificação Tier (Uptime)", description: "Diagnósticos e planos de ação para atender critérios do Uptime Institute. Alinhamento aos pilares Operacional Sustainability e acompanhamento até auditoria oficial." },
      { group: "projetos", accent: "green", title: "Gerenciamento de Retrofit", description: "Modernizações em infraestrutura de data centers com foco em segurança, garantia de continuidade e aumento de capacidade com mínimo impacto." },
      { group: "projetos", accent: "yellow", title: "Atualização de As Built", description: "Documentação técnica precisa pós-obra, com plantas, diagramas, rotas de cabeamento e registros atualizados. BIM e scanners 3D quando aplicável." },
      { group: "projetos", accent: "red", title: "Coordenação de Projetos", description: "Gestão completa de escopo, cronograma, orçamento, riscos e qualidade. Integração entre engenharia civil, elétrica, mecânica e TI." },
      { group: "projetos", accent: "red", title: "Gerenciamento de Obras", description: "Supervisão técnica e administrativa de obras em ambientes críticos, com controle de prazos, segurança, fornecedores e qualidade em instalações civis e MEP." },

      { group: "diagnostico", accent: "red", title: "Termografia e Análise de Vibração", description: "Inspeções termográficas para identificar aquecimentos anormais e vibração em equipamentos rotativos (geradores, chillers, bombas) para prevenir falhas mecânicas." },
      { group: "diagnostico", accent: "blue", title: "Análise de Energia e Baterias", description: "Avaliação de qualidade de energia (harmônicas, fator de potência, desequilíbrios e interrupções) e saúde/capacidade de bancos de baterias em sistemas UPS." },
      { group: "diagnostico", accent: "green", title: "CFD e Detecção de Hot Spots", description: "Simulações de fluxo e térmicas para otimizar corredores quente/frio, distribuição de ar e controle de hotspots em ambientes críticos." },
      { group: "diagnostico", accent: "yellow", title: "Estudo de Seletividade Elétrica", description: "Verificação da coordenação de proteção para garantir seletividade e evitar desligamentos indesejados em cascata." },
    ],
    []
  )

  const groups = useMemo(
    () => [
      { key: "procedimentos" as const, title: "Elaboração de Procedimentos Operacionais para Infraestrutura de Data Centers" },
      { key: "projetos" as const, title: "Gerenciamento de Projetos, Obras e Retrofit de Infraestrutura de Data Centers" },
      { key: "diagnostico" as const, title: "Serviços de Diagnóstico e Manutenção Preditiva em Sistemas Críticos de Data Center" },
    ],
    []
  )

  return (
    <section className="services" id="servicos">
      <div className="services__container">
        <h2 className="services__title">Serviços</h2>

        {groups.map((g) => (
          <GroupCarousel
            key={g.key}
            title={g.title}
            items={services.filter((s) => s.group === g.key)}
          />
        ))}
      </div>
    </section>
  )
}