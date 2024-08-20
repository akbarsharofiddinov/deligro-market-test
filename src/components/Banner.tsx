import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../images/banner-1.png";
import banner2 from "../images/banner-2.png";
import banner3 from "../images/banner-3.png";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="container">
        <Swiper
          className="bannerSwiper"
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src={banner} alt="banner image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="banner image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="banner image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
