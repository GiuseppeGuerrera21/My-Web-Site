export default function Detail({ setShowDetail, item }) {
    return (
        <div className="mx-auto p-8 space-y-12 bg-background text-white">
            {/* Titolo */}
            <h1 className="text-5xl font-bold text-center text-white/80 font-title">{item.title}</h1>

            {/* Sezione Immagine */}
            <div className="relative w-full">
                <img
                    src={item.largeImage}
                    alt={`Anteprima del progetto ${item.title}`}
                    className="w-full h-full object-contain rounded-xl shadow-lg"
                />
            </div>

            {/* Sezione Descrizione */}
            <div className="bg-[#1E2235] p-6 rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold text-white mb-4">Descrizione del Sito</h2>
                <p className="text-gray-300 text-lg">
                    {item.description || "Descrizione non disponibile"}
                </p>
            </div>

            {/* Sezione Competenze */}
            {item.skills && (
                <div className="bg-[#1E2235] p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-white mb-4">Competenze Utilizzate</h2>
                    <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                        {item.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Sezione Linguaggi e Framework */}
            {item.technologies && (
                <div className="bg-[#1E2235] p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-white mb-4">Linguaggi e Framework</h2>
                    <ul className="grid grid-cols-1 gap-4 text-lg text-gray-300">
                        {item.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Pulsanti */}
            <div className="flex justify-center gap-6">
                {item.siteUrl && (
                    <a
                        href={item.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#c92044] transition-all"
                    >
                        Visita il sito
                    </a>
                )}
                <button
                    onClick={() => setShowDetail(false)}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-all"
                >
                    Torna ai progetti
                </button>
            </div>
        </div>
    );
}