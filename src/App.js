import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Hero from './components/hero';
import Header from './components/ui/header';
import Features from './components/features';
import Contact from './components/contact';
import Footer from './components/ui/footer';
import Separator_b from './components/ui/separator_b';
import Separator_a from './components/ui/separator_a';
import Service from './components/service';
import Notification1 from './components/ui/notification1';
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
  gtmId: 'G-CVMLH83CX7'
}
TagManager.initialize(tagManagerArgs)


function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Header />
            <Hero />
            <Separator_a />
            <Features />
            <Separator_b />
            <Contact />
            <Service />
            <Footer />
            <Notification1 />
        </div>

    );
}

export default App;
