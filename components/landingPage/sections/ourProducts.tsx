import Image from "next/image";

export default function OurProducts() {
  // 12 fake product data
  const products = [
    {
      id: 1,
      image: "/images/browseImgOne.jpg",
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      id: 2,
      image: "/images/browseImgOne.jpg",
      name: "Lumina",
      description: "Table lamp",
      price: "Rp 1.200.000",
    },
    {
      id: 3,
      image: "/images/browseImgOne.jpg",
      name: "Nova",
      description: "Floor lamp",
      price: "Rp 2.000.000",
    },
    {
      id: 4,
      image: "/images/browseImgOne.jpg",
      name: "Orion",
      description: "Ceiling lamp",
      price: "Rp 1.800.000",
    },
    {
      id: 5,
      image: "/images/browseImgOne.jpg",
      name: "Astra",
      description: "Wall lamp",
      price: "Rp 900.000",
    },
    {
      id: 6,
      image: "/images/browseImgOne.jpg",
      name: "Lumi",
      description: "Desk lamp",
      price: "Rp 1.300.000",
    },
    {
      id: 7,
      image: "/images/browseImgOne.jpg",
      name: "Vega",
      description: "Table lamp",
      price: "Rp 1.100.000",
    },
    {
      id: 8,
      image: "/images/browseImgOne.jpg",
      name: "Celeste",
      description: "Floor lamp",
      price: "Rp 2.200.000",
    },
    {
      id: 9,
      image: "/images/browseImgOne.jpg",
      name: "Orbis",
      description: "Pendant lamp",
      price: "Rp 1.700.000",
    },
    {
      id: 10,
      image: "/images/browseImgOne.jpg",
      name: "Halo",
      description: "Wall lamp",
      price: "Rp 1.000.000",
    },
    {
      id: 11,
      image: "/images/browseImgOne.jpg",
      name: "Stella",
      description: "Night lamp",
      price: "Rp 1.600.000",
    },
    {
      id: 12,
      image: "/images/browseImgOne.jpg",
      name: "Aurora",
      description: "Table lamp",
      price: "Rp 1.400.000",
    },
  ];

  return (
    <section className="py-12 w-13/15 mx-auto space-y-12">
      <h1 className="text-center text-3xl font-bold">Our Products</h1>

      {/* Grid of cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-[#F4F5F7] h-122 w-full  shadow-sm flex flex-col"
          >
            <figure className="h-[60%] w-full relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body flex-1 flex flex-col justify-between text-center">
              <div>
                <h2 className="text-2xl font-semibold">{product.name}</h2>
                <p className="font-medium text-[#898989]">{product.description}</p>
              </div>
              <h2 className="text-xl font-semibold mt-2">{product.price}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Centered button */}
      <div className="flex justify-center">
        <button className="text-[#B88E2F] border-2 border-[#B88E2F] px-10 py-4 rounded-lg">
          Show More
        </button>
      </div>
    </section>
  );
}
