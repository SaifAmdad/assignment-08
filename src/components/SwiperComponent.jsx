"use client";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCard from "./shared/SwiperCard";

function SwiperComponent({ tiles }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
          1280: { slidesPerView: 4, spaceBetween: 50 },
        }}
        observer={true}
        observeParents={true}
        resizeObserver={true}
        // navigation={true}
        pagination={true}
        autoplay={true}
      >
        <div className="container mx-auto">
          {tiles.map((tile, i) => (
            <SwiperSlide key={i} className="pb-15 overflow-hidden">
              <SwiperCard d={tile} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

export default SwiperComponent;
