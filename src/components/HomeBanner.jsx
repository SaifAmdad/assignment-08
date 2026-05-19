import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Marquee from "react-fast-marquee";

function HomeBanner() {
  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: "url(tiles/bg-hero.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-full">
            <h1 className="mb-9 text-5xl font-bold leading-15 text-[#0F1E26]">
              Discover Your Perfect Aesthetic
            </h1>

            <Link
              href={"/all-tiles"}
              className="btn bg-[#0E6F75] border-none text-white px-5  "
            >
              Brows Now
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0E6F75] text-white">
        <div className="container mx-auto flex">
          <button className="btn bg-[#0E6F75] py-6 border-none text-white">
            New Arrivals :{" "}
          </button>
          <Marquee pauseOnHover={true}>
            <h1 className="font-bold">Desert Sand Terracotta </h1> | Weekly
            Feature: Modern Geometric Patterns | Join the Community...
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
