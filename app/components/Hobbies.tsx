import { FiCode, FiBookOpen, FiActivity, FiCpu } from "react-icons/fi";

const hobbies = [
    {
        id: '1',
        title: 'Kod Yazmak',
        icon: <FiCode />,
    },
    {
        id: '2',
        title: 'Kitap Okumak',
        icon: <FiBookOpen />,
    },
    {
        id: '3',
        title: 'Spor Yapmak',
        icon: <FiActivity />,
    },
    {
        id: '4',
        title: 'Proje Geliştirmek',
        icon: <FiCpu />,
    },
];

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-10 px-10 flex justify-center">
            <div className="w-full max-w-5xl">
                <h3 className="text-2xl font-bold text-white mb-3">Hobilerim</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {hobbies.map((hobby) => (
                        <div
                            key={hobby.id}
                            className="
                        flex items-center gap-3 p-4 
                        bg-card/50 border border-white/10 rounded-xl
                        hover:bg-card hover:border-primary/50 transition-colors
                    "
                        >
                            <div className="text-primary">
                                {hobby.icon}
                            </div>
                            <span className="text-muted-foreground font-medium text-sm">
                                {hobby.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
