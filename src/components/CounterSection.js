import React from 'react';

function CounterSection() {
    return (
        <section className='section-padding counter-area'>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-md-3 col-6'>
                        <div className='single-counter'>
                            <div className='counter-icon'>
                                <img
                                    src='./images/icon/counter-icon-1.png'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <h2>
                                <span className='counter'>7,50,000</span>
                            </h2>
                            <p className='counter-text'>Vehicles</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                        <div className='single-counter'>
                            <div className='counter-icon'>
                                <img
                                    src='./images/icon/counter-icon-2.png'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <h2>
                                <span className='counter'>220</span> +
                            </h2>
                            <p className='counter-text'>Cities</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                        <div className='single-counter'>
                            <div className='counter-icon'>
                                <img
                                    src='./images/icon/counter-icon-3.png'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <h2>
                                <span className='counter'>5,50,000</span>
                            </h2>
                            <p className='counter-text'>
                                Entreprenurs Partners
                            </p>
                        </div>
                    </div>
                    <div className='col-md-3 col-6'>
                        <div className='single-counter'>
                            <div className='counter-icon'>
                                <img
                                    src='./images/icon/counter-icon4.png'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <h2>
                                <span className='counter'>75,00,000</span>
                            </h2>
                            <p className='counter-text'>Passengers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CounterSection;
