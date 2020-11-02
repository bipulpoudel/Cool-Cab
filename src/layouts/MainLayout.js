import React from 'react';
import AppSection from '../components/AppSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <AppSection />
            <Footer />
        </>
    );
}

export default MainLayout;
