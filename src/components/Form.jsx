import { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import animationData from "../assets/AnimationForm.json";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [animationCompleted, setAnimationCompleted] = useState(true);

    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start((index) => ({
                x: 0,
                opacity: 1,
                transition: { delay: index * 0.3, duration: 0.5 },
            }));
        } else {
            controls.start({ x: 100, opacity: 0 });
        }
    }, [inView, controls]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Il nome è obbligatorio.";
        if (!formData.email) {
            newErrors.email = "L'email è obbligatoria.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email non valida.";
        }
        if (!formData.phone) {
            newErrors.phone = "Il numero di telefono è obbligatorio.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Numero di telefono non valido.";
        }
        if (!formData.subject) newErrors.subject = "L'oggetto è obbligatorio.";
        if (!formData.message) newErrors.message = "Il messaggio è obbligatorio.";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAnimationCompleted(false);

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsLoading(false);
            setAnimationCompleted(true);
            return;
        }

        try {
            const response = await axios.post("http://localhost:5001/send-email", formData);
            setStatus(response.data.message);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            setErrors({});
        } catch (error) {
            setStatus("Errore nell'invio dell'email.");
        }
    };

    const handleAnimationComplete = () => {
        setAnimationCompleted(true);
        setIsLoading(false);
    };

    const fields = ["message", "subject", "phone", "email", "name"];

    return (
        <div ref={ref} className="w-full px-10 md:px-0 md:w-1/2 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {fields.map((field, index) => (
                    <motion.div
                        key={field}
                        custom={index}
                        initial={{ x: 100, opacity: 0 }}
                        animate={controls}
                        className="w-full"
                    >
                        <label htmlFor={field} className="block text-2xl font-title font-medium text-white">
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        {field !== "message" ? (
                            <input
                                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                name={field}
                                id={field}
                                value={formData[field]}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border bg-white/5 text-white backdrop-blur-sm border-primary rounded-md shadow-sm focus:outline-none focus:border-white"
                                placeholder={`Inserisci il tuo ${field}`}
                            />
                        ) : (
                            <textarea
                                name={field}
                                id={field}
                                value={formData[field]}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full p-2 border bg-white/5 text-white backdrop-blur-sm border-primary rounded-md shadow-sm resize-none focus:outline-none focus:border-white"
                                placeholder="Inserisci il tuo messaggio"
                            />
                        )}
                        {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                    </motion.div>
                ))}
                <button
                    data-aos="zoom-out-up"
                    data-aos-delay="700"
                    type="submit"
                    className={`w-full text-white py-2 px-4 rounded-md shadow flex justify-center items-center transition ${isLoading ? "bg-transparent" : "bg-primary hover:bg-white hover:text-primary"}`}
                    disabled={isLoading}
                >
                    {isLoading && !animationCompleted ? (
                        <Lottie
                            animationData={animationData}
                            className="w-20 h-20"
                            loop={false}
                            onComplete={handleAnimationComplete}
                        />
                    ) : (
                        "Invia"
                    )}
                </button>
            </form>
            {status && <p className="mt-4 text-white text-center">{status}</p>}
        </div>
    );
};

export default ContactForm;
