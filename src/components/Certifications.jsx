import CardGrid from "./CardGrid"
import bg from "../assets/bg.png"

export default function Certifications() {
    return (
        <section
            id='certifications'
            className="min-h-screen flex flex-col text-center justify-center space-y-10 md:space-y-18 py-20 md:py-0"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="space-y-6">
                <h2 className="text-5xl font-title">My Certifications</h2>
                <p className="text-xl w-2/3 mx-auto leading-relaxed p-6 backdrop-blur-sm bg-black/5 shadow-xl rounded-2xl">Ecco le certificazioni che ho ricevuto: una per un corso di programmazione intensivo con Aulab e un’altra per un corso di React (71.5 ore) acquistato su Udemy. Clicca su una di esse per maggiori dettagli</p>
            </div>
            <CardGrid />
        </section>
    )
}