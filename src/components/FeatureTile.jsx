import React from "react";
import TileCard from "./shared/TileCard";
import SwiperComponent from "./SwiperComponent";

async function FeatureTile() {
  const res = await fetch(
    "https://namprokash.github.io/assingment-08-data/data.json",
  );
  const { tiles } = await res.json();
  const n = Math.floor(Math.random() * 6);
  const data = tiles?.slice(n, n + 4);
  return (
    <div className=" pt-10 pb-5 bg-[#F4F7F9] ">
      <div className="container mx-auto">
        <h3 className="font-bold text-2xl py-3">Featured Tiles </h3>
        <SwiperComponent tiles={tiles} />
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.map((d, i) => (
            <TileCard d={d} key={i} />
          ))}
        </div> */}
    </div>
  );
}

export default FeatureTile;
