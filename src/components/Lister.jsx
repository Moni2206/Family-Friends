import ListerPet from "./ListerPet";

const Lister = async ({ searchParams }) => {
  // 🔥 Next 16: searchParams er en Promise
  const params = await searchParams;

  const query = params?.query?.toLowerCase() || "";

  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: process.env.DOG_API_KEY ? { "x-api-key": process.env.DOG_API_KEY } : {},
    cache: "no-store",
  });

  if (!response.ok) {
    return <div>Kunne ikke hente hunde 🐶</div>;
  }

  const breeds = await response.json();

  const filtered = breeds.filter((breed) => breed.name.toLowerCase().includes(query));

  return (
    <div className="container mx-auto p-4 pt-12 grid grid-cols-2 gap-x-4 gap-y-6 items-start">
      {filtered.map((breed) => (
        <ListerPet key={breed.id} id={breed.id} breedGroup={breed.name} origin={breed.origin || "Unknown"} image={breed.image?.url} />
      ))}
    </div>
  );
};

export default Lister;
