/* eslint-disable @next/next/no-img-element */

const skills = [
  {
    id: 'flutter',
    title: 'Flutter',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
  },
  {

    id: 'dart',
    title: 'Dart',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  },
  {

    id: 'react',
    title: 'React',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: 'nextjs',
    title: 'Next JS',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', // Next.js koyu temada görünmeyebilir, buna dikkat (beyaz svg gerekebilir)
    // Alternatif beyaz logo gerekirse: https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg
  },
  {
    id: 'nestjs',
    title: 'Nest JS',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    id: 'firebase',
    title: 'Firebase',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    id: 'supabase',
    title: 'Supabase',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', // Supabase logosu bazen bulunmaz, yoksa generic database ikonu koyarız.
  },
  {
    id: 'sql',
    title: 'SQL',
    imgSource: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
];

export default function Skills() {
    return (
        <section id="skills" className="py-10 px-10 flex justify-center">
            <div className="flex flex-col gap-5 max-w-5xl w-full">
                <h2 className="text-2xl font-bold text-white">Yeteneklerim</h2>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    {skills.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="
              flex flex-col gap-3 justify-center items-center 
              rounded-xl bg-card/50 border border-white/10 backdrop-blur-sm p-6
              w-25 h-25       /* Sabit genişlik/yükseklik kare olması için */
              sm:w-28 sm:h-28 /* Tablette biraz daha büyük */
              md:w-30 md:h-30 /* Masaüstünde tam boy */
              hover:bg-card hover:border-blue-500/50 hover:-translate-y-1
              transition-all duration-300 cursor-default group
              ">
                                <div className="relative w-10 h-10 md:w-12 md:h-12">
                                    <img
                                        src={item.imgSource}
                                        alt={item.title}
                                        className="w-full h-full object-contain  group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm font-medium group-hover:text-white transition-colors">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
