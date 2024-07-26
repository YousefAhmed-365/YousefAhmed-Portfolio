import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundSection() {
    return (
        <section id='not-found-section' className='text-center' style={{margin:"128px 0px"}}>
            <h1>404</h1>
            <p>Page Not Found. Return <Link to='/'>Home</Link>?</p>
        </section>
    )
}
