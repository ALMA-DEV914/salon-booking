import React from 'react';
import './App.css';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div>
<Header/>
<Pricing/>
<Services/>
<Contact/>
<Footer/>
    </div>
    </>
  );
}

export default App;
