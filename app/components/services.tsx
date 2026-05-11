"use client"

import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
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
  Lightbulb,
  ClipboardList,
  GraduationCap as GraduationCapIcon,
  Cog
} from "lucide-react"

const sectionIcons = [ClipboardList, GraduationCapIcon, Cog]

const icons = [
  [FileText, Shield, BookOpen, Users, GraduationCap],
  [Award, Play, CheckCircle, UserPlus, BookOpen],
  [Wrench, Settings, Cpu, Zap, Lightbulb]
]

const groupColors = ["#06b6d4", "#22c55e", "#a855f7"]

export default function Services() {
  const { language, t } = useContext(LanguageContext)

  const groups = [
    {
      title: "Procedures",
      subtitle: language === "pt" ? "Padronização e governança (SOP, MOP, EOP)" : (language === "en" ? "Standardization and governance (SOP, MOP, EOP)" : "Estandarización y gobernanza (SOP, MOP, EOP)"),
      description: t("services.group1.desc"),
      items: language === "pt" ? [
        { title: "Elaboração e Padronização de Procedimentos", desc: "Desenvolvimento de SOP, MOP e EOP alinhados às melhores práticas e aos padrões do Uptime Institute." },
        { title: "Mapeamento e Estruturação de Processos Críticos", desc: "Definição de fluxos, papéis e responsabilidades para operações e manutenções em Data Centers." },
        { title: "Auditorias Operacionais", desc: "Avaliação da conformidade operacional e identificação de oportunidades de melhoria e mitigação de riscos." },
        { title: "Gestão de Documentação", desc: "Controle de versões, revisão e governança da documentação técnica e operacional com rastreabilidade." },
        { title: "Governança e Conformidade", desc: "Garantia de aderência aos padrões, políticas internas e requisitos regulatórios aplicáveis a ambientes críticos." }
      ] : (language === "en" ? [
        { title: "Procedure Preparation and Standardization", desc: "Development of SOP, MOP, and EOP aligned with best practices and Uptime Institute standards." },
        { title: "Mapping and Structuring of Critical Processes", desc: "Definition of flows, roles, and responsibilities for operations and maintenance in Data Centers." },
        { title: "Operational Audits", desc: "Assessment of operational compliance and identification of improvement opportunities and risk mitigation." },
        { title: "Documentation Management", desc: "Version control, review, and governance of technical and operational documentation with traceability." },
        { title: "Governance and Compliance", desc: "Ensuring adherence to standards, internal policies, and regulatory requirements applicable to critical environments." }
      ] : [
        { title: "Elaboración y Estandarización de Procedimientos", desc: "Desarrollo de SOP, MOP y EOP alineados con las mejores prácticas y los estándares del Uptime Institute." },
        { title: "Mapeo y Estructuración de Procesos Críticos", desc: "Definición de flujos, roles y responsabilidades para operaciones y mantenimiento en Data Centers." },
        { title: "Auditorías Operativas", desc: "Evaluación del cumplimiento operativo e identificación de oportunidades de mejora y mitigación de riesgos." },
        { title: "Gestión de Documentación", desc: "Control de versiones, revisión y gobernanza de la documentación técnica y operativa con trazabilidad." },
        { title: "Gobernanza y Cumplimiento", desc: "Garantía de adherencia a los estándares, políticas internas y requisitos regulatorios aplicables a ambientes críticos." }
      ])
    },
    {
      title: "Institute",
      subtitle: language === "pt" ? "Capacitação e certificação técnica" : (language === "en" ? "Technical training and certification" : "Capacitación y certificación técnica"),
      description: t("services.group2.desc"),
      items: language === "pt" ? [
        { title: "Treinamentos Especializados", desc: "Programas de capacitação em operações, manutenção e boas práticas para Data Centers." },
        { title: "Certificações Profissionais", desc: "Certificação técnica de profissionais com base em padrões operacionais consolidados." },
        { title: "Plataforma de Ensino", desc: "Ambiente digital com conteúdos técnicos, trilhas de aprendizado e materiais atualizados." },
        { title: "Avaliações Técnicas", desc: "Avaliação de competências e desempenho com emissão de certificados." },
        { title: "Desenvolvimento de Equipes", desc: "Consultoria para evolução da maturidade operacional e plano de desenvolvimento de equipes." }
      ] : (language === "en" ? [
        { title: "Specialized Training", desc: "Training programs in operations, maintenance, and best practices for Data Centers." },
        { title: "Professional Certifications", desc: "Technical certification of professionals based on consolidated operational standards." },
        { title: "Learning Platform", desc: "Digital environment with technical content, learning paths, and updated materials." },
        { title: "Technical Assessments", desc: "Assessment of skills and performance with the issuance of certificates." },
        { title: "Team Development", desc: "Consultancy for the evolution of operational maturity and team development plans." }
      ] : [
        { title: "Capacitaciones Especializadas", desc: "Programas de capacitación en operaciones, mantenimiento y buenas prácticas para Data Centers." },
        { title: "Certificaciones Profesionales", desc: "Certificación técnica de profesionales basada en estándares operativos consolidados." },
        { title: "Plataforma de Enseñanza", desc: "Entorno digital con contenidos técnicos, rutas de aprendizaje y materiales actualizados." },
        { title: "Evaluaciones Técnicas", desc: "Evaluación de competencias y desempeño con emisión de certificados." },
        { title: "Desarrollo de Equipos", desc: "Consultoría para la evolución de la madurez operativa y plan de desarrollo de equipos." }
      ])
    },
    {
      title: "Operations & Technology",
      subtitle: language === "pt" ? "Execução, inovação e performance operacional" : (language === "en" ? "Execution, innovation and operational performance" : "Ejecución, innovación y desempeño operativo"),
      description: t("services.group3.desc"),
      items: language === "pt" ? [
        { title: "Gestão Operacional", desc: "Operação e suporte técnico especializado para ambientes críticos 24x7." },
        { title: "Manutenção Planejada e Preventiva", desc: "Execução de planos de manutenção com foco em confiabilidade e disponibilidade." },
        { title: "Execução de Procedimentos", desc: "Aplicação prática e validação de SOP, MOP e EOP para garantir aderência e segurança operacional." },
        { title: "Tecnologia e Ferramentas", desc: "Desenvolvimento e uso de ferramentas para gestão de manutenção, ativos e indicadores operacionais." },
        { title: "Eficiência e Inovação", desc: "Projetos de eficiência energética, automação e inovação para otimização de performance e redução de custos." }
      ] : (language === "en" ? [
        { title: "Operational Management", desc: "Operation and specialized technical support for 24x7 critical environments." },
        { title: "Planned and Preventive Maintenance", desc: "Execution of maintenance plans focused on reliability and availability." },
        { title: "Execution of Procedures", desc: "Practical application and validation of SOP, MOP, and EOP to ensure operational adherence and safety." },
        { title: "Technology and Tools", desc: "Development and use of tools for maintenance management, assets, and operational indicators." },
        { title: "Efficiency and Innovation", desc: "Energy efficiency, automation, and innovation projects for performance optimization and cost reduction." }
      ] : [
        { title: "Gestión Operativa", desc: "Operación y soporte técnico especializado para entornos críticos las 24 horas, los 7 días de la semana." },
        { title: "Mantenimiento Planificado y Preventivo", desc: "Ejecución de planes de mantenimiento con enfoque en confiabilidad y disponibilidad." },
        { title: "Ejecución de Procedimientos", desc: "Aplicación práctica y validación de SOP, MOP y EOP para garantizar la adherencia y seguridad operativa." },
        { title: "Tecnología y Herramientas", desc: "Desarrollo y uso de herramientas para la gestión de mantenimiento, activos e indicadores operativos." },
        { title: "Eficiencia e Innovación", desc: "Proyectos de eficiencia energética, automatización e innovación para la optimización del desempeño y reducción de costos." }
      ])
    }
  ]

  return (
    <section className="services" id="servicos">
      <div className="services__container">
        <div className="services__header">
          <h2>{t("services.title")}</h2>
          <p>{t("services.subtitle")}</p>
        </div>

        <div className="services-sections">
          {groups.map((group, i) => (
            <div key={i} className="services-section">
              <div className="services-section-header">
                <div className="services-section-icon" style={{ color: groupColors[i] }}>
                  {(() => {
                    const Icon = sectionIcons[i]
                    return <Icon size={32} />
                  })()}
                </div>
                <div className="services-section-content">
                  <h3 style={{ color: groupColors[i] }}>{group.title}</h3>
                  <p>{group.subtitle}</p>
                  {group.description && <p className="group-description">{group.description}</p>}
                </div>
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