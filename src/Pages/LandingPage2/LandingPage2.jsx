import React from 'react'
import Navbar from 'Components/Layouts/Navbar/Navbar';
import Hero from 'Components/Layouts/LandingPage2/Hero/Hero.jsx';
import Hero2 from 'Components/Layouts/LandingPage2/Hero2/Hero2.jsx';
import Hero3 from 'Components/Layouts/LandingPage2/Hero3/Hero3.jsx';
import Hero4 from 'Components/Layouts/LandingPage2/Hero4/Hero4.jsx';
import Faqs from 'Components/Layouts/Faqs/Faqs.jsx';
import Hero5 from 'Components/Layouts/Hero5/Hero5.jsx';
import Testimonials from 'Components/Layouts/Testimonials/Testimonials.jsx';
import Footer from 'Components/Layouts/Footer/Footer.jsx';

const LandingPage2 = () => {
  return (
    <div className="generalBg">
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Hero3/>
      <Hero4/>
      <Faqs/>
      <Testimonials/>
      <Hero5/>
      <Footer/>
    </div>
  );
}

export default LandingPage2;