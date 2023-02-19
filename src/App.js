import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import OurActions from './components/OurActions/OurActions';
import AboutUs from './components/AboutUs/AboutUs';
import OurPartners from './components/OurPartners/OurPartners';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            {/* navbar element */}
            <Nav />
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
    );
}

export default App;
