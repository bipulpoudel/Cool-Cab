import React from 'react';

function HowItWork() {
    return (
        <section className='section-padding how-work-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <h2 className='section-title text-center'>
                            How It Work
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 d-none d-lg-block'>
                        <div className='icons-section'>
                            <div className='single-icon'>
                                <img src='./images/icon/1.png' alt='Icon1' />
                            </div>
                            <div className='single-icon'>
                                <img src='./images/icon/2.png' alt='Icon2' />
                            </div>
                            <div className='single-icon'>
                                <img src='./images/icon/3.png' alt='Icon3' />
                            </div>
                            <div className='single-icon'>
                                <img src='./images/icon/4.png' alt='Icon4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='single-icon text-center m-b-10 d-block d-lg-none'>
                            <img src='./images/icon/1.png' alt='Icon5' />
                        </div>
                        <div className='how-work-text'>
                            <h4>Book in Just 2 Tabs</h4>
                            <p>
                                Curabitur ac quam aliquam urna vehicula semper
                                sed vel elit. Sed et leo purus. Vivamus vitae
                                sapien.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='single-icon text-center m-b-10 d-block d-lg-none'>
                            <img src='./images/icon/2.png' alt='Icon6' />
                        </div>
                        <div className='how-work-text'>
                            <h4>Get a Driver</h4>
                            <p>
                                Curabitur ac quam aliquam urna vehicula semper
                                sed vel elit. Sed et leo purus. Vivamus vitae
                                sapien.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='single-icon text-center m-b-10 d-block d-lg-none'>
                            <img src='./images/icon/3.png' alt='Icon7' />
                        </div>
                        <div className='how-work-text'>
                            <h4>Track your Driver</h4>
                            <p>
                                Curabitur ac quam aliquam urna vehicula semper
                                sed vel elit. Sed et leo purus. Vivamus vitae
                                sapien.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                        <div className='single-icon text-center m-b-10 d-block d-lg-none'>
                            <img src='./images/icon/4.png' alt='Icon8' />
                        </div>
                        <div className='how-work-text'>
                            <h4>Arrive safely</h4>
                            <p>
                                Curabitur ac quam aliquam urna vehicula semper
                                sed vel elit. Sed et leo purus. Vivamus vitae
                                sapien.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWork;
