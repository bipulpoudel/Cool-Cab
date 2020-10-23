import React from 'react'

function HeroSection() {
    return (
        <section className="hero-area">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <div id="hero-area-slider" className="hero-area-slider owl-carousel">
                <div className="single-slider-item">
                    <div className="hero-area-left">
                    <h1>Earn. Connect. Contribute to Socity</h1>
                    <p>Partner with us to drive your own livelihood and more.</p>
                    <a href="signup.html" className="button button-dark big">Sign up Now</a>
                    </div>
                    <div className="hero-area-right">
                    <img src="./images/home/1.png" alt="home1" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection
