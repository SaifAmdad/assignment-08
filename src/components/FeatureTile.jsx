import Image from "next/image";
import Link from "next/link";
import React from "react";

async function FeatureTile() {
  const res = await fetch(
    "https://namprokash.github.io/assingment-08-data/data.json",
  );
  const { tiles } = await res.json();
  const n = Math.floor(Math.random() * 6);
  const data = tiles.slice(n, n + 4);
  console.log(data);
  return (
    <div className=" py-10 bg-[#F4F7F9]">
      <div className="container mx-auto">
        <h3 className="font-bold text-2xl py-3">Featured Tiles Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.map((d, i) => (
            <div className="card bg-base-100 shadow-sm" key={i}>
              <figure className="h-36 ">
                <Image src={d.image} width={300} height={300} alt="Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{d.title}</h2>
                <p className="line-clamp-2">{d.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/all-tiles/${d.id}`}
                    className="btn bg-[#0E6F75] text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureTile;
