// NAVBAR 
export const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
];

// PROGRESSBAR
export const progressBars = [
    { label: "FRONT-END ", value: 90 },
    { label: "BACK-END", value: 80 },
    { label: "WEB DESIGN", value: 75 },
    { label: "GRAPHIC DESIGN", value: 85 },
];

// SCROLL
const offsets = {
    home: 1,
    about: 1,
};

export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const yOffset = offsets[id] || 0;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

// SVG
export const customSvg =[
    { customD: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"},
    { customD: "M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"},
    { customD: "M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"}
];

// CARDCONTENT
import aulab from "./assets/aulab.png";
import react from "./assets/react.png";

export const cards = [
    {
        id: 1,
        title: "Aulab Hackademy",
        image: aulab,
        color: "bg-gradient-to-bl from-primary to-background",
        description: `
            Durante il mio percorso nello sviluppo di applicazioni web, ho acquisito esperienza nell’utilizzo di HTML, CSS, JavaScript, PHP e Laravel, imparando a creare interfacce intuitive e performanti. Ho approfondito le best practice per scrivere codice pulito e scalabile, garantendo un’ottima esperienza utente e una gestione efficiente delle risorse.

            Ho lavorato con database relazionali, in particolare MySQL, imparando a progettare, implementare e gestire strutture di dati complesse. Ho sviluppato competenze nella scrittura di query SQL avanzate, ottimizzando l’estrazione e la manipolazione dei dati per garantire prestazioni elevate nelle applicazioni.

            Nel campo del versionamento del codice, ho acquisito familiarità con Git e GitHub, strumenti fondamentali per il controllo delle versioni. Ho imparato a gestire repository, creare branch, risolvere conflitti e collaborare efficacemente con altri sviluppatori in progetti di team, garantendo un flusso di lavoro organizzato e strutturato.

            L’approccio allo sviluppo che ho adottato si basa sulle metodologie Agile, che mi hanno permesso di gestire progetti in modo iterativo e incrementale. Ho imparato a suddividere il lavoro in sprint, adattarmi alle esigenze in evoluzione del cliente e migliorare costantemente il prodotto attraverso feedback continui e cicli di revisione.

            Infine, ho iniziato a esplorare il mondo dell’Intelligenza Artificiale, acquisendo le basi teoriche e pratiche su come applicare le tecniche AI in contesti reali. Ho approfondito strumenti e concetti fondamentali, con l’obiettivo di integrare soluzioni intelligenti nei miei progetti e ampliare le mie competenze in questo settore in continua evoluzione.
        `,
    },
    {
        id: 2,
        title: "Udemy",
        image: react,
        color: "bg-gradient-to-br from-primary to-background",
        description: `
            Durante la mia formazione su Udemy, ho seguito un corso intensivo su React, che mi ha permesso di acquisire una solida conoscenza delle tecnologie più moderne nel mondo dello sviluppo front-end. Ho imparato a creare applicazioni web dinamiche e scalabili utilizzando React, comprendendo a fondo la gestione dello stato e l'architettura dei componenti.

            Inoltre, ho approfondito l'uso di React Router per la gestione della navigazione tra le pagine in un'applicazione a singola pagina, migliorando l'esperienza utente con transizioni fluide e senza ricaricare l'intera pagina. Il corso mi ha anche introdotto a Next.js, un framework basato su React che mi ha permesso di imparare a gestire il rendering lato server e a migliorare le prestazioni delle applicazioni attraverso la generazione statica e il rendering dinamico.

            Un'altra area che ho esplorato è stata Node.js, dove ho acquisito le basi per la creazione di server e l'interazione con le API, ampliando la mia comprensione dello sviluppo full-stack. Ho anche iniziato a lavorare con TypeScript, apprendendo come migliorare la qualità del codice con tipizzazione statica e gestione avanzata degli errori.

            Durante il corso, ho approfondito in dettaglio tutti gli hook di React, comprendendo come utilizzarli per gestire lo stato, gli effetti collaterali e il ciclo di vita dei componenti in modo funzionale. L'uso dei hook come useState, useEffect, useContext, useReducer e altri mi ha permesso di scrivere codice più pulito, riutilizzabile e facilmente manutenibile.

            Questa formazione mi ha dato le basi solide per sviluppare applicazioni moderne e performanti, integrando tecnologie avanzate come React, Next.js, Node.js e TypeScript, e mi ha fornito una visione completa delle best practice nello sviluppo web.
        `,
    }
];

// CAROUSELCONTENT
import img1 from "./assets/Villaoliva.png"
import img2 from "./assets/Autotrasporti.png"

export const sliderData = [
    {
        title: "Lossless Youths",
        image: img1
    },
    {
        title: "Estrange Bond",
        image: img2
    },
    {
        title: "The Gate Keeper",
        image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
    },
    {
        title: "The Gate Keeper",
        image: "https://i.redd.it/tc0aqpv92pn21.jpg"
    },
];