import React from 'react';

//Import of Component
import AboutUsSection from '../components/AboutUsSection';
import HeroSection from '../components/HeroSection';
import HowItWork from '../components/HowItWork';
import TestimonialSection from '../components/TestimonialSection';

function HomePage() {
    return (
        <>
            <HeroSection />
            <HowItWork />
            <AboutUsSection />
            <TestimonialSection />
        </>
    );
}

export default HomePage;
