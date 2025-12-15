"use client";

import { useState } from "react";
import sendEmail from "../actions/sendEmail";
import { FiSend } from "react-icons/fi";

export default function Contact() {
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState("");


    async function handleSubmit(formData: FormData) {
        setPending(true);
        setMessage("");

        const result = await sendEmail(formData);

        if (result.error) {
            setMessage(`❌ Hata: ${result.error}`);
        } else {
            setMessage("✅ Mesajınız başarıyla gönderildi! En kısa sürede döneceğim.");
            // Formu temizlemek için (Opsiyonel, basit yöntem)
            (document.getElementById("contact-form") as HTMLFormElement).reset();
        }
        setPending(false);
    }

    return (
        <section id="contact" className="py-10 px-10 flex justify-center">
            <div className="flex flex-col gap-3 max-w-5xl w-full">
                <h3 className="text-white font-bold">İletişime Geçelim</h3>
                <form
                    id="contact-form"
                    action={handleSubmit}
                    className="flex flex-col gap-5 p-10 bg-card/50 backdrop-blur-sm border border-white/10 shadow-lg rounded-xl "
                >
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <input
                            type="text"
                            required
                            name="senderName"
                            placeholder="İsim-Soyisim"
                            className="flex-1                 /* Mevcut alanı eşit paylaşır */
                        bg-card border border-white/10 
                        text-white placeholder:text-muted-foreground
                        rounded-lg px-4 py-3 outline-none 
                        focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                        <input
                            type="text"
                            required
                            name="senderEmail"
                            placeholder="Email Adresiniz"
                            className="flex-1                 /* Mevcut alanı eşit paylaşır */
                        bg-card border border-white/10 
                        text-white placeholder:text-muted-foreground
                        rounded-lg px-4 py-3 outline-none 
                        focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </div>
                    <textarea
                        rows={5}/* Yüksekliği artıran kısım burası */
                        placeholder="Mesajınızı Giriniz"
                        required
                        name="message"
                        className="
                            bg-card border border-white/10 
                            text-white placeholder:text-muted-foreground
                            rounded-lg px-4 py-3 outline-none resize-none
                            focus:border-primary focus:ring-1 focus:ring-primary transition-all
                        "
                    />
                    {message && (
                        <p className={`text-sm font-medium ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
                            {message}
                        </p>
                    )}
                    <div className="flex gap-2 items-center">
                        <button
                            type="submit"
                            disabled={pending}
                            className="
                            flex gap-2 items-center
                        w-fit px-4 py-2           /* Genişlik yazıya göre, iç boşluk (padding) rahat */
                        bg-primary text-white font-medium 
                        rounded-lg 
                        hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all
                    ">
                            {
                                pending ? (
                                    <>Gönderiliyor...</>
                                ) : (
                                    <>Mesaj Yolla</>
                                )
                            }
                            <FiSend />
                        </button>

                    </div>
                </form>

            </div>
        </section>
    );
};
