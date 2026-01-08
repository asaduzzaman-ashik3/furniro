"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  discount?: string;
  tag?: string;
}

export default function ProductDetails() {
  const params = useParams();
  const paramId = Array.isArray(params.id) ? params.id[0] : params.id;
  const productId = parseInt(paramId || '0');

  // Mock product data - in a real app, this would come from an API
  const products: Product[] = [
    { id: 1, image: "/images/browseImgOne.jpg", name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", discount: "50%" },
    { id: 2, image: "/images/browseImgTwo.jpg", name: "Lumina", description: "Table lamp", price: "Rp 1.200.000", tag: "New" },
    { id: 3, image: "/images/browseImgThree.jpg", name: "Nova", description: "Floor lamp", price: "Rp 2.000.000" },
    { id: 4, image: "/images/browseImgOne.jpg", name: "Orion", description: "Ceiling lamp", price: "Rp 1.800.000", discount: "30%" },
    { id: 5, image: "/images/browseImgTwo.jpg", name: "Astra", description: "Wall lamp", price: "Rp 900.000", tag: "New" },
    { id: 6, image: "/images/browseImgThree.jpg", name: "Lumi", description: "Desk lamp", price: "Rp 1.300.000" },
    { id: 7, image: "/images/browseImgOne.jpg", name: "Vega", description: "Table lamp", price: "Rp 1.100.000", discount: "50%" },
    { id: 8, image: "/images/browseImgTwo.jpg", name: "Celeste", description: "Floor lamp", price: "Rp 2.200.000", tag: "New" },
    { id: 9, image: "/images/browseImgThree.jpg", name: "Orbis", description: "Pendant lamp", price: "Rp 1.700.000" },
    { id: 10, image: "/images/browseImgOne.jpg", name: "Halo", description: "Wall lamp", price: "Rp 1.000.000", discount: "20%" },
    { id: 11, image: "/images/browseImgTwo.jpg", name: "Stella", description: "Night lamp", price: "Rp 1.600.000", tag: "New" },
    { id: 12, image: "/images/browseImgThree.jpg", name: "Aurora", description: "Table lamp", price: "Rp 1.400.000" },
  ];

  const product = products.find(p => p.id === productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Product not found</p>
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 flex items-center justify-center h-96">
              <Image
                src={selectedImage}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[product.image].map((img, idx) => (
                <div 
                  key={idx} 
                  className={`bg-gray-100 rounded cursor-pointer ${selectedImage === img ? 'ring-2 ring-[#B88E2F]' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-24"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            {product.tag === "New" && (
              <span className="inline-block bg-teal-600 text-white text-sm px-3 py-1 rounded-full mb-4">
                New
              </span>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              {product.discount ? (
                <>
                  <span className="text-3xl font-bold text-[#B88E2F]">{product.price}</span>
                  <span className="text-xl text-gray-500 line-through">Rp {(parseInt(product.price.replace(/[^\d]/g, '')) * 2).toLocaleString()}</span>
                  <span className="bg-red-400 text-white px-2 py-1 rounded text-sm">-{product.discount}</span>
                </>
              ) : (
                <span className="text-3xl font-bold text-[#B88E2F]">{product.price}</span>
              )}
            </div>

            <p className="text-gray-600 mb-8 text-lg">{product.description}</p>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-lg font-medium mb-2">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded w-40">
                <button 
                  className="px-4 py-3 text-xl font-bold hover:bg-gray-100"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-4 py-3 flex-1 text-center">{quantity}</span>
                <button 
                  className="px-4 py-3 text-xl font-bold hover:bg-gray-100"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-[#B88E2F] text-white px-8 py-4 text-lg font-medium hover:bg-[#a67c26] transition w-full">
                Add to Cart
              </button>
              <button className="border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-4 text-lg font-medium hover:bg-[#B88E2F] hover:text-white transition w-full">
                Buy Now
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Category:</span>
                  <span>Lamps</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Material:</span>
                  <span>High-quality metal and glass</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Dimensions:</span>
                  <span>Varies by model</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Warranty:</span>
                  <span>2 years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}