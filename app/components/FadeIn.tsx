"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;    // ? koyduk çünkü opsiyonel (varsayılan değeri var)
  className?: string; // ? koyduk çünkü opsiyonel
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
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
