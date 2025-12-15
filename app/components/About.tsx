"use client";

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

function About() {
    return (
        <section id="about" className="pt-10 pb-20 px-10 min-h-[50vh] flex items-center justify-center">

            <div className="max-w-5xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                <div className="flex-1 text-center md:text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-2">
                            Berk Ali MERAL
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4 ">
                            Mobile Uygulama Geliştirici
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Uzmanlık alanım kullanıcı dostu arayüzler ve sağlam altyapılar oluşturmak.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        {/* CV İndir Butonu (Mavi) */}
                        <a
                            href="/cv.pdf" // CV dosyanın yolu
                            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                        >
                            <FiDownload /> CV İndir
                        </a>

                        {/* İletişim Butonu (Koyu/Gri) */}
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-700 border border-zinc-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <FiMail /> İletişime Geç
                        </a>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex-1 flex justify-center md:justify-end"
                >
                    <div className="relative w-60 h-60 md:w-70 md:h-70">
                        {/* Fotoğrafın arkasındaki hafif glow/parlama efekti */}
                        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>

                        {/* Profil Resmi */}
                        {/* Next.js Image kullanıyorsan aşağıdaki img etiketini Image bileşeniyle değiştir */}
                        <img
                            src="berkalimeral.jpeg" // Temsili resim
                            alt="Berk Ali Meral"
                            className="relative w-full h-full object-cover rounded-full border-4 border-zinc-800 shadow-2xl"
                        />
                    </div>
                </motion.div>

            </div>

        </section>
    );
}

export default About;