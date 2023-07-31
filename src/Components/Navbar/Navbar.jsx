import React from 'react'
import logo from '../../Assets/logo.png'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
            <div className="container-fluid">
                <img src={logo} alt="Coursify" width={120} height={30} className='me-3' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link py-3 px-3" href="/">Hire people</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 px-3" href="/">Find jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 px-3" href="/">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3 px-3" href='/'>Refer & earn</a>
                        </li>
                    </ul>
                    <div className="d-flex" style={{ gap: 10 }}>
                        <button className="login-btn-nav" type="button"><a href='/'>Login</a></button>
                        <button className="signup-btn-nav" type="button"><a href='/'>Signup</a></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar