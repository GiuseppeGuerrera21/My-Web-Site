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
                <p className="text-xl">Le certificazioni che attestano le mie competenze e il mio percorso di crescita professionale.</p>
            </div>
            <CardGrid />
        </section>
    )
}