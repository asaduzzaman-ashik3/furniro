import Image from "next/image";

export default function BrowseSection() {
    const cards = [
        {
            image: "/images/browseImgOne.jpg",
            title: "Card One",
        },
        {
            image: "/images/browseImgTwo.jpg",
            title: "Card Two",
        },
        {
            image: "/images/browseImgThree.jpg",
            title: "Card Three",
        },
    ];

    return (
        <section className="py-16 px-6 bg-gray-100">
            {/* Section title */}
            <h2 className="text-4xl font-bold text-center mb-6">
                Browse Our Collection
            </h2>

            {/* Section description */}
            <p className="text-center text-gray-600 mb-12">
                Discover amazing products handpicked just for you.
            </p>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center"
                    >
                        {/* Card image */}
                        <div className="w-full h-56 relative">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Card title */}
                        <h3 className="text-xl font-semibold my-4">{card.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
