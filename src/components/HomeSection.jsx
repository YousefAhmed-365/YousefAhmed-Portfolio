import React from 'react'
import ShishuImage from "../assets/shishu.webp"
import ResumePDF from "../assets/resume.pdf"

import { useRef, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import anime from "animejs/lib/anime.es.js"

import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import FileDownload from "@mui/icons-material/FileDownload";

import { animate_hoverEffectEnter, animate_hoverEffectLeave } from './animations';
import { Opacity } from '@mui/icons-material';

export default function HomeSection() {
    const ani_0 = useRef(null)
    const ani_1 = useRef(null)
    const ani_2 = useRef(null)

    function animate_landingPageSection() {
        anime.set(ani_0.current, { scale: 0 })
        anime.set(ani_1.current, { translateX: "-50%", opacity: 0 })
        anime.set(ani_2.current, { translateX: "50%", opacity: 0 })

        anime({
            targets: ani_0.current,
            scale: "1",
            easing: 'easeOutElastic',
            delay: 100,
            duration: 1000
        })

        anime({
            targets: [ani_1.current, ani_2.current],
            translateX: "0%",
            opacity: 1,
            easing: 'easeOutQuad',
            delay: 150,
            duration: 300,
        })
    }

    useEffect(() => {
        animate_landingPageSection()
    }, [])

    return (
        <section className='d-flex flex-column justify-content-center align-items-center'>
            <hr />
            <div id="sp-home-card" className='position-relative w-100'>
                <div className='sp-back-card-red' style={{ left: "-16px", bottom: "-16px" }} ref={ani_1}></div>
                <div className='sp-back-card-blue' style={{ right: "-16px", top: "-16px" }} ref={ani_2}></div>
                <div id='sp-home-card-section' className='sp-card-default d-flex flex-column'>
                    <div>
                        <img id='sp-home-card-image' src={ShishuImage} alt="shishu_image.webp" ref={ani_0} />
                        <h1 className='mb-0'>{"Hello! I'm Yousef"}</h1>
                        <p className='mb-3'>A Software Developer and an Artist</p>
                        <div className='sp-link-normal'>
                            <LinkedIn className='sp-simple-icon me-1' />
                            <a href="https://www.linkedin.com/in/yousef-ahmed-3a9a572a4/" target='_blank' style={{ verticalAlign: "middle" }}>LinkedIn</a>
                        </div>
                        <div className='sp-link-normal'>
                            <GitHub className='sp-simple-icon me-1' />
                            <a href="https://github.com/YousefAhmed-365" target='_blank' style={{ verticalAlign: "middle" }}>Github</a>
                        </div>
                    </div>
                    <div className='flex-grow-1'></div>
                    <div className='sp-button-group d-flex gap-3 z-1'>
                        <HashLink id='contact-button' className='sp-link-button sp-button centered-link' to='/#contact-section' style={{ pointerEvents: "auto" }} onMouseEnter={animate_hoverEffectEnter} onMouseLeave={animate_hoverEffectLeave} onTouchStart={animate_hoverEffectEnter} onTouchEnd={animate_hoverEffectLeave}>
                            <span style={{ fontSize: "1.5rem", verticalAlign: "middle", userSelect: "none" }}>Contact</span>
                        </HashLink>
                        <a id='resume-button' className='sp-link-button sp-button-outline' href={ResumePDF} target='_blank' style={{ display: "inline-block", pointerEvents: "auto" }} onMouseEnter={animate_hoverEffectEnter} onMouseLeave={animate_hoverEffectLeave} onTouchStart={animate_hoverEffectEnter} onTouchEnd={animate_hoverEffectLeave}>
                            <span>
                                <FileDownload className='sp-simple-icon' style={{ transition: "none" }} />
                                <span style={{ fontSize: "1.5rem", verticalAlign: "middle" }}>Resume</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}
