import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='theme-1'>
            <section className='header__upper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='header__upper--left'>
                                <div className='logo'>
                                    <a href='index.html'>
                                        <img
                                            src='./images/logo-main.png'
                                            alt='Logo'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='header__upper--right'>
                                <a
                                    href='ride-with-cabgo.html'
                                    className='button button-dark'
                                >
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='header__lower'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <nav className='navbar navbar-expand-lg navbar-light'>
                                <button
                                    className='navbar-toggler'
                                    type='button'
                                    data-toggle='collapse'
                                    data-target='#navbarSupportedContent'
                                    aria-controls='navbarSupportedContent'
                                    aria-expanded='false'
                                    aria-label='Toggle navigation'
                                >
                                    <span className='navbar-toggler-icon' />
                                </button>
                                <div
                                    className='collapse navbar-collapse'
                                    id='navbarSupportedContent'
                                >
                                    <ul className='navbar-nav mr-auto'>
                                        <li className='nav-item'>
                                            <Link to='/'>
                                                <a
                                                    className='nav-link'
                                                    href='#/'
                                                >
                                                    <i className='fas fa-home' />
                                                    Home{' '}
                                                    <span className='sr-only'>
                                                        (current)
                                                    </span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to='/about'>
                                                <a
                                                    className='nav-link'
                                                    href='#/'
                                                >
                                                    <i className='fas fa-exclamation-circle' />
                                                    About
                                                </a>
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to='/services'>
                                                <a
                                                    className='nav-link'
                                                    href='our-services.html'
                                                >
                                                    <i className='fas fa-taxi' />
                                                    Our Services
                                                </a>
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link to='/packages'>
                                                <a
                                                    className='nav-link'
                                                    href='packages.html'
                                                >
                                                    <i className='fas fa-cube' />
                                                    Packages
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className='my-2 my-lg-0'>
                                        <a
                                            href='sign-up.html'
                                            className='button button-light'
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
