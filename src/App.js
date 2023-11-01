import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';
import Nav from './components/Nav/Nav';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Impressum from './pages/impressum/Impressum';
import Privacy from './pages/privacy/Privacy';
import Team from './pages/team/Team';
import Footer from './components/Footer/Footer';
import OurPartners from './components/OurPartners/OurPartners';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function App() {
    const [oldVersion, setOldVersion] = useState('1.0.1');
    const [newVersion, setNewVersion] = useState('');
    const [showVersionPopup, setShowVersionPopup] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Fetch or import the current version from the server or a file
        const stuff = require('../package.json').version;
        setNewVersion(stuff);
        console.log('newVersion', newVersion);
        console.log('oldVersion', oldVersion);
        if (newVersion !== oldVersion) {
            // Check if the popup has been shown before
            const popupShownBefore = localStorage.getItem('popupShown');
            if (!popupShownBefore) {
                setShowVersionPopup(true);

                // Set a flag in localStorage to indicate the popup has been shown
                localStorage.setItem('popupShown', 'true');
            }
        }
    }, [newVersion]);

    const closeVersionPopup = () => {
        setShowVersionPopup(false);
    };

    useEffect(() => {
        console.log('showVersionPopup', showVersionPopup);
    }, [showVersionPopup]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '80%',
            backgroundColor: '#212529',
        },
    };

    return (
        <div className='App'>
            {/* version popup element */}
            {showVersionPopup && (
                <Modal
                    isOpen={showVersionPopup}
                    onRequestClose={closeVersionPopup}
                    style={customStyles}
                    contentLabel='Example Modal'
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <div>
                            <h2>Update log</h2>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <span
                                    style={{ color: 'red', marginTop: '24px' }}
                                >
                                    Version: {newVersion}
                                </span>
                                <span>Hier ist stuff passiert</span>
                            </div>
                        </div>
                        <button
                            style={{ marginTop: 'auto', width: '20%' }}
                            onClick={closeVersionPopup}
                        >
                            close
                        </button>
                    </div>
                </Modal>
            )}

            {/* navbar element */}
            <Nav />
            {/* all routes element */}
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/team' element={<Team />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/impressum' element={<Impressum />} />
                <Route exact path='/datenschutz' element={<Privacy />} />
                <Route exact path='/classes/:classId' element={<Detail />} />
            </Routes>
            <OurPartners />
            <Footer />
        </div>
    );
}
export default App;
