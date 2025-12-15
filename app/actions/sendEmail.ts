/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
    const senderName = formData.get('senderName') as string;
    const senderEmail = formData.get('senderEmail') as string;
    const message = formData.get('message') as string;

    if (!senderEmail || !message || !senderName) {
        return {
            error: 'Lütfen tüm alanları doldurun.',
        };
    }

    try {
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "berkalimeral@gmail.com",
            subject: `Porfolyodan Yeni Mesaj: ${senderName}`,
            replyTo: senderEmail,
            text: message,
            html: `
                <h3>Portfolyo sitenden yeni bir mesajın var!</h3>
                <p><strong>Gönderen:</strong> ${senderName} (${senderEmail})</p>
                <p><strong>Mesaj:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
                ${message}
                </blockquote>
            `
        });
        return { success: true, data };
    } catch (error: any) {
        return {
        error: error.message || "Bir hata oluştu.",
        };
    }
};
