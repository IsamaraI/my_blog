"use client";

import { motion } from "framer-motion";


export default function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      // Başlangıç durumu: Görünmez ve 60px aşağıda
      initial={{ opacity: 0, y: 60 }}
      // Görüş alanına girince: Görünür ve olması gereken yerde
      whileInView={{ opacity: 1, y: 0 }}
      // Ayarlar:
      // once: true -> Sadece bir kere çalışır (tekrar yukarı çıkınca kaybolmaz)
      // margin: "-100px" -> Ekrana 100px girmeden animasyon başlamasın (hemen tetiklenmesin)
      viewport={{ once: true, margin: "-100px" }}
      // Geçiş süresi ve hızı
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className={className}
    >
      
      {children}
    </motion.div>
  );
}
