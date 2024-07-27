import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundSection() {
    return (
        <section id='not-found-section' className='text-center' style={{margin:"128px 0px"}}>
            <h1 className='position-relative'>
                <img className='position-absolute' style={{left:"-130px", top: "-70px"}} src='hat_man.webp' alt="hat_man.webp" />
                404
            </h1>
            <p>Page Not Found. Return <Link to='/'>Home</Link>?</p>
        </section>
    )
}
