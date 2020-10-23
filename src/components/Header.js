import React from 'react';

import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="theme-1">
        <section className="header__upper">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="header__upper--left">
                    <div className="logo">
                    <a href="index.html"><img src="./images/logo-main.png" alt="Logo" /></a>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="header__upper--right">
                    <nav className="navigation">
                    <ul>
                        <li><a href="ride-with-cabgo.html">Ride</a></li>
                        <li><a href="my-driver-dashboard.html">Drive</a></li>
                        <li><a href="contact-us.html">Help</a></li>
                        <li><a href="sign-in.html">Sign in</a></li>
                    </ul>
                    </nav>
                    <a href="ride-with-cabgo.html" className="button button-dark">Ride with cabgo</a>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="header__lower">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="index.html"><i className="fas fa-home" />Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="about.html"><i className="fas fa-exclamation-circle" />About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="our-services.html"><i className="fas fa-taxi" />Our Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="our-vehicles.html"><i className="fas fa-taxi" />Our Vehicles</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="packages.html"><i className="fas fa-cube" />Packages</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="contact-us.html"><i className="fas fa-map-marker-alt" />Contacts</a>
                        </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                        <a href="sign-up.html" className="button button-light">Become a Driver</a>
                    </div>
                    </div>
                </nav>
                </div>
            </div>
            </div>
        </section>
        </header>

    )
}

export default Header
