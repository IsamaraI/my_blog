/* eslint-disable @next/next/no-img-element */
import { FiExternalLink, FiGithub } from "react-icons/fi";


const portfolio = [
  {
    id: 1,
    title: 'Dev Connect',
    category: 'Social Media App',
    desc: 'Yazılımcıların proje paylaşabileceği, birbirleriyle etkileşime geçip takım arkadaşı bulabileceği bir sosyal ağ platformu. MERN Stack kullanılarak geliştirildi.',
    imgUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    tech: ['Flutter', 'Dart', 'Firebase']
  },
  {
    id: 2,
    title: 'Duo Goal',
    category: 'Productivity',
    desc: 'Kullanıcıların hedeflerini takip etmesini sağlayan, oyunlaştırma (gamification) öğeleri içeren bir verimlilik uygulaması. İlerleme grafikleri ve hatırlatıcılar içerir.',
    imgUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
    tech: ['Flutter', 'Supabase']
  },
  {
    id: 3,
    title: 'MovieWiki',
    category: 'Entertainment',
    desc: 'TMDB API kullanılarak geliştirilen, filmlerin detaylarını, fragmanlarını ve oyuncu kadrosunu listeyen modern bir sinema rehberi uygulaması.',
    imgUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop',
    tech: ['Flutter', 'Firebase', 'TMDB API']
  },
  {
    id: 4,
    title: 'Crypto Tracker',
    category: 'Finance',
    desc: 'Canlı borsa verilerini çekerek anlık kripto para takibi sağlayan, kullanıcı portföyünü yönetebileceği bir finans aracı.',
    imgUrl: 'https://images.unsplash.com/photo-1621504450168-38f647315698?q=80&w=1000&auto=format&fit=crop',
    tech: ['Next JS', 'Tailwind CSS', 'React']
  }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-10 px-10 flex justify-center">
            <div className="flex flex-col gap-2 max-w-5xl w-full">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-white">Portfolyo</h2>
                    <p className="text-muted-foreground text-sm">Son zamanlarda üzerinde çalıştığım bazı projeler.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {portfolio.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="
                    group relative flex flex-col overflow-hidden
                    bg-card/50 border border-white/10 backdrop-blur-sm 
                    rounded-xl hover:border-primary/50 transition-colors duration-300
                  "
                            >
                                {/* GÖRSEL KISMI */}
                                {/* h-60: Resim yüksekliğini sabitledik ki kartlar eşit dursun */}
                                <div className="relative h-60 w-full overflow-hidden">
                                    <img
                                        src={item.imgUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Resim üzerine gelince çıkan karartma */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <button className="p-2 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors">
                                            <FiGithub size={20} />
                                        </button>
                                        <button className="p-2 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors">
                                            <FiExternalLink size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* İÇERİK KISMI */}
                                <div className="p-6 flex flex-col gap-3">

                                    {/* Kategori & Başlık */}
                                    <div>
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Açıklama */}
                                    <p className="text-muted-foreground text-sm line-clamp-3">
                                        {item.desc}
                                    </p>

                                    {/* Kullanılan Teknolojiler (Etiketler) */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                        {item.tech.map((tech, index) => (
                                            <span key={index} className="text-xs font-medium px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
