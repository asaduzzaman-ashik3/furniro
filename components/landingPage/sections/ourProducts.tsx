"use client"

import Image from "next/image";
import { useState } from "react";

export default function OurProducts() {
    const products = [
        { id: 1, image: "/images/browseImgOne.jpg", name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", discount: "50%" },
        { id: 2, image: "/images/browseImgOne.jpg", name: "Lumina", description: "Table lamp", price: "Rp 1.200.000", tag: "New" },
        { id: 3, image: "/images/browseImgOne.jpg", name: "Nova", description: "Floor lamp", price: "Rp 2.000.000" },
        { id: 4, image: "/images/browseImgOne.jpg", name: "Orion", description: "Ceiling lamp", price: "Rp 1.800.000", discount: "30%" },
        { id: 5, image: "/images/browseImgOne.jpg", name: "Astra", description: "Wall lamp", price: "Rp 900.000", tag: "New" },
        { id: 6, image: "/images/browseImgOne.jpg", name: "Lumi", description: "Desk lamp", price: "Rp 1.300.000" },
        { id: 7, image: "/images/browseImgOne.jpg", name: "Vega", description: "Table lamp", price: "Rp 1.100.000", discount: "50%" },
        { id: 8, image: "/images/browseImgOne.jpg", name: "Celeste", description: "Floor lamp", price: "Rp 2.200.000", tag: "New" },
        { id: 9, image: "/images/browseImgOne.jpg", name: "Orbis", description: "Pendant lamp", price: "Rp 1.700.000" },
        { id: 10, image: "/images/browseImgOne.jpg", name: "Halo", description: "Wall lamp", price: "Rp 1.000.000", discount: "20%" },
        { id: 11, image: "/images/browseImgOne.jpg", name: "Stella", description: "Night lamp", price: "Rp 1.600.000", tag: "New" },
        { id: 12, image: "/images/browseImgOne.jpg", name: "Aurora", description: "Table lamp", price: "Rp 1.400.000" },
    ];

    const [showAll, setShowAll] = useState(false);

    // Determine which products to show
    const displayedProducts = showAll ? products : products.slice(0, 10);

    return (
        <section className="pb-12 w-13/15 mx-auto space-y-12">
            <h1 className="text-center text-3xl font-bold">Our Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center relative">
                {displayedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="card shadow-none rounded-none bg-[#F4F5F7] h-115 w-full flex flex-col relative"
                    >
                        <figure className="h-140 w-full relative">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover h-full"
                            />
                        </figure>
                        <div className="p-5 pb-8 flex-1 flex flex-col justify-between gap-2">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                                <p className="font-medium text-[#898989]">{product.description}</p>
                            </div>
                            <h2 className="text-xl font-semibold">{product.price}</h2>
                        </div>
                        {product.discount && (
                            <div className="rounded-full bg-red-400 h-12 w-12 flex items-center justify-center p-2 absolute top-5 right-5">
                                <span className="text-white text-sm">{"-" + product.discount}</span>
                            </div>
                        )}

                        {product.tag === "New" && (
                            <div className="rounded-full bg-teal-600 h-12 w-12 flex items-center justify-center p-2 absolute top-5 right-5">
                                <span className="text-white text-sm">New</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-[#B88E2F] border-2 border-[#B88E2F] px-12 py-2.5 text-sm font-medium hover:bg-[#B88E2F] hover:text-white transition"
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>

        </section>
    );
}
