import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServiceSection from './components/ServiceSection/ServiceSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
       <Navbar />
        <MainSection />
        <AboutSection />
        <ServiceSection />
        <Footer />
    </div>
  )
}

export default App
