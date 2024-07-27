import { useRef } from 'react';
import PropTypes from 'prop-types';
import useAnimateInScroll from '../hooks/useAnimateInScroll';
import anime from 'animejs';

export default function InfoCard({title, content, info, useDefaultStyle, component, css}){
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
        <div ref={selfRef} className='sp-card-group position-relative sp-scroll-hidden'>
            {useDefaultStyle == true? (<div className='sp-back-card-blue' style={{left: "-16px", top: "-16px"}}></div>) : (<div className='sp-back-card-red' style={{right: "-16px", top: "-16px"}}></div>)}
            <div className={"sp-card-default sp-card-info mb-5 " + (!useDefaultStyle && "align-self-end")} style={css && css}>
                {component && component}
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
    title: PropTypes.string,
    content: PropTypes.string,
    info: PropTypes.array,
    useDefaultStyle: PropTypes.bool,
    component: PropTypes.element,
    css: PropTypes.object
};