/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect sadece tarayıcıda çalışır.
  // Bu kontrolü yapmazsak sunucu (Server) ile tarayıcı (Client) uyuşmazlığı hatası alırız.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Yüklenene kadar boş bir yer tutucu (layout kaymasın diye)
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
      aria-label="Temayı Değiştir"
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
