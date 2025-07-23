import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWork() {
    const Skills = [
        "css3",
        "git",
        "github",
        "html5",
        "javascript",
        "mongodb",
        "nodejs",
        "react",
        "tailwindcss",
        "threejs",
        "visualstudiocode",
        "vitejs",
        "wordpress",
    ]
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                {Skills.map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}

            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {Skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => {
    return <img src={src} alt="icon" className="duration-200 rounded-sm hover:scale-110" />
}

