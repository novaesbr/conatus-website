import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, empresa, mensagem, confirmEmail } = body;

    // 1. PROTEÇÃO CONTRA BOTS (Honeypot)
    // Se o campo escondido "confirmEmail" estiver preenchido, é um bot.
    if (confirmEmail) {
      console.warn("Bot detectado via Honeypot.");
      return NextResponse.json({ success: true }); // Fingimos sucesso para o bot desistir
    }

    // 2. VALIDAÇÃO MANUAL
    if (!nome || nome.length < 2 || nome.length > 100) {
      return NextResponse.json({ error: "Nome inválido" }, { status: 400 });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }

    if (!mensagem || mensagem.length < 10 || mensagem.length > 2000) {
      return NextResponse.json({ error: "Mensagem muito curta ou muito longa" }, { status: 400 });
    }

    // 3. ENVIO SEGURO
    const { error } = await resend.emails.send({
      from: "Conatus Website <onboarding@resend.dev>",
      to: ["edgardgpt@gmail.com"],
      replyTo: email,
      subject: `🛡️ Novo contato: ${nome}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #6366f1; margin-bottom: 20px;">Novo contato via Site Conatus</h2>
          <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <p style="margin: 0 0 10px 0;"><strong>👤 Nome:</strong> ${nome}</p>
            <p style="margin: 0 0 10px 0;"><strong>📧 E-mail:</strong> ${email}</p>
            <p style="margin: 0 0 20px 0;"><strong>🏢 Empresa:</strong> ${empresa || "Não informada"}</p>
            <div style="margin-top: 20px; padding: 20px; background: #f9fafb; border-radius: 8px; border-left: 5px solid #6366f1;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #6366f1;">💬 Mensagem:</p>
              <p style="margin: 0; white-space: pre-wrap; color: #4b5563;">${mensagem}</p>
            </div>
          </div>
          <p style="font-size: 11px; color: #9ca3af; margin-top: 30px; text-align: center;">
            Este e-mail foi enviado automaticamente pelo sistema de segurança da Conatus Data Centers.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro no Resend:", error);
      return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
    }

    // 4. RETORNO LIMPO (Segurança: Não expomos detalhes internos da API)
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erro crítico na rota de contato:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}