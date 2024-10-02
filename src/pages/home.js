import React from 'react';
import Hero from '../components/hero';
import BusService from '../components/buscard';
import BusService1 from '../components/buscard1';
import BookingSteps from '../components/bookingsteps';
import ExperienceSection from '../components/expsection';
import Footer from '../components/footer';
export default function home() {
  return (
    <div>
      <Hero/>
      <BusService/>
      <BusService1/>
      <BookingSteps/>
      <ExperienceSection/>
      <Footer/>
    </div>
  )
}
