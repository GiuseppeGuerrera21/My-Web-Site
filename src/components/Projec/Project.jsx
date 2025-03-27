import Slider from "./Slider";

export default function Project() {
    return (
        <div id="projects" className="flex flex-col text-center items-center py-30">
            <h2 className="text-5xl font-title pb-10 ps-6">My Projects</h2>
            <div>
                <Slider />
            </div>
        </div>
    )
}