export const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "product" },
    { name: "Contact", id: "contact" },
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