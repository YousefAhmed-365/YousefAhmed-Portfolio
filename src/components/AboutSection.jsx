import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import useAnimateInScroll from '../hooks/useAnimateInScroll';
import anime from 'animejs';

function InfoCard({title, content, info, useDefaultStyle}){
    const selfRef = useRef(null)
    useAnimateInScroll(selfRef, (e)=>{
        if(useDefaultStyle == true){
            anime.set(e.target, {translateX: "-50%", opacity: 0.0, rotate: "-10deg"})
            anime({
                targets: e.target,
                translateX: "0%",
                opacity: 1,
                delay: 100,
                duration: 700,
                easing: "easeOutElastic",
                rotate: "0deg"
            })
        }else{
            anime.set(e.target, {translateX: "50%", opacity: 0.0, rotate: "10deg"})
            anime({
                targets: e.target,
                translateX: "0%",
                opacity: 1,
                delay: 100,
                duration: 700,
                easing: "easeOutElastic",
                rotate: "0deg"
            })
        }
    })

    return(
        <div ref={selfRef} className='position-relative'>
            {useDefaultStyle == true? (<div className='sp-back-card-blue' style={{left: "-16px", top: "-16px"}}></div>) : (<div className='sp-back-card-red' style={{right: "-16px", top: "-16px"}}></div>)}
            <div className={"sp-card-default sp-card-info mb-5 " + (!useDefaultStyle && "align-self-end")}>
                
                <h1>{title}</h1>
                <p>{content}</p>
                <div>
                    {info && info.map((text, index)=>{
                        return(
                            <div key={index} className='sp-card-info-mini my-3 py-2'>
                                <p>{text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    info: PropTypes.array,
    useDefaultStyle: PropTypes.bool
};


export default function AboutSection() {
    const aboutCards = [
        {
            title: "Web & Software Developer",
            content: "I’m an entry level fullstack (MERN) stack developer and a self-taught C/C++ developer. I love exploring different fields of programming like game development and low-level asm.",
            info: ["Languages: HTML5, CSS3, JS, TypeScript, PHP, C/C++, Python", "Frameworks & Libs: ReactJS, BootstrapCSS, TailwindCSS, NodeJS, ExpressJS, Laravel, SFML, TKinter", "Tools: Git, Github, VSCode, XAMPP, IntelliJ IDEA, PyCharm, CMake, GNU/Linux, CMake"],
            useDefaultStyle: true
        },
        {
            title: "Artist",
            content: "I’m a beginner artist who specializes in digital, pixel, vector, and 3D art.",
            info: ["Tools: Krita, GIMP, Inkscape, Blender, Aseprite"],
            useDefaultStyle: false
        },
    ]

    return (
        <section id='about-section' className='d-flex flex-column align-items-center'>
            <h1>About</h1>
            <hr/>
            <div className='d-flex flex-column w-100'>
                {aboutCards && aboutCards.map((data, index)=>{
                    return (
                        <InfoCard key={index} title={data.title} content={data.content} info={data.info} useDefaultStyle={data.useDefaultStyle}/>
                    )
                })}
            </div>
            <span className='mt-5'></span>
            <hr/>
        </section>
    )
}
