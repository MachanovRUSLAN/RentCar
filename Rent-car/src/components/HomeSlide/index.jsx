import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./homeSlide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function HomeSlide() {
  return (
    <div className="lg:py-10 bg-[#D7D7D7]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  bg-transparent lg:w-5/6 relative"
      >
        <SwiperSlide>
          <img className="m-auto lg:p-20 p-10" src="/img/slide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="m-auto lg:p-20 p-10" src="/img/slide.png" alt="" />
        </SwiperSlide>

        <div className="ecoClass absolute top-0 lg:flex hidden">
          <h1 className="text-[60px]">
            <span className="text-[#f36f20]">EKONOM</span>
            <br /> KLASS
          </h1>
        </div>
        <div className="dayPrice absolute lg:flex hidden bottom-[50px]">
          <h1 className="text-[35px] font-bold">60 AZN/Gün</h1>
        </div>
        <div className="dayPrice absolute lg:flex hidden top-2 right-6">
          <h1 className="text-[24px]">
            <span className="font-bold">Premium Klass</span>
            <p> avtomobillərinin kirayəsi</p>
          </h1>
        </div>
        <Link to="/categ" className="no-underline text-[#000]">
          <div className="dayPrice lg:flex hidden z-50 justify-center items-center absolute w-[208px] rounded-[5px] h-[62px] bg-[#f36f20] top-[30%] right-1">
            <button>İndi icarə et</button>
          </div>
        </Link>
      </Swiper>
    </div>
  );
}

export default HomeSlide;
