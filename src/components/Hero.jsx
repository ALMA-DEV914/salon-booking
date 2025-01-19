import React, { useEffect } from 'react';
import heroicon from "../assets/images/logo.jpg";
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { FaHeadphones } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import the AOS styles

const Hero = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-shine',
            delay: 100,
        });
    }, []);
    
    return (
        <>
        <section id='hero' className='w-full md:px-[120px] md:flex-row px-10 flex flex-col justify-center items-center gap-20'>
            <div id='content-box' className='flex flex-col justify-center items-start gap-10'>
                <h1 data-aos='zoom-in' className='text-2xl text-black font-semibold'>
                    WELCOME TO
                </h1>
                <h1 data-aos="zoom-in" className='text-6xl text-black font-bold'>
                    JJ Barber Shop<br />in Maraska<br />Roxas
                </h1>
                <div data-aos='slide-up' id='icon-list' className='flex flex-col justify-center items-start gap-6'>
                    <div id='icon-box' className='flex justify-center gap-3'>
                        <FaLocationDot className='text-black size-6'/>
                        <h1 className='text-xl text-gray-600 font-semibold'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h1>
                    </div>
                    <div id='icon-box' className='flex justify-center gap-3'>
                        <MdOutlinePhoneAndroid className='text-black size-6'/>
                        <h1 className='text-xl text-gray-600 font-semibold'>
                            +1 775-653-8593 | +63 939-657-6588
                        </h1>
                    </div>
                    <div id='icon-box' className='flex justify-center gap-3'>
                        <MdEmail className='text-black size-6'/>
                        <h1 className='text-xl text-gray-600 font-semibold'>
                            company@gmail.com | barbershop@yahoo.com
                        </h1>
                    </div>
                    <div id='icon-box' className='flex justify-center gap-3'>
                        <FaHeadphones className='text-black size-6'/>
                        <h1 className='text-xl text-gray-600 font-semibold'>
                            customerservices@gmail.com | customersupport@yahoo.com
                        </h1>
                    </div>
                </div>
                <button data-oas='zoom-in' className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-black hover:text-white'>Book Online</button>
            </div>
            <div data-aos="zoom-in" id='image-box' className='md:w-[50%] w-full'>
                
                <img src={heroicon} alt='hero' className='rounded-xl w-full md:h-[700px] h-[500px]' />
            </div>
        </section>
        </>
    );
};

export default Hero;
