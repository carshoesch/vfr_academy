import React from 'react'
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import OurActions from '../../components/OurActions/OurActions';
import AboutUs from '../../components/AboutUs/AboutUs';
import OurPartners from '../../components/OurPartners/OurPartners';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';

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
            {/* contact form */}
            <Contact />
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Home