import React from 'react';

function TestimonialSection() {
    return (
        <section className='section-padding testimonial-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <h2 className='section-title text-center'>
                            What about passanger says
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div
                            id='testimonial-carousel-1'
                            className='testimonial-carousel owl-carousel'
                        >
                            <div className='single-testimonial-item text-center'>
                                <img
                                    src='./images/client-1.png'
                                    alt='Client3'
                                    className='client-img'
                                />
                                <p className='testimonial-text'>
                                    Quisque venenatis sit amet libero vel
                                    laoreet. Maecenas et eros a metus vestibulum
                                    rhoncus. Aenean varius tincidunt libero at
                                    egestas. Aliquam eget interdum enim. Nulla
                                    malesuada dolor at turpis blandit sagittis.{' '}
                                </p>
                                <h4 className='client-name'>John Doe</h4>
                                <p className='theme-color'>Passanger</p>
                            </div>
                            <div className='single-testimonial-item text-center'>
                                <img
                                    src='./images/client-1.png'
                                    alt='Client2'
                                    className='client-img'
                                />
                                <p className='testimonial-text'>
                                    Quisque venenatis sit amet libero vel
                                    laoreet. Maecenas et eros a metus vestibulum
                                    rhoncus. Aenean varius tincidunt libero at
                                    egestas. Aliquam eget interdum enim. Nulla
                                    malesuada dolor at turpis blandit sagittis.{' '}
                                </p>
                                <h4 className='client-name'>John Doe</h4>
                                <p className='theme-color'>Passanger</p>
                            </div>
                            <div className='single-testimonial-item text-center'>
                                <img
                                    src='./images/client-1.png'
                                    alt='client1'
                                    className='client-img'
                                />
                                <p className='testimonial-text'>
                                    Quisque venenatis sit amet libero vel
                                    laoreet. Maecenas et eros a metus vestibulum
                                    rhoncus. Aenean varius tincidunt libero at
                                    egestas. Aliquam eget interdum enim. Nulla
                                    malesuada dolor at turpis blandit sagittis.{' '}
                                </p>
                                <h4 className='client-name'>John Doe</h4>
                                <p className='theme-color'>Passanger</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;
