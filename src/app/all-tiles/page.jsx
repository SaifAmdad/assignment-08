import Search from "@/components/shared/Search";
import TileCard from "@/components/shared/TileCard";
import React from "react";

async function AllTilesPage({ searchParams }) {
  const params = await searchParams;
  const res = await fetch(
    "https://namprokash.github.io/assingment-08-data/data.json",
  );
  const { tiles } = await res.json();
  let searchTile;
  let getlen = [];

  if (params.search) {
    const filtered = tiles.filter((tile) =>
      tile.title.toLowerCase().includes(params.search.toLowerCase()),
    );
    searchTile = filtered;
    getlen.push(filtered);
  }

  return (
    <div className="container mx-auto">
      <Search />
      {/* -------------------- */}
      {getlen.length < 1 && !params.search ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-15">
          {tiles.map((d, i) => (
            <TileCard d={d} key={i} />
          ))}
        </div>
      ) : getlen.length < 1 ? (
        <div className="flex items-center container mx-auto h-[70vh]">
          <p className="text-center font-extrabold text-5xl w-full text-gray-500">
            No Tile Found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-15">
          {searchTile.map((d, i) => (
            <TileCard d={d} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllTilesPage;
