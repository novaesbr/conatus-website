# Conatus Data Centers 🌐

Consultoria especializada em excelência operacional para Data Centers críticos, com foco em governança, padronização e confiabilidade na América Latina.

Este projeto é o website institucional da Conatus, desenvolvido com tecnologias modernas para oferecer uma experiência de alta performance, segura e multilíngue.

## 🚀 Tecnologias

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: CSS Puro (Vanilla CSS) com foco em design premium e responsivo.
- **E-mails**: [Resend API](https://resend.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Fontes**: Google Fonts (Inter)

## ✨ Principais Funcionalidades

### 🌎 Internacionalização (i18n)
O site oferece suporte completo para três idiomas, com persistência de preferência no navegador:
- **Português (PT)**
- **Inglês (EN)**
- **Espanhol (ES)**

### 🛡️ Segurança no Contato
O formulário de contato foi projetado com múltiplas camadas de proteção:
- **Honeypot**: Proteção silenciosa contra bots e spammers automáticos.
- **Validação de Dados**: Verificação rigorosa no backend para garantir integridade das informações.
- **Email Template**: Notificações profissionais e formatadas para a equipe administrativa.

### 🗺️ Mapa de Atuação Interativo
Visualização dinâmica das operações da Conatus em centros estratégicos como México, Chile e Brasil.

## 🛠️ Estrutura do Projeto

```text
conatus-website/
├── app/
│   ├── api/          # Rotas de API (Envio de e-mail)
│   ├── components/   # Componentes modulares da interface
│   ├── context/      # Gerenciamento de estado (Idioma/Traduções)
│   ├── globals.css   # Estilos globais e sistema de design
│   └── layout.tsx    # Estrutura principal da aplicação
├── public/           # Ativos estáticos (Imagens, Logos)
└── docs/             # Documentação técnica adicional
```

## ⚙️ Configuração Local

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` na raiz e adicione sua chave do Resend:
   ```env
   RESEND_API_KEY=sua_chave_aqui
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

Desenvolvido com foco em **Confiabilidade**, **Excelência Técnica** e **Inovação Responsável**.
