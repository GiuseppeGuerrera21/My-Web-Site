export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-blue-100 rounded-lg shadow-lg text-start">
            <h1 className="text-3xl font-bold mb-4 text-black">Privacy Policy</h1>
            <p className="text-sm text-gray-600">Ultimo aggiornamento: 27/03/2025</p>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">1. Titolare del Trattamento dei Dati</h2>
                <p className="text-black">Giuseppe Guerrera</p>
                <p className="text-black">Via Alessandro Manzoni 11</p>
                <p className="text-black">giuseppegue00@gmail.com</p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">2. Tipologie di Dati Raccolti</h2>
                <p className="text-black">Attraverso il modulo di contatto raccogliamo i seguenti dati personali:</p>
                <ul className="list-disc list-inside ml-4 text-black">
                    <li>Nome</li>
                    <li>Indirizzo email</li>
                    <li>Numero di telefono (se fornito volontariamente)</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">3. Finalità del Trattamento</h2>
                <p className="text-black">I dati raccolti vengono utilizzati esclusivamente per:</p>
                <ul className="list-disc list-inside ml-4 text-black">
                    <li>Rispondere alle richieste di informazioni inviate dall'utente.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">4. Modalità di Trattamento e Conservazione</h2>
                <p className="text-black">
                    I dati sono trattati con strumenti elettronici e/o cartacei con misure di sicurezza adeguate. I dati vengono
                    conservati per il tempo necessario a rispondere alla richiesta e successivamente cancellati, salvo obblighi di
                    legge.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">5. Diritti dell’Utente</h2>
                <p className="text-black">L’utente ha il diritto di:</p>
                <ul className="list-disc list-inside ml-4 text-black">
                    <li>Revocare il consenso al trattamento.</li>
                    <li>Opporsi al trattamento per motivi legittimi.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">6. Cookie Policy</h2>
                <p className="text-black">Questo sito <strong>non utilizza cookie di profilazione o di terze parti</strong>. Possono essere utilizzati cookie tecnici necessari.</p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold text-black">7. Modifiche alla Privacy Policy</h2>
                <p className="text-black">Questa Privacy Policy può essere aggiornata. Eventuali modifiche saranno pubblicate su questa pagina.</p>
            </section>
        </div>
    )
}