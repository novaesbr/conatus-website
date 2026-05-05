"use client"

import { 
  FileText, 
  Shield, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Award, 
  Play, 
  CheckCircle, 
  UserPlus,
  Wrench, 
  Settings, 
  Cpu, 
  Zap, 
  Lightbulb
} from "lucide-react"

const icons = [
  [FileText, Shield, BookOpen, Users, GraduationCap],
  [Award, Play, CheckCircle, UserPlus, BookOpen],
  [Wrench, Settings, Cpu, Zap, Lightbulb]
]

const groupColors = ["#22c55e", "#a855f7", "#06b6d4"]

export default function Services() {
  const groups = [
    {
      title: "Procedures",
      subtitle: "Padronização e governança (SOP, MOP, EOP)",
      items: [
        { title: "Elaboração e Padronização de Procedimentos", desc: "Desenvolvimento de SOP, MOP e EOP alinhados às melhores práticas e aos padrões do Uptime Institute." },
        { title: "Mapeamento e Estruturação de Processos Críticos", desc: "Definição de fluxos, papéis e responsabilidades para operações e manutenções em Data Centers." },
        { title: "Auditorias Operacionais", desc: "Avaliação da conformidade operacional e identificação de oportunidades de melhoria e mitigação de riscos." },
        { title: "Gestão de Documentação", desc: "Controle de versões, revisão e governança da documentação técnica e operacional com rastreabilidade." },
        { title: "Governança e Conformidade", desc: "Garantia de aderência aos padrões, políticas internas e requisitos regulatórios aplicáveis a ambientes críticos." }
      ]
    },
    {
      title: "Institute",
      subtitle: "Capacitação e certificação técnica",
      items: [
        { title: "Treinamentos Especializados", desc: "Programas de capacitação em operações, manutenção e boas práticas para Data Centers." },
        { title: "Certificações Profissionais", desc: "Certificação técnica de profissionais com base em padrões operacionais consolidados." },
        { title: "Plataforma de Ensino", desc: "Ambiente digital com conteúdos técnicos, trilhas de aprendizado e materiais atualizados." },
        { title: "Avaliações Técnicas", desc: "Avaliação de competências e desempenho com emissão de certificados." },
        { title: "Desenvolvimento de Equipes", desc: "Consultoria para evolução da maturidade operacional e plano de desenvolvimento de equipes." }
      ]
    },
    {
      title: "Operations & Technology",
      subtitle: "Execução, inovação e performance operacional",
      items: [
        { title: "Gestão Operacional", desc: "Operação e suporte técnico especializado para ambientes críticos 24x7." },
        { title: "Manutenção Planejada e Preventiva", desc: "Execução de planos de manutenção com foco em confiabilidade e disponibilidade." },
        { title: "Execução de Procedimentos", desc: "Aplicação prática e validação de SOP, MOP e EOP para garantir aderência e segurança operacional." },
        { title: "Tecnologia e Ferramentas", desc: "Desenvolvimento e uso de ferramentas para gestão de manutenção, ativos e indicadores operacionais." },
        { title: "Eficiência e Inovação", desc: "Projetos de eficiência energética, automação e inovação para otimização de performance e redução de custos." }
      ]
    }
  ]

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <h2>SERVIÇOS</h2>
          <p>Soluções completas para excelência operacional em Data Centers críticos.</p>
        </div>

        <div className="services-sections">
          {groups.map((group, i) => (
            <div key={i} className="services-section">
              <div className="group-header">
                <h3 style={{ color: groupColors[i] }}>{group.title}</h3>
                <p>{group.subtitle}</p>
              </div>

              <div className="service-cards">
                {group.items.map((item, index) => {
                  const Icon = icons[i][index]
                  return (
                    <div key={index} className="service-card" style={{ borderTop: `4px solid ${groupColors[i]}` }}>
                      <div className="service-card__icon" style={{ color: groupColors[i] }}>
                        <Icon size={24} />
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}