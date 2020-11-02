import React from 'react';

function OurTeamSection() {
    return (
        <section className='section-padding team-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 offset-lg-3'>
                        <h2 className='section-title text-center'>
                            The Team Behind Success
                        </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='single-team-member'>
                            <div className='member-img'>
                                <img
                                    src='./images/driver-1.jpg'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <div className='member-info'>
                                <h4 className='member-name'>John Doe</h4>
                                <p className='theme-color'>
                                    Co-Founder and CEO
                                </p>
                                <p>
                                    Duis leo ipsum, consequat sollicitudin enim
                                    id, accumsan condimentum felis. Donec nisl
                                    dolor, malesuada tincidunt ultricies et.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6'>
                        <div className='single-team-member'>
                            <div className='member-img'>
                                <img
                                    src='./images/driver-2.jpg'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <div className='member-info'>
                                <h4 className='member-name'>John Doe</h4>
                                <p className='theme-color'>
                                    Co-Founder and CEO
                                </p>
                                <p>
                                    Duis leo ipsum, consequat sollicitudin enim
                                    id, accumsan condimentum felis. Donec nisl
                                    dolor, malesuada tincidunt ultricies et.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 offset-lg-0 col-sm-6 offset-sm-3'>
                        <div className='single-team-member'>
                            <div className='member-img'>
                                <img
                                    src='./images/driver-3.jpg'
                                    alt='Bipul Poudel'
                                />
                            </div>
                            <div className='member-info'>
                                <h4 className='member-name'>John Doe</h4>
                                <p className='theme-color'>
                                    Co-Founder and CEO
                                </p>
                                <p>
                                    Duis leo ipsum, consequat sollicitudin enim
                                    id, accumsan condimentum felis. Donec nisl
                                    dolor, malesuada tincidunt ultricies et.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurTeamSection;
