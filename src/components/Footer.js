import React from 'react'

function Footer() {
    return (
        <>
        <footer className="footer-section theme-1">
            <section className="footer-nav-section section-padding theme-1">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                    <div className="footer-brand">
                        <a href="index.html"><img src="./images/logo.png" alt="Logo" /></a>
                    </div>
                    <div className="footer-text">
                        <p>Nulla justo neque, tincidunt id bibendum a, rhoncus et eros. Vestibulum commodo diam ut risus pulvinar consequat vitae a dui. Vivamus sed molestie diam. Maecenas vitae enim lacus.</p>
                    </div>
                    <div className="helpline">
                        <h4>Toll Free <span>Helpline</span></h4>
                        <p>(+1) 123 4567 890</p>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <h4>Useful Links</h4>
                    <nav className="footer-navigation">
                        <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        </ul>
                        <ul>
                        <li><a href="ride-with-cabgo.html">Ride</a></li>
                        <li><a href="my-driver-dashboard.html">Drive</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <h4>Head Office</h4>
                    <address className="company-address">
                        <p className="m-b-20">15 Street No, Ox Building, Near Station, 1356. </p>
                        <p className="m-b-8">Phone Numver : (+1) 123 4567 890</p>
                        <p className="m-b-8">Email Address : Cabgo@gmail.com</p>
                        <p className="m-b-8">Fax : Service@cabgo.com</p>
                    </address>
                    </div>
                </div>
                </div>
            </section>
            <section className="copyright-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <p>© Copyright 2018 by Tortoiz. All Right Reserved.</p>
                    </div>
                    <div className="col-lg-6">
                    <ul className="social-nav">
                        <li><a href="/" className="facebook"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="/" className="twitter"><i className="fab fa-twitter" /></a></li>
                        <li><a href="/" className="instagram"><i className="fab fa-instagram" /></a></li>
                        <li><a href="/" className="google-p"><i className="fab fa-google-plus-g" /></a></li>
                        <li><a href="/" className="linkedin"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="/" className="pinterest"><i className="fab fa-pinterest-p" /></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            </footer>
        </>
    )
}

export default Footer
