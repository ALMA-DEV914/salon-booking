import React from 'react';
import bgImage from "../assets/images/bgWhy.png"; // Make sure the path is correct

const Whyus = () => {
  return (
    <section 
      id='about' 
      className='w-full md:px-20 px-8 md:py-20 py-8 flex flex-col md:flex-row justify-center items-start gap-20 bg-cover bg-center mt-4' 
      style={{ backgroundImage: `url(${bgImage})` }} // Correct background image syntax
    >
        <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-8 bg-white p-8 rounded-xl md:w-[40%] w-full'>
            <h2 className="text-themeyellow text-4xl font-bold">Working Hours</h2>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className='text-xl text-black font-lg'>SUNDAY 8AM - 8PM</p>
                <p className='text-xl text-black font-lg'>MONDAY 8AM - 8PM</p>
                <p className='text-xl text-black font-lg'>TUESDAY 8AM - 8PM</p>
                <p className='text-xl text-black font-lg'>WEDNESDAY 8AM - 8PM</p>
                <p className='text-xl text-black font-lg'>THURSDAY 8AM - 8PM</p>
                <p className='text-xl text-black font-lg'>FRIDAY 8AM - 8PM</p>
                <p className='text-xl text-black font-lg'>SATURDAY 8AM - 8PM</p>
            </div>
        </div>
    </section>
  )
}

export default Whyus;
