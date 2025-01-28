import React from "react";
import services from "../assets/images/gal7.jpg";
import sevice1 from "../assets/images/scissor.png";
import sevice2 from "../assets/images/shaver.png"
import sevice3 from "../assets/images/mens.png"
import service4 from "../assets/images/womens.png"

const Services = () => {
  return (
    <section
      id="services"
      className="w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center gap-16 items-center gap-16 bg-gray-900"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="zoom-in"
          className="text-6xl text-white font-bold text-center"
        >
          Barber Services
        </h1>
        <p data-aos="zoom-in" className="text-xl text-slate-200 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, velit suscipit fuga dignissimos, id pariatur ratione sint cupiditate sed consectetur ducimus rerum nostrum incidunt in, facere odit ad aperiam animi!</p>
      </div>
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
        <div id="image-box">
          <img src={services} alt="" data-aos='zoom-in' data-aos-delay='200' className="rounded-xl w-[600px] h-[650px]"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
        <div data-aos='zoom-out' data-aos-delay='200' className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl">
        <img src={sevice1} alt="" data-aos='zoom-in' data-aos-delay='200' className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>
        <h1 className="text-black text-[25px] font-bold">Hair Care</h1>
        </div>
        
        <div data-aos='zoom-out' data-aos-delay='200' className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl">
        <img src={sevice2} alt="" data-aos='zoom-in' data-aos-delay='200' className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>
        <h1 className="text-black text-[25px] font-bold">Hair Care</h1>
        </div>
        
        <div data-aos='zoom-out' data-aos-delay='200' className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl">
        <img src={sevice3} alt="" data-aos='zoom-in' data-aos-delay='200' className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>
        <h1 className="text-black text-[25px] font-bold">Hair Care</h1>
        </div>
        
        <div data-aos='zoom-out' data-aos-delay='200' className="bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl">
        <img src={service4} alt="" data-aos='zoom-in' data-aos-delay='200' className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"/>
        <h1 className="text-black text-[25px] font-bold">Hair Care</h1>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
