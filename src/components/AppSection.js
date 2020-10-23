import React from 'react'

function AppSection() {
    return (
        <>
    <section className="download-section section-padding p-b-0">
        <div className="container">
            <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <h2 className="section-title text-center">Download CabGo</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-5">
                <div className="download-qrcode">
                <img src="./images/qr.png" alt="phone" />
                </div>
            </div>
            <div className="col-lg-7">
                <div className="download-text">
                <h2>Download the cabgo mobile application</h2>
                <p>Nunc volutpat tincidunt est a scelerisque. Aliquam erat volutpat. Donec varius ex in justo pharetra, nec mollis erat porta. Donec sit amet facilisis neque. In hac habitasse platea dictumst.</p>
                </div>
                <div className="download-buttons">
                <a href="/"><img src="./images/download-1.png" alt="playstore" /></a>
                <a href="/"><img src="./images/download-2.png" alt="appstore" /></a>
                </div>
            </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AppSection
