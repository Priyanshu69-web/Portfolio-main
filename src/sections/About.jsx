import React, { useRef } from "react"
import Card from "../components/Card"

const About = () => {
    const grid2Container = useRef()
    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading"> About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

                {/* grid 1 */}
                <div className="flex items-end grid-default-color grid-1">

                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg-scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Priyanshu</p>
                        <p className="subtext">
                            I am a passionate Full Stack Developer with a strong
                            foundation in web development.
                            I dedicated myself to learning through hands-on projects
                            and real-world practice.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -buttom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"
                    >
                    </div>
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container} className="flex justify-center items-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="GSAP" containerRef={grid2Container} />
                        <Card style={{ rotate: "70deg", top: "30%", left: "70%" }} text="GSAP" containerRef={grid2Container} />
                        <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="GSAP" containerRef={grid2Container} />
                        <Card style={{ rotate: "28deg", top: "10%", left: "30%" }} text="GSAP" containerRef={grid2Container} />

                    </div>
                </div>
                <div className="grid-black-color grid-3"></div>
                <div className="grid-special-color grid-4"></div>
                <div className="grid-default-color grid-5"></div>

            </div>

        </section>
    )
}

export default About
