import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import the AOS styles

const Pricing = () => {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-shine',
        delay: 100,
    });
}, []);
  return (
    <section id='pricing' className='flex flex-col justify-center w-full md:px-20 md:py-20 py-10 items-center gap-24'>
    <h1 data-aos="zoom-in" className='text-xl font-bold text-black'>Our Pricing</h1>
    <div className='grid grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10'>
        <h1 className='text-3xl text-gray-900 font-bold'>Regular haircut</h1>
        <h1 className='text-themeyellow text-4xl'>PHP 80</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10'>
        <h1 className='text-3xl text-gray-900 font-bold'>Beard shave</h1>
        <h1 className='text-themeyellow text-4xl'>PHP 80</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10'>
        <h1 className='text-3xl text-gray-900 font-bold'>Mens haircut</h1>
        <h1 className='text-themeyellow text-4xl'>PHP 80</h1>
      </div>
      <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-themeyellow pb-10'>
        <h1 className='text-3xl text-gray-900 font-bold'>Womens haircut</h1>
        <h1 className='text-themeyellow text-4xl'>PHP 80</h1>
      </div>
    </div>
    </section>
  )
}

export default Pricing
