import React from 'react'

function ServicePage() {
    return (
        <>
        <section className="breadcrumb-section">
                <div className="container">
                <div className="row">
                    <div className="col-6">
                    <ol className="breadcrumb">
                        <li><a href="/">Ride with Cabgo</a></li>
                    </ol>
                    </div>
                    <div className="col-6">
                    <div className="text-right">
                        <h2>Our services</h2>
                    </div>
                    </div>
                </div>
                </div>
        </section>
        <section className="section-padding our-service-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                    <h2 className="section-title text-center">Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                    <div className="single-service-item">
                        <img className="service-icon" src="./images/icon/service-icon-1.png" alt="service icon" />
                        <h4>Taxi</h4>
                        <p>Aenean dictum odio sit amet congue semper. In laoreet metus nec dolor ullamcorper, ut iaculis risus scelerisque. </p>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="single-service-item">
                        <img className="service-icon" src="./images/icon/service-icon-2.png" alt="service icon" />
                        <h4>Car Book</h4>
                        <p>Aenean dictum odio sit amet congue semper. In laoreet metus nec dolor ullamcorper, ut iaculis risus scelerisque. </p>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="single-service-item">
                        <img className="service-icon" src="./images/icon/service-icon-3.png" alt="service icon" />
                        <h4>Share</h4>
                        <p>Aenean dictum odio sit amet congue semper. In laoreet metus nec dolor ullamcorper, ut iaculis risus scelerisque. </p>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="single-service-item">
                        <img className="service-icon" src="./images/icon/service-icon-4.png" alt="service icon" />
                        <h4>Rental</h4>
                        <p>Aenean dictum odio sit amet congue semper. In laoreet metus nec dolor ullamcorper, ut iaculis risus scelerisque. </p>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="single-service-item">
                        <img className="service-icon" src="./images/icon/service-icon-5.png" alt="service icon" />
                        <h4>Food</h4>
                        <p>Aenean dictum odio sit amet congue semper. In laoreet metus nec dolor ullamcorper, ut iaculis risus scelerisque. </p>
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="single-service-item">
                        <img className="service-icon" src="./images/icon/service-icon-6.png" alt="service icon" />
                        <h4>Airport Transfer</h4>
                        <p>Aenean dictum odio sit amet congue semper. In laoreet metus nec dolor ullamcorper, ut iaculis risus scelerisque. </p>
                    </div>
                    </div>
                </div>
                </div>
    </section>
    </>
    )
}

export default ServicePage
