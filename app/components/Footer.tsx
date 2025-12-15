import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
            <footer className="w-full flex justify-center px-4 pb-10">
                <div 
                className="
                w-full max-w-5xl flex flex-col justify-center items-center 
                p-6 border-t border-card
                "
                >
                    <p className="text-muted">&#169; 2025 Berk Ali MERAL. Tüm Hakları Saklıdır.</p>
                    <div className="flex gap-3 pt-3 text-muted">
                        <a 
                        href="https://www.linkedin.com/in/berk-ali-meral/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:scale-110 transition-all"
                    >
                        <FaLinkedin size={22}/>
                    </a>
                    <a 
                        href="https://github.com/berkalimeral" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:scale-110 transition-all"
                    >
                        <FaGithub size={22}/>
                    </a>
                    </div>
                </div>
            </footer>
    );
};
