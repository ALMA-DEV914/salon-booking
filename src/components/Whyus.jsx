import React from 'react';
import bgImage from "../assets/images/bgWhy.png"; // Make sure the path is correct
import { FaAngleDoubleRight } from 'react-icons/fa';  // Import the icon

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
        <div data-aos="slide-up" data-aos-delay='200' className='flex flex-col justify-center items-center gap-6 p-8 rounded-xl md:w-[40%] w-full h-fit'>
            <h1 className='text-6xl text-white font-bold text-center'>Why Choose Us</h1>
            <p className='text-2xl text-white font-bold text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, saepe? Tempore placeat cupiditate repudiandae itaque ipsum, expedita dolores voluptas magnam ullam consequuntur rerum reiciendis minus sequi nemo pariatur aliquam numquam.</p>
            <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
                <div className='icon-box flex justify-center items-center gap-3'><FaAngleDoubleRight className="text-white size-6"/>
                <h1 className='text-xl text-white font-semibold'>Flexible Environment</h1></div>
            </div>
        </div>
    </section>
  )
}

export default Whyus;
