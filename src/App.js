import React from 'react';
import './App.css';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
    <div>
<Hero/>
<Pricing/>
<Services/>
<Gallery/>
<Contact/>
<Footer/>
    </div>
    </>
  );
}

export default App;
