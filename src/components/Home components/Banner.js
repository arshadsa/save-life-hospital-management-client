import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Homecomponents.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        // slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div>
            <div className="bannerbg flex justify-end items-center ">
              <div className="flex">
                <div className="mr-[30px] text-[33px] text-left font-extrabold text-white uppercase ">
                  <p>our best doctor are ready for you<br/> just make an <span className="text-[#0071DC]">appoinment </span> </p>
                  <button className="btn btn-outline btn-primary mt-3">visit Doctors </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
