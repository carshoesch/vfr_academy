import { Routes, Route } from "react-router-dom";

import Nav from './components/nav/Nav';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Impressum from './pages/impressum/Impressum';
import Privacy from './pages/privacy/Privacy';
import Team from './pages/team/Team';

function App() {
    return (
        <div className="App">
            {/* navbar element */}
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/team" element={<Team />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/impressum" element={<Impressum />} />
                <Route exact path="/datenschutz" element={<Privacy />} />
                <Route exact path="/classes/:classId" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
