import React, { useEffect, useRef } from 'react'
import InfoCard from './InfoCard'

import { useState } from 'react';
import { Form } from 'react-bootstrap'
import { animate_hoverEffectEnter, animate_hoverEffectLeave } from './animations'
import { Padding, Widgets } from '@mui/icons-material'
import { useForm, ValidationError } from '@formspree/react'
import anime from 'animejs'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import useAnimateInScroll from '../hooks/useAnimateInScroll'

export default function ContactSection() {
    const [state, handleSubmit] = useForm("xanweqbj")

    const ani_0 = useRef(null)

    useAnimateInScroll(ani_0, (e) => {
        anime.set(e.target, {translateY: "200%", opacity: 0})
        anime({
            targets: e.target,
            delay: 100,
            duration: 200,
            opacity: 1,
            translateY: "0%",
            easing: "easeOutQuad",
        })
    })

    useEffect(() => {

    }, [state])

    return (
        <section id='contact-section' className='d-flex flex-column justify-content-center align-items-center'>
            <h1>Contact</h1>
            <hr />
            <div id='sp-contacts-group' ref={ani_0} className='mb-5 d-flex gap-3 w-100 justify-content-center' style={{ opacity: "0", bottom: "-55px" }}>
                <div><WhatsAppIcon /> <p className='d-inline-block' style={{ verticalAlign: "middle" }}>(+20)1091070251</p></div>
                <div><AlternateEmailIcon /><p className='d-inline-block' style={{ verticalAlign: "middle" }}>YousefAhmed365@outlook.com</p></div>
            </div>
            <InfoCard component={
                <>
                    <Form onSubmit={handleSubmit} className='position-relative'>
                        <Form.Group>
                            <Form.Label htmlFor='email'>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="example@mail.com"
                                required
                            />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                            <Form.Label htmlFor='message'>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="message"
                                placeholder="How's the whether today?..."
                                style={{ resize: "vertical", minHeight: "200px", maxHeight: "300px" }}
                                required
                            />
                        </Form.Group>
                        <div className='mt-3 d-flex justify-content-end'>
                            <button disabled={state.submitting} type="submit" className='sp-button py-3' onMouseOver={animate_hoverEffectEnter} onMouseOut={animate_hoverEffectLeave}>
                                Send
                            </button>
                        </div>
                        {state.succeeded && <p className='text-center text-success pt-3'>E-mail sent</p>}
                        {state.errors && <p className='text-center text-danger pt-3'>~Error~ Something went wrong <br /> Please try again later.</p>}
                    </Form>
                </>
            }
                useDefaultStyle={true}
            />
            <hr />
        </section>
    )
}
