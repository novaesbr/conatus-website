"use client";

import { createContext, useEffect, useState, ReactNode } from "react";

export type Language = "pt" | "en" | "es";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Nav
    "nav.home": "Início",
    "nav.group": "Grupo",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.institutional": "Institucional",
    "nav.contact": "Contato",
    "nav.apps": "Aplicações",
    "nav.clientArea": "Área do Cliente",

    // Hero
    "hero.title": "Excelência operacional e confiabilidade para Data Centers",
    "hero.intro": "A Conatus Data Centers é responsável por liderar a estratégia, governança e integração de serviços especializados para infraestruturas críticas de Data Centers.",
    "hero.p1": "Atuamos garantindo consistência operacional, alta confiabilidade e evolução sustentável ao longo de todo o ciclo de vida dos ativos e sistemas.",
    "hero.p2": "Somos o elo central que conecta pessoas, processos e tecnologia, assegurando excelência operacional e aderência às melhores práticas globais.",
    "hero.btn": "Entrar em Contato",

    // About
    "about.title": "Sobre a Conatus",
    "about.subtitle": "Consultoria especializada em excelência operacional para Data Centers críticos, com foco em governança, padronização e confiabilidade.",
    "about.grid.p1": "A Conatus Data Centers lidera a estruturação, padronização e governança operacional de ambientes críticos.",
    "about.grid.p2": "Atuamos desde a implementação até a operação contínua, assegurando:",
    "about.list.item1": "Consistência operacional",
    "about.list.item2": "Alta confiabilidade dos sistemas",
    "about.list.item3": "Mitigação de riscos operacionais",
    "about.list.item4": "Evolução contínua dos ativos",
    "about.pillars.title": "Nossa estrutura é baseada em três pilares:",
    "about.pillars.item1": "Procedures → Padronização e governança (SOP, MOP, EOP)",
    "about.pillars.item2": "Institute → Capacitação e certificação técnica",
    "about.pillars.item3": "Operations & Technology → Execução, inovação e performance operacional",
    "about.metrics.label1": "Foco",
    "about.metrics.value1": "Conformidade e governança operacional",
    "about.metrics.label2": "Atuação",
    "about.metrics.value2": "Ambientes de missão crítica",
    "about.metrics.label3": "Experiencia",
    "about.metrics.value3": "Data Centers Tier III e IV",
    "about.diff.title": "Diferenciais",
    "about.footer": "Estruturamos operações críticas para máxima confiabilidade, segurança e performance.",

    // Services
    "services.title": "SERVIÇOS",
    "services.subtitle": "Soluções completas para excelência operacional em Data Centers críticos.",
    "services.group1.title": "Procedures",
    "services.group1.subtitle": "Padronização e governança (SOP, MOP, EOP)",
    "services.group1.desc": "Desenvolvemos, padronizamos e governamos procedimentos operacionais críticos para garantir segurança e redução de riscos.",
    "services.group2.title": "Institute",
    "services.group2.subtitle": "Capacitação e certificação técnica",
    "services.group2.desc": "Capacitamos profissionais e promovemos o desenvolvimento contínuo de equipes para excelência operacional.",
    "services.group3.title": "Operations & Technology",
    "services.group3.subtitle": "Execução, inovação e performance operacional",
    "services.group3.desc": "Gerenciamos operações críticas e desenvolvemos soluções tecnológicas para eficiência e confiabilidade.",

    // Institutional
    "inst.title": "Institucional",
    "inst.subtitle": "Direcionadores que sustentam a atuação da Conatus em ambientes de missão crítica.",
    "inst.mission.title": "Missão",
    "inst.mission.text": "Prover excelência na estruturação, padronização e governança de operações em Data Centers, garantindo segurança, confiabilidade, eficiência e conformidade.",
    "inst.vision.title": "Visão",
    "inst.vision.text": "Ser referência nacional e internacional em excelência operacional para Data Centers, liderando a evolução de operações críticas por meio de processos e tecnologia.",
    "inst.values.title": "Valores",
    "inst.values.item1": "Confiabilidade",
    "inst.values.item2": "Excelência Técnica",
    "inst.values.item3": "Inovação Responsável",
    "inst.values.item4": "Compromisso com o Cliente",
    "inst.values.item5": "Ética e Transparência",
    "inst.footer": "Pessoas, processos e tecnologia integrados para garantir excelência operacional.",

    // Coverage
    "coverage.title": "Atuação na América Latina",
    "coverage.intro": "Nossa equipe já atuou em projetos e rotinas de operação em ambientes críticos nos principais polos da região.",
    "coverage.note": "Procedimentos (MOP/SOP/EOP, manutenção), validações técnicas, suporte em implantações e capacitação operacional.",
    "coverage.back": "Voltar para visão geral",
    "coverage.services_label": "Principais Serviços:",

    // Partners & ABDC
    "partners.title": "Parceiros",
    "partners.subtitle": "Colaborações que impulsionam resultados",
    "partners.text1": "A Conatus Data Centers estabeleceu parcerias estratégicas com líderes do setor para oferecer as melhores soluções em infraestrutura de Data Centers.",
    "partners.text2": "Nossas parcerias garantem acesso às mais modernas tecnologias e práticas do mercado, permitindo entregar resultados excepcionais.",
    "partners.visit": "Visite o site",
    "abdc.title": "Associação com ABDC",
    "abdc.subtitle": "Associação Brasileira de Data Center",
    "abdc.text1": "A Conatus Data Centers faz parte da Associação Brasileira de Data Center.",
    "abdc.text2": "A ABDC une empresas e profissionais para garantir o crescimento estruturado do mercado de Data Centers no Brasil.",
    "abdc.text3": "Compartilhamos nossa vasta experiência contribuindo para o acesso a informações e boas práticas no setor.",

    // Contact
    "contact.title_prefix": "Entre em",
    "contact.title_highlight": "Contato",
    "contact.subtitle": "Fale com a equipe Conatus para receber uma proposta especializada ou diagnóstico na América Latina.",
    "contact.success_title": "Enviado!",
    "contact.success_message": "Mensagem enviada com sucesso. Retornaremos em breve.",
    "contact.error_title": "Erro",
    "contact.error_message": "Houve um problema ao enviar. Tente novamente.",
    "contact.email_title": "E-mail",
    "contact.phone_title": "Telefone",
    "contact.address_title": "Localização",
    "contact.address_value": "São Paulo, SP - Brasil",
    "contact.hours_label": "Atendimento",
    "contact.hours_value": "Segunda a Sexta, 08:00 às 18:00",
    "contact.name_label": "Nome",
    "contact.email_label": "E-mail",
    "contact.company_label": "Empresa",
    "contact.message_label": "Mensagem",
    "contact.name": "Seu nome completo",
    "contact.email": "Ex: contato@empresa.com",
    "contact.company": "Nome da sua organização",
    "contact.message": "Descreva sua demanda ou projeto",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.contact": "Contato",
    "language.pt": "Português",
    "language.en": "English",
    "language.es": "Español"
  },
  en: {
    "nav.home": "Home",
    "nav.group": "Group",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.institutional": "Institutional",
    "nav.contact": "Contact",
    "nav.apps": "Applications",
    "nav.clientArea": "Client Area",

    "hero.title": "Operational excellence and reliability for Data Centers",
    "hero.intro": "Conatus Data Centers is responsible for leading the strategy, governance and integration of specialized services for critical Data Center infrastructures.",
    "hero.p1": "We operate by ensuring operational consistency, high reliability and sustainable evolution throughout the entire lifecycle of assets and systems.",
    "hero.p2": "We are the central link that connects people, processes and technology, ensuring operational excellence and adherence to global best practices.",
    "hero.btn": "Get in Touch",

    "about.title": "About Conatus",
    "about.subtitle": "Specialized consultancy in operational excellence for critical Data Centers, focusing on governance, standardization and reliability.",
    "about.grid.p1": "Conatus Data Centers leads the structuring, standardization and operational governance of critical environments.",
    "about.grid.p2": "We operate from implementation to continuous operation, ensuring:",
    "about.list.item1": "Operational consistency",
    "about.list.item2": "High system reliability",
    "about.list.item3": "Operational risk mitigation",
    "about.list.item4": "Continuous asset evolution",
    "about.pillars.title": "Our structure is based on three pillars:",
    "about.pillars.item1": "Procedures → Standardization and governance (SOP, MOP, EOP)",
    "about.pillars.item2": "Institute → Technical training and certification",
    "about.pillars.item3": "Operations & Technology → Execution, innovation and operational performance",
    "about.metrics.label1": "Focus",
    "about.metrics.value1": "Compliance and operational governance",
    "about.metrics.label2": "Operations",
    "about.metrics.value2": "Mission-critical environments",
    "about.metrics.label3": "Experience",
    "about.metrics.value3": "Data Centers Tier III and IV",
    "about.diff.title": "Differentials",
    "about.footer": "We structure critical operations for maximum reliability, safety and performance.",

    "services.title": "SERVICES",
    "services.subtitle": "Complete solutions for operational excellence in critical Data Centers.",
    "services.group1.title": "Procedures",
    "services.group1.subtitle": "Standardization and governance (SOP, MOP, EOP)",
    "services.group1.desc": "We develop, standardize and govern critical operational procedures to ensure safety and risk reduction.",
    "services.group2.title": "Institute",
    "services.group2.subtitle": "Technical training and certification",
    "services.group2.desc": "We train professionals and promote continuous team development for operational excellence.",
    "services.group3.title": "Operations & Technology",
    "services.group3.subtitle": "Execution, innovation and operational performance",
    "services.group3.desc": "We manage critical operations and develop technological solutions for efficiency and reliability.",

    "inst.title": "Institutional",
    "inst.subtitle": "Drivers that support Conatus operations in mission-critical environments.",
    "inst.mission.title": "Mission",
    "inst.mission.text": "To provide excellence in the structuring, standardization and governance of Data Center operations, ensuring safety, reliability, efficiency and compliance.",
    "inst.vision.title": "Vision",
    "inst.vision.text": "To be a national and international reference in operational excellence for Data Centers, leading the evolution of critical operations through processes and technology.",
    "inst.values.title": "Values",
    "inst.values.item1": "Reliability",
    "inst.values.item2": "Technical Excellence",
    "inst.values.item3": "Responsible Innovation",
    "inst.values.item4": "Customer Commitment",
    "inst.values.item5": "Ethics and Transparency",
    "inst.footer": "Integrated people, processes and technology to ensure operational excellence.",

    "coverage.title": "Latin America Operations",
    "coverage.intro": "Our team has already worked on projects and operational routines in critical environments in the region's main hubs.",
    "coverage.note": "Procedures (MOP/SOP/EOP, maintenance), technical validations, implementation support and operational training.",
    "coverage.back": "Back to overview",
    "coverage.services_label": "Main Services:",

    "partners.title": "Partners",
    "partners.subtitle": "Collaborations that drive results",
    "partners.text1": "Conatus Data Centers has established strategic partnerships with industry leaders to offer the best solutions in Data Center infrastructure.",
    "partners.text2": "Our partnerships ensure access to the most modern technologies and market practices, allowing us to deliver exceptional results.",
    "partners.visit": "Visit website",
    "abdc.title": "Association with ABDC",
    "abdc.subtitle": "Brazilian Data Center Association",
    "abdc.text1": "Conatus Data Centers is part of the Brazilian Data Center Association.",
    "abdc.text2": "ABDC brings together companies and professionals to ensure the structured growth of the Data Center market in Brazil.",
    "abdc.text3": "We share our vast experience contributing to access to information and best practices in the sector.",

    "contact.title_prefix": "Get in",
    "contact.title_highlight": "Touch",
    "contact.subtitle": "Talk to the Conatus team for a specialized proposal or diagnosis in Latin America.",
    "contact.success_title": "Sent!",
    "contact.success_message": "Message sent successfully. We will get back to you soon.",
    "contact.error_title": "Error",
    "contact.error_message": "There was a problem sending. Please try again.",
    "contact.email_title": "Email",
    "contact.phone_title": "Phone",
    "contact.address_title": "Location",
    "contact.address_value": "São Paulo, SP - Brazil",
    "contact.hours_label": "Service",
    "contact.hours_value": "Monday to Friday, 08:00 to 18:00",
    "contact.name_label": "Name",
    "contact.email_label": "Email",
    "contact.company_label": "Company",
    "contact.message_label": "Message",
    "contact.name": "Your full name",
    "contact.email": "Ex: contact@company.com",
    "contact.company": "Your organization name",
    "contact.message": "Describe your request or project",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",

    "footer.rights": "All rights reserved.",
    "footer.contact": "Contact",
    "language.pt": "Português",
    "language.en": "English",
    "language.es": "Español"
  },
  es: {
    "nav.home": "Inicio",
    "nav.group": "Grupo",
    "nav.about": "Sobre",
    "nav.services": "Servicios",
    "nav.institutional": "Institucional",
    "nav.contact": "Contacto",
    "nav.apps": "Aplicaciones",
    "nav.clientArea": "Área del Cliente",

    "hero.title": "Excelencia operacional y confiabilidad para Data Centers",
    "hero.intro": "Conatus Data Centers es responsable de liderar la estrategia, gobernanza e integración de servicios especializados para infraestructuras críticas de Data Centers.",
    "hero.p1": "Actuamos garantizando consistencia operacional, alta confiabilidad y evolución sostenible a lo largo de todo el ciclo de vida de los activos y sistemas.",
    "hero.p2": "Somos el vínculo central que conecta personas, procesos y tecnología, asegurando la excelencia operativa y el cumplimiento de las mejores prácticas globales.",
    "hero.btn": "Contactar",

    "about.title": "Sobre Conatus",
    "about.subtitle": "Consultoría especializada en excelencia operacional para Data Centers críticos, con enfoque en gobernanza, estandarización y confiabilidad.",
    "about.grid.p1": "Conatus Data Centers lidera la estruturação, estandarización y gobernanza operativa de ambientes críticos.",
    "about.grid.p2": "Actuamos desde la implementación hasta la operación continua, asegurando:",
    "about.list.item1": "Consistencia operativa",
    "about.list.item2": "Alta confiabilidad de los sistemas",
    "about.list.item3": "Mitigación de riesgos operativos",
    "about.list.item4": "Evolución continua de los activos",
    "about.pillars.title": "Nuestra estructura se basa en tres pilares:",
    "about.pillars.item1": "Procedures → Estandarización y gobernanza (SOP, MOP, EOP)",
    "about.pillars.item2": "Institute → Capacitación y certificación técnica",
    "about.pillars.item3": "Operations & Technology → Ejecución, innovación y desempeño operativo",
    "about.metrics.label1": "Enfoque",
    "about.metrics.value1": "Cumplimiento y gobernanza operativa",
    "about.metrics.label2": "Actuación",
    "about.metrics.value2": "Entornos de misión crítica",
    "about.metrics.label3": "Experiencia",
    "about.metrics.value3": "Data Centers Tier III y IV",
    "about.diff.title": "Diferenciales",
    "about.footer": "Estructuramos operaciones críticas para la máxima confiabilidad, seguridad y desempeño.",

    "services.title": "SERVICIOS",
    "services.subtitle": "Soluciones completas para la excelencia operativa en Data Centers críticos.",
    "services.group1.title": "Procedures",
    "services.group1.subtitle": "Estandarización y gobernanza (SOP, MOP, EOP)",
    "services.group1.desc": "Desarrollamos, estandarizamos y gobernamos procedimientos operativos críticos para garantizar la seguridad y reducción de riesgos.",
    "services.group2.title": "Institute",
    "services.group2.subtitle": "Capacitación y certificación técnica",
    "services.group2.desc": "Capacitamos profesionales y promovemos el desarrollo continuo de equipos para la excelencia operativa.",
    "services.group3.title": "Operations & Technology",
    "services.group3.subtitle": "Ejecución, innovación y desempeño operativo",
    "services.group3.desc": "Gestionamos operaciones críticas y desarrollamos soluciones tecnológicas para la eficiencia y confiabilidad.",

    "inst.title": "Institucional",
    "inst.subtitle": "Direccionadores que sustentan la actuación de Conatus en entornos de misión crítica.",
    "inst.mission.title": "Misión",
    "inst.mission.text": "Proveer excelencia en la estructuración, estandarización y gobernanza de operaciones en Data Centers, garantizando seguridad, confiabilidad, eficiencia y cumplimiento.",
    "inst.vision.title": "Visión",
    "inst.vision.text": "Ser referencia nacional e internacional en excelencia operativa para Data Centers, liderando la evolución de operaciones críticas mediante procesos y tecnología.",
    "inst.values.title": "Valores",
    "inst.values.item1": "Confiabilidad",
    "inst.values.item2": "Excelencia Técnica",
    "inst.values.item3": "Innovación Responsable",
    "inst.values.item4": "Compromiso con el Cliente",
    "inst.values.item5": "Ética y Transparencia",
    "inst.footer": "Personas, procesos y tecnología integrados para garantizar la excelencia operativa.",

    "coverage.title": "Operaciones en América Latina",
    "coverage.intro": "Nuestro equipo ya ha trabajado en proyectos y rutinas operativas en entornos críticos en los principales polos de la región.",
    "coverage.note": "Procedimientos (MOP/SOP/EOP, mantenimiento), validaciones técnicas, soporte en implementaciones y capacitación operativa.",
    "coverage.back": "Volver a la visión general",
    "coverage.services_label": "Principales Servicios:",

    "partners.title": "Socios",
    "partners.subtitle": "Colaboraciones que impulsan resultados",
    "partners.text1": "Conatus Data Centers ha establecido asociaciones estratégicas con líderes de la industria para ofrecer las mejores soluciones en infraestructura de Data Centers.",
    "partners.text2": "Nuestras asociaciones garantizan el acceso a las tecnologías más modernas y prácticas de mercado, permitiendo entregar resultados excepcionales.",
    "partners.visit": "Visite el sitio",
    "abdc.title": "Asociación con ABDC",
    "abdc.subtitle": "Asociación Brasileña de Data Center",
    "abdc.text1": "Conatus Data Centers forma parte de la Asociación Brasileña de Data Center.",
    "abdc.text2": "La ABDC une empresas y profesionales para garantizar el crecimiento estructurado del mercado de Data Centers en Brasil.",
    "abdc.text3": "Compartimos nuestra vasta experiencia contribuyendo al acceso a la información y buenas prácticas en el sector.",

    "contact.title_prefix": "Entre en",
    "contact.title_highlight": "Contacto",
    "contact.subtitle": "Hable con el equipo de Conatus para recibir una propuesta especializada o diagnóstico en América Latina.",
    "contact.success_title": "¡Enviado!",
    "contact.success_message": "Mensaje enviado con éxito. Responderemos pronto.",
    "contact.error_title": "Error",
    "contact.error_message": "Hubo un problema al enviar. Inténtalo de nuevo.",
    "contact.email_title": "Correo",
    "contact.phone_title": "Teléfono",
    "contact.address_title": "Ubicación",
    "contact.address_value": "São Paulo, SP - Brasil",
    "contact.hours_label": "Atención",
    "contact.hours_value": "Lunes a Viernes, 08:00 a 18:00",
    "contact.name_label": "Nombre",
    "contact.email_label": "Correo",
    "contact.company_label": "Empresa",
    "contact.message_label": "Mensaje",
    "contact.name": "Su nombre completo",
    "contact.email": "Ej: contacto@empresa.com",
    "contact.company": "Nombre de su organización",
    "contact.message": "Describa su solicitud o proyecto",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",

    "footer.rights": "Todos los derechos reservados.",
    "footer.contact": "Contacto",
    "language.pt": "Português",
    "language.en": "English",
    "language.es": "Español"
  }
};

export const LanguageContext = createContext<LanguageContextProps>({
  language: "pt",
  setLanguage: () => {},
  t: (key) => key
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const stored = typeof window !== "undefined" && window.localStorage.getItem("language");
    if (stored && (stored === "pt" || stored === "en" || stored === "es")) {
      setLanguage(stored as Language);
    }
  }, []);

  useEffect(() => {
    typeof window !== "undefined" && window.localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string) => {
    const dict = translations[language] || {};
    return dict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
