import Image from "next/image";
import Link from "next/link";
import React from "react";

function TileCard({ d }) {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="h-36 ">
          <Image
            loading="eager"
            src={d.image || "/title/bg.avif"}
            width={400}
            height={300}
            alt="Image"
            style={{ width: "auto" }}
          />
        </figure>
        <div className="">
          <h2 className="card-title py-3">{d.title}</h2>
          {/* <p className="line-clamp-2">{d.description}</p> */}
          <div className="card-actions justify-end">
            <Link
              href={`/tile/${d.id}`}
              className="btn bg-[#0E6F75] text-white w-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileCard;
