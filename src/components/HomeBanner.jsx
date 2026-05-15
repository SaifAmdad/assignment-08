"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

//https://namprokash.github.io/assingment-08-data/data.json

function HomeBanner() {
  const [tilesData, setTilesData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://namprokash.github.io/assingment-08-data/data.json",
      );
      const data = await res.json();
      setTilesData(data.tiles);
    };
    getData();
  }, []);
  console.log(tilesData);
  return (
    <>
      <Swiper
        className="h-[70vh] "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        autoplay={true}
        // scrollbar={true}
      >
        {tilesData &&
          tilesData.map((tile, index) => (
            <SwiperSlide key={index} className="bg-amber-100 text-gray-500 ">
              <div className="h-full flex justify-center items-center">
                <Image
                  src={tile.image}
                  width={1600}
                  height={900}
                  alt="Picture of the author"
                />
              </div>
            </SwiperSlide>
          ))}
        ...
      </Swiper>
    </>
  );
}

export default HomeBanner;
