import React from 'react';

function SignUpPage() {
    return (
        <div className='striped-bg theme-3'>
            <header className='theme-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <div className='logo'>
                                <a href='index.html'>
                                    <img
                                        src='./images/logo-main.png'
                                        alt='logo'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className='section-padding p-t-200 signup-section user-access-bg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 offset-lg-3 text-center'>
                            <h2>Register to get started</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 offset-lg-3'>
                            <div className='account-access sign-up'>
                                <div className='tab-content'>
                                    <div
                                        role='tabpanel'
                                        className='tab-pane active'
                                        id='rider'
                                    >
                                        <form className='user-access-form'>
                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className='form-group'>
                                                        <input
                                                            type='email'
                                                            className='form-control'
                                                            id='exampleInputEmail1'
                                                            aria-describedby='emailHelp'
                                                            placeholder='First Name'
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='form-group'>
                                                        <input
                                                            type='email'
                                                            className='form-control'
                                                            id='exampleInputEmail1'
                                                            aria-describedby='emailHelp'
                                                            placeholder='Last Name'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    type='phone'
                                                    className='form-control'
                                                    id='exampleInputphone'
                                                    placeholder='Phone number'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    type='email'
                                                    className='form-control'
                                                    id='exampleInputPassword1'
                                                    placeholder='Email'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    id='exampleInputPassword1'
                                                    placeholder='Password'
                                                />
                                            </div>
                                            <button
                                                type='submit'
                                                className='button button-dark btn-block'
                                            >
                                                Sign in Now
                                            </button>
                                        </form>
                                        <p className='acclink'>
                                            Already have an account?
                                            <a href='sign-in.html'>
                                                Sign in
                                                <i className='icofont'>
                                                    double_right
                                                </i>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='theme-2'>
                <section className='footer-nav-section section-padding theme-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <div className='footer-brand'>
                                    <a href='index.html'>
                                        <img
                                            src='./images/logo.png'
                                            alt='logo'
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <ul className='social-nav'>
                                    <li>
                                        <a href='/#' className='facebook'>
                                            <i className='fab fa-facebook-f' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='twitter'>
                                            <i className='fab fa-twitter' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='instagram'>
                                            <i className='fab fa-instagram' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='google-p'>
                                            <i className='fab fa-google-plus-g' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='linkedin'>
                                            <i className='fab fa-linkedin-in' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/#' className='pinterest'>
                                            <i className='fab fa-pinterest-p' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-lg-3'>
                                <div className='app-download-box'>
                                    <a href='/#'>
                                        <img
                                            src='./images/icon/google-play.jpg'
                                            alt='Google play'
                                        />
                                    </a>
                                    <a href='/#'>
                                        <img
                                            src='./images/icon/apple-store.jpg'
                                            alt='Apple store'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='copyright-section theme-2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <p>
                                    © Copyright 2018 by Tortoiz. All Right
                                    Reserved.
                                </p>
                            </div>
                            <div className='col-lg-6'>
                                <ul className='social-nav'>
                                    <li>
                                        <a href='/#'>Privecy</a>
                                    </li>
                                    <li>
                                        <a href='/#'>Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default SignUpPage;
