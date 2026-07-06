import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "KonstruktBau <kontakt@konstruktbau.ch>",
      to: "info@konstruktbaugmbh.ch",
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "E-Mail konnte nicht gesendet werden.",
      },
      { status: 500 }
    );
  }
}