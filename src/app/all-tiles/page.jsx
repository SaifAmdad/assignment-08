import TileCard from "@/components/shared/TileCard";
import React from "react";

async function AllTilesPage() {
  const res = await fetch(
    "https://namprokash.github.io/assingment-08-data/data.json",
  );
  const { tiles } = await res.json();

  return (
    <div>
      <div className="container mx-auto flex items-center justify-center py-3">
        <input
          type="text"
          placeholder="Tile Title"
          className="border border-[#0E6F75] p-1.5 w-[80%] rounded-bl-xl rounded-tl-xl"
        />{" "}
        <button className="btn bg-[#0E6F75] text-white rounded-br-xl rounded-tr-xl">
          Search
        </button>
      </div>
      {/* -------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {tiles.map((d, i) => (
          <TileCard d={d} key={i} />
        ))}
      </div>
    </div>
  );
}

export default AllTilesPage;
