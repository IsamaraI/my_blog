"use client";

import Link from "next/link";
import { useState } from "react";
import { FiCpu, FiMenu, FiX } from "react-icons/fi";
import ThemeSwitch from "./ui/ThemeSwitch";

const navItems = [
    { id: 'about', label: 'Hakkımda' },
    { id: 'skills', label: 'Yetenekler' },
    { id: 'experience', label: 'Deneyim' },
    { id: 'portfolio', label: 'Projeler' },
    { id: 'contact', label: 'İletişim' },
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-10 right-10 z-50 flex justify-center">
            <div className="w-full max-w-5xl flex items-center justify-between border rounded-xl bg-card backdrop-blur-md text-muted px-4">

                <Link href={"/"} className="flex items-center gap-3 group">
                    <div className="bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <FiCpu size={20} />
                    </div>
                    <span className="text-foreground font-bold text-lg tracking-tight">
                        Berk Ali Meral
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6 p-2 text-sm font-medium">
                    {navItems.map((item) => {
                        return (
                            <Link
                                key={item.id}
                                href={`#${item.id}`}
                                className="relative group py-2" // 'group' class'ı hover durumunu çocuk elemanlara iletir
                            >
                                {/* Link Metni */}
                                <span className="text-sm font-medium text-muted group-hover:text-primary transition-colors">
                                    {item.label}
                                </span>

                                {/* ÇİZGİ ANİMASYONU */}
                                <span className="
                                absolute 
                                bottom-0 
                                left-0 
                                w-0              
                                h-0.5           
                                bg-primary      
                                transition-all 
                                duration-300     
                                group-hover:w-full
                            "></span>
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center gap-4">
                    {/* Varsa diğer butonların */}

                    <ThemeSwitch /> {/* İşte buraya! */}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-full transition-colors"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {isOpen && (
                    <div className="
                        absolute top-full left-0 mt-2 w-full px-0 md:hidden
                        animate-in fade-in slide-in-from-top-5 duration-200
                    ">
                        <div className="
                            flex flex-col gap-4 p-6 backdrop-blur-md 
                            border border-border 
                            rounded-2xl
                            shadow-xl
                            text-center
                            bg-white/95 dark:bg-black/95
                        ">
                            {navItems.map((item) => {
                                return (
                                    <Link
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => setIsOpen(false)} // Tıklayınca kapansın
                                        className="py-2 block"
                                    >
                                        <span className="relative group inline-block">
                                            <span className="group-hover:text-primary transition-colors font-medium text-foreground">
                                                {item.label}
                                            </span>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary duration-300 transition-all group-hover:w-full"></span>
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

        </nav>
    );
};
