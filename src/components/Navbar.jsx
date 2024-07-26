import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md d-flex justify-content-center">
            <div className="">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                        <li className="nav-item p-sm-2 p-md-0 mt-sm-2 mt-md-0">
                            <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item p-sm-2 p-md-0">
                            <Link className="nav-link" to='#'>About</Link>
                        </li>
                        <li className="nav-item p-sm-2 p-md-0">
                            <Link className="nav-link" to='#'>Projects</Link>
                        </li>
                        <li className="nav-item p-sm-2 p-md-0">
                            <Link className="nav-link" to='#'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
