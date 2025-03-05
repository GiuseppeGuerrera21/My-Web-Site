import Lanyard from "./Lanyard"
import ContactForm from "./Form";
import bg from "../assets/bg.png"

export default function Section() {
    return (
        <>
            <section
                id="contact"
                className="relative min-h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center  space-y-24 md:space-y-0 mt-26 lg:mt-0"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="flex flex-col px-10 md:px-20 lg:text-start lg:ps-28 lg:px-32">
                    <h2 className="text-5xl font-title pb-3">Contatti</h2>
                    <div className="text-xl md:text-2xl lg:text-xl space-y-3 backdrop-blur-xs ">
                        <p>
                            Sono sempre aperto a nuove opportunità e collaborazioni! Se hai domande, proposte o semplicemente vuoi discutere di un progetto, non esitare a contattarmi. Puoi raggiungermi tramite il modulo qui a destra oppure attraverso i miei canali.
                        </p>
                        <p>
                            Sarò felice di rispondere alle tue richieste e di esplorare insieme come posso contribuire al tuo progetto.
                        </p>
                    </div>
                </div>
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </section>
            {/* <img src={blob3} alt="Blob 3" className="absolute -bottom-240 left-0"></img> */}
        </>
    );
}