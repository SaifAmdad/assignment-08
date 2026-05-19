import Image from "next/image";

async function DetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://namprokash.github.io/assingment-08-data/data.json",
  );
  const { tiles } = await res.json();
  const data = tiles.filter((t) => t.id == id)[0];

  return (
    <div className="container mx-auto py-10">
      <div className="card sm:card-side bg-base-100 ">
        <figure className="max-w-full sm:max-w-[50%]">
          <Image
            className="h-96"
            src={data.image}
            width={500}
            height={500}
            loading="eager"
            alt="Picture of Tile"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#0E6F75]">{data.title}</h2>
          <h3 className="font-semibold text-sm">{data.category}</h3>
          <div>
            <p>{data.description}</p>
            <p className="py-2">
              <span className="font-bold">Material :</span> {data.material}
            </p>

            <span className="font-bold">Tags :</span>
            <div className="mt-2 flex gap-1 items-center">
              {data.tags.map((tag, i) => (
                <span
                  className="mr-2.5 bg-[#E1F1F2] py-1 px-3 rounded-2xl"
                  key={i}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
