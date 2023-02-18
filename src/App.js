import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';

function App() {
    return (
        <div className="App">
            {/* navbar element */}
            <Nav />
            {/* hero image with content */}
            <Hero />
            {/* description text -> more about us(show the Team?) */}
            <Description />
            {/* distinct action -> 
            only two random posts / latest posts or more posts? 
            */}
            {/* about us section -> cta for contact */}
            {/* our partners with differnt partners */}
            {/* footer */}
        </div>
    );
}

export default App;
