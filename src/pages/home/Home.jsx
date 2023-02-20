import React from 'react'
import Hero from '../../components/hero/Hero';
import Description from '../../components/Description/Description';
import OurActions from '../../components/ourActions/OurActions';
import AboutUs from '../../components/aboutUs/AboutUs';
import OurPartners from '../../components/ourPartners/OurPartners';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            {/* hero image with content */}
            <Hero />
            {/* description text -> more about us(show the Team?) */}
            <Description />
            {/* distinct action -> four latest posts? */}
            <OurActions />
            {/* about us section -> cta for contact */}
            <AboutUs />
            {/* our partners with differnt partners */}
            <OurPartners />
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home