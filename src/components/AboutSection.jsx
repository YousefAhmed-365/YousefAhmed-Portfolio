import React, { useRef } from 'react'
import InfoCard from './InfoCard'


const aboutCards = [
    {
        title: "Web & Software Developer",
        content: "I’m an entry level fullstack (MERN) developer and a self-taught C/C++ programmar. My skills are mainly in problem solving. I also love exploring different fields of programming like game development and low-level assembly.",
        info: ["Languages: HTML5, CSS3, JS, TypeScript, PHP, C/C++, Python", "Frameworks & Libs: ReactJS, BootstrapCSS, TailwindCSS, NodeJS, ExpressJS, Laravel, SFML, TKinter", "Tools: Git, Github, VSCode, XAMPP, IntelliJ IDEA, PyCharm, CMake, GNU/Linux, CMake"],
        useDefaultStyle: true
    },
    {
        title: "Artist",
        content: "I’m a beginner artist who specializes in digital, pixel, vector, and 3D art.",
        info: ["Tools: Krita, GIMP, Inkscape, Blender, Aseprite"],
        useDefaultStyle: false
    },
    {
        title: "Game Developer",
        content: "I love to develop games and learn about game design just for fun... :)",
        info: ["Tools: Godot (GDSscript), SFML (C/C++)"],
        useDefaultStyle: true
    }
]

export default function AboutSection() {

    return (
        <section id='about-section' className='d-flex flex-column align-items-center'>
            <h1>About</h1>
            <hr />
            <div className='d-flex flex-column w-100'>
                {aboutCards && aboutCards.map((data, index) => {
                    return (
                        <InfoCard key={index} title={data.title} content={data.content} info={data.info} useDefaultStyle={data.useDefaultStyle} />
                    )
                })}
            </div>
            <span className='mt-5'></span>
            <hr />
        </section>
    )
}
