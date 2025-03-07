import { progressBars } from "../data";
import ProgressBar from "./Progressbar";
import blob3 from "../assets/blob3.png"
import { useTranslation } from "react-i18next";
export default function AboutMe() {

    const { t } = useTranslation();

    return (
        <>
            <section id="about" className="relative z-20 min-h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center space-y-24 md:space-y-0 lg:mt-0 py-20 md:py-0 md:pb-0">
                <div className="w-full px-10 md:px-20 text-center lg:text-start lg:ps-28">
                    <h2 className="text-5xl font-title pb-3 ps-6">{t("aboutUs.hero.title")}</h2>
                    <div className="text-xl md:text-2xl lg:text-xl space-y-3 leading-relaxed p-6 backdrop-blur-sm bg-black/5 shadow-xl rounded-2xl ">
                        <p>{t("aboutUs.hero.description1")}</p>
                        <p>
                            {t("aboutUs.hero.description2")}
                        </p>
                        <p>
                            {t("aboutUs.hero.description3")}
                        </p>
                    </div>
                </div>
                <div className="w-full px-10 md:px-40 md:pt-10">
                    {progressBars.map((bar, index) => (
                        <ProgressBar key={index} label={bar.label} value={bar.value} />
                    ))}
                </div>
            </section>
            <img src={blob3} alt="Blob 3" className="absolute -bottom-240 z-10 left-0"></img>
        </>
    );
}
