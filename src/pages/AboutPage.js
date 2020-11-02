import React from 'react';
import AboutUsDetail from '../components/AboutUsDetail';
import CounterSection from '../components/CounterSection';
import HowItWork from '../components/HowItWork';
import OurTeamSection from '../components/OurTeamSection';

function AboutPage() {
    return (
        <>
            <AboutUsDetail />
            <CounterSection />
            <HowItWork />
            <OurTeamSection />
        </>
    );
}

export default AboutPage;
