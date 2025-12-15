import { MdOutlineWork } from "react-icons/md";


export default function Experience() {
    return (
        <section id="experience" className="pb-20 px-10 min-h-[10vh] flex justify-center">
            <div className="flex flex-col gap-2 max-w-5xl w-full">
                <div>
                    <h2 className="text-white text-3xl font-bold">Deneyimlerim</h2>
                </div>

                <div className="relative border-l border-gray-700 ml-3 space-y-10 mt-4">

                    {/* 1. EĞİTİM KUTUSU */}
                    <div className="relative pl-8">
                        {/* O beyaz nokta (Timeline Dot) */}
                        <MdOutlineWork className="absolute -left-2.5 top-2 w-5 h-5" />

                        <h3 className="text-white text-lg font-bold">Mobil Uygulama Geliştirici (Flutter)</h3>
                        <p className="text-gray-400 text-sm mt-1">MOPAŞ Marketçilik A.Ş, 2023 Temmuz - Halen</p>
                    </div>

                    {/* 2. EĞİTİM KUTUSU */}
                    <div className="relative pl-8">
                        {/* O beyaz nokta */}
                        <MdOutlineWork className="absolute -left-2.5 top-2 w-5 h-5" />

                        <h3 className="text-white text-lg font-bold">Mobil Uygulama Geliştirici Stajyeri (Stajyer)</h3>
                        <p className="text-gray-400 text-sm mt-1">MOPAŞ Marketçilik A.Ş, 2023 Haziran - 2023 Temmuz</p>
                    </div>

                    <div className="relative pl-8">
                        {/* O beyaz nokta */}
                        <MdOutlineWork className="absolute -left-2.5 top-2 w-5 h-5" />

                        <h3 className="text-white text-lg font-bold">Yazılım Geliştirici (Stajyer)</h3>
                        <p className="text-gray-400 text-sm mt-1">Argenova, 2022 Ağustos - 2022 Eylül</p>
                    </div>

                </div>

            </div>
        </section>
    );
};
