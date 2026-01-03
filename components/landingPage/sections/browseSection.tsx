import Image from "next/image";

export default function BrowseSection() {
    const cards = [
        {
            image: "/images/browseImgOne.jpg",
            title: "Dining",
        },
        {
            image: "/images/browseImgTwo.jpg",
            title: "Living",
        },
        {
            image: "/images/browseImgThree.jpg",
            title: "Bedroom",
        },
    ];

    return (
        <section className="py-12 px-6 h-screen w-13/15 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-1">
                Browse The Range
            </h2>

            <p className="text-center text-lg text-[#666666] mb-10">
                 Discover amazing products handpicked just for you, crafted to inspire and delight every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-[90%]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white overflow-hidden flex flex-col items-center text-center"
                    >
                        <div className="w-full h-full relative mb-5">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
