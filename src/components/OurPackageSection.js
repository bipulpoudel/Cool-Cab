import React from 'react'

function OurPackageSection() {
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
                    <h2>Our packages</h2>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="section-padding our-pakages-section">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                <h2 className="section-title text-center">Our Packages</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                <div className="single-package-item text-center">
                    <div className="package-icon">
                    <span className="icon-wrapper">
                        <img src="./images/icon/package-icon.png" alt="icon" />
                    </span>
                    </div>
                    <div className="package-details">
                    <h4 className="section-title text-center">Prime</h4>
                    <h2 className="package-price">
                        $599
                        <span>/24hour</span>
                    </h2>
                    <ul>
                        <li>City trave Prime</li>
                        <li>Ac Vehicle</li>
                        <li>Your Choice 3 Tourism </li>
                        <li>Places</li>
                        <li>Tourist Guide</li>
                        <li>Quality Vehicle</li>
                    </ul>
                    <a href="/" className="button button-dark tiny">Get Now</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6">
                <div className="single-package-item text-center">
                    <div className="package-icon">
                    <span className="icon-wrapper">
                        <img src="./images/icon/package-icon.png" alt="icon" />
                    </span>
                    </div>
                    <div className="package-details">
                    <h4 className="section-title text-center">Superior</h4>
                    <h2 className="package-price">
                        $1399
                        <span>/24hour</span>
                    </h2>
                    <ul>              
                        <li>Any Location Under 400 Km</li>
                        <li>Ac Vehicle</li>
                        <li>Your Choice 3 Tourism </li>
                        <li>Places</li>
                        <li>Tourist Guide</li>
                        <li>Quality Vehicle</li>
                    </ul>
                    <a href="/" className="button button-dark tiny">Get Now</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3">
                <div className="single-package-item text-center">
                    <div className="package-icon">
                    <span className="icon-wrapper">
                        <img src="./images/icon/package-icon.png" alt="icon" />
                    </span>
                    </div>
                    <div className="package-details">
                    <h4 className="section-title text-center">Prime</h4>
                    <h2 className="package-price">
                        $2599
                        <span>/24hour</span>
                    </h2>
                    <ul>
                        <li>City trave Prime</li>
                        <li>Ac Vehicle</li>
                        <li>Your Choice 3 Tourism </li>
                        <li>Places</li>
                        <li>Tourist Guide</li>
                        <li>Quality Vehicle</li>
                    </ul>
                    <a href="/" className="button button-dark tiny">Get Now</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default OurPackageSection
