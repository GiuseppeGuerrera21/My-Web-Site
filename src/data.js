export const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "product" },
    { name: "Contact", id: "contact" },
];

export const progressBars = [
    { label: "FRONT-END ", value: 90 },
    { label: "BACK-END", value: 80 },
    { label: "WEB DESIGN", value: 75 },
    { label: "GRAPHIC DESIGN", value: 85 },
];

const offsets = {
    home: 1,
    about: 1,
};

export const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const yOffset = offsets[id] || -80;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};