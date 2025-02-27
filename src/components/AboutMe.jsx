import { progressBars } from "../data";
import ProgressBar from "./Progressbar";
export default function AboutMe() {


    return (
        <div id="about" className="min-h-screen flex flex-wrap justify-around items-center -space-x-20">
            <div className="w-1/3">
                <h2 className="text-3xl font-bold">About me</h2>
                <p className="text-xl">Sono un giovane ragazzo di 22 anni, appassionato al mondo della programmazione e con un forte desiderio di crescita professionale. Sempre alla ricerca di nuove sfide, mi piace affrontare i problemi con soluzioni creative e innovative. Sono determinato a migliorare continuamente e a scoprire nuove tecnologie per ampliare le mie competenze.</p>
            </div>
            <div className="w-2/7">
                {progressBars.map((bar, index) => (
                    <ProgressBar key={index} label={bar.label} value={bar.value} />
                ))}
            </div>
        </div>
    );
}
