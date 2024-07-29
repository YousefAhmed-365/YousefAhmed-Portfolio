import PropTypes from 'prop-types';

import useAnimateInScroll from '../hooks/useAnimateInScroll';
import { animate_hoverEffectEnter, animate_hoverEffectLeave } from './animations';
import { useRef } from 'react';
import anime from 'animejs';

export function ProjectCard({ title, content, component, tags, links, useDefaultStyle }) {
    const selfRef = useRef(null)

    useAnimateInScroll(selfRef, (e) => {
        anime({
            targets: e.target,
            opacity: 1,
            translateY: "0%",
            easing: 'easeOutQuad',
            delay: 100,
            duration: 200,
        })
    })

    return (
        <div ref={selfRef} className='position-relative' style={{ opacity: 0, transform: 'translateY(50%)' }}>
            {useDefaultStyle == true ? (<div className='sp-back-card-blue' style={{ height: '30px', top: '-16px' }}></div>) : (<div className='sp-back-card-red' style={{ height: '30px', top: '-16px', right: '0px' }}></div>)}
            <div className='sp-card-default' style={{ minHeight: '100px', fontFamily: 'Helvetica' }}>
                <h1>{title}</h1>
                <p>{content}</p>
                {component && component}
                {<div className='d-flex flex-wrap mt-3 gap-2'>{
                    tags && tags.map((data, index) => {
                        return (
                            <div key={index} className='sp-card-info-mini py-2' style={{ width: "fit-content"}}>
                                {data}
                            </div>
                        )
                    })
                }</div>}
                <div className='mt-3 d-flex flex-row justify-content-end'>
                    {links && links.map((data, index) => {
                        return (
                            <a key={index} id='resume-button' className='sp-link-button sp-button-outline' href={data.link} target='_blank' style={{ display: 'inline-block', pointerEvents: 'auto' }} onMouseEnter={animate_hoverEffectEnter} onMouseLeave={animate_hoverEffectLeave} onTouchStart={animate_hoverEffectEnter} onTouchEnd={animate_hoverEffectLeave}>
                                {data.icon && data.icon}
                                <span className='ms-1' style={{ fontSize: '1.5rem', verticalAlign: 'middle' }}>{data.title}</span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    links: PropTypes.array,
    tags: PropTypes.array,
    useDefaultStyle: PropTypes.bool,
    component: PropTypes.element,
}