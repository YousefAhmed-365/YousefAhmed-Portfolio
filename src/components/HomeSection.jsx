import React from 'react'
import ShishuImage from "../assets/shishu.png"
import ResumePDF from "../assets/resume.pdf"

import { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js"

import {
    FileDownloadSVGIcon,
} from "@react-md/material-icons"

export default function HomeSection() {
    const ani_0 = useRef(null)
    const ani_1 = useRef(null)
    const ani_2 = useRef(null)

    function animate_landingPageSection(){
        anime.set(ani_0.current, {scale: 0.5})
        anime.set(ani_1.current, {translateX: "-50%"})
        anime.set(ani_2.current, {translateX: "50%"})

        anime({
            targets: ani_0.current,
            scale: "1",
            easing: 'easeOutElastic',
            delay: 100,
            duration: 1000,
        })

        anime({
            targets: ani_1.current,
            translateX: "0%",
            easing: 'easeOutElastic',
            delay: 150,
            duration: 500,
        })

        anime({
            targets: ani_2.current,
            translateX: "0%",
            easing: 'easeOutElastic',
            delay: 150,
            duration: 500,
        })
    }

    function animate_hoverEffectEnter(element){
        anime({
            targets: element.currentTarget,
            rotate: -3,
            duration: 300,
            easing: "easeOutElastic"
        })
    }

    function animate_hoverEffectLeave(element){
        anime({
            targets: element.currentTarget,
            rotate: 0,
            duration: 300,
            easing: "easeOutElastic"
        })
    }

    useEffect(() => {
        animate_landingPageSection()
    }, [])

    return (
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <hr/>
            <div className='sp-card-default sp-home-card-section'>
                <div className='sp-back-card-red' ref={ani_1}></div>
                <div className='sp-back-card-blue' ref={ani_2}></div>
                <img className='sp-home-card-image' src={ShishuImage} alt="" ref={ani_0}/>
                <h1>{"Hello! I'm Yousef"}</h1>
                <p>A Software Developer and an Artist</p>
                <div className='sp-home-btn-group d-flex gap-3'>
                    <button className='sp-button' onMouseOver={animate_hoverEffectEnter} onMouseOut={animate_hoverEffectLeave}>About</button>
                    <a className='sp-link-button sp-button-outline' href={ResumePDF} target='_blank' style={{display: "inline-block", pointerEvents: "auto"}} onMouseOver={animate_hoverEffectEnter} onMouseOut={animate_hoverEffectLeave}>
                        <div>
                            <FileDownloadSVGIcon style={{width:"30px", height:"30px"}}/>
                            <span style={{fontSize: "1.5rem", verticalAlign: "middle"}}>Resume</span>
                        </div>
                    </a>
                </div>
            </div>
            <hr/>
        </section>
    )
}
