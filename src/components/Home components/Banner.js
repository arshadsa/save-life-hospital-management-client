import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Homecomponents.css";

// image for banner
import scbannerimage from "../../assets/Banner Image/scbi.png";
import draw from '../../assets/Banner Image/scbgdraw.png'
import draw2 from '../../assets/Banner Image/scbgdraw2.png'
import draw3 from '../../assets/Banner Image/scbgdraw3.png'

const Banner = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        // slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="">
            <div className="bannerbg flex justify-end items-center ">
              <div className="flex">
                <div className="mr-[30px] text-[33px] text-left font-extrabold text-white uppercase container p-2">
                  <p >
                    our best doctor are ready for you
                    <br /> just make an{" "}
                    <span className="text-[#0071DC]">appoinment </span>{" "}
                  </p>
                  <button className="btn btn-outline btn-primary mt-3">
                    visit Doctors{" "}
                  </button>
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
