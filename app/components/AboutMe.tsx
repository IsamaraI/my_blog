"use client";

import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

function AboutMe() {
    return (
        <section id="about-me" className="pb-20 px-10 min-h-[10vh] flex justify-center">
            <div className="flex flex-col gap-2 max-w-5xl w-full">
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="flex flex-col gap-4">
                    <h2 className="text-white text-3xl font-bold">Hakkımda</h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                        Ben Berk Ali MERAL, Karabük Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. Flutter konusunda iyi bir deneyime sahip, tutkulu bir mobil geliştiriciyim. Kullanıcı odaklı, yüksek performanslı ve sade arayüzlere sahip uygulamalar geliştiriyorum.
                        Mobil geliştirme dışında, yazılım dünyasındaki bakış açımı genişletmek için C# .NET Core, NestJS, Kotlin Compose ve Python gibi farklı teknolojiler üzerinde de kendimi geliştirmeye çalışıyorum. Öğrenmeye hevesli, motive ve takım çalışmasına yatkın bir geliştirici olmaya özen gösteriyorum.
                        {/* Senin Lorem Ipsum metnini buraya koyabilirsin */}
                    </p>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
                className="relative border-l border-gray-700 ml-3 space-y-10 mt-4">

                    {/* 1. EĞİTİM KUTUSU */}
                    <div className="relative pl-8">
                        {/* O beyaz nokta (Timeline Dot) */}
                        <HiAcademicCap className="absolute -left-2.5 top-2 w-5 h-5" />

                        <h3 className="text-white text-lg font-bold">Lisans Derecesi Bilgisayar Mühendisliği</h3>
                        <p className="text-gray-400 text-sm mt-1">Karabük Üniversitesi %30 İngilizce, 2019 - 2023</p>
                    </div>

                    {/* 2. EĞİTİM KUTUSU */}
                    <div className="relative pl-8">
                        {/* O beyaz nokta */}
                        <HiAcademicCap className="absolute -left-2.5 top-2 w-5 h-5" />

                        <h3 className="text-white text-lg font-bold">İngilizce Hazırlık</h3>
                        <p className="text-gray-400 text-sm mt-1">Karabük Üniversitesi, 2018 - 2019</p>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default AboutMe;