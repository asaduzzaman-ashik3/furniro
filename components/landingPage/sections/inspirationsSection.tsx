import Image from "next/image";

export default function InspirationsSection() {
    return (
        <div className="bg-[#FCF8F3]">
            <div className="w-13/15 mx-auto py-12 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="space-y-2 flex flex-col justify-center">
                        <h1 className="text-5xl font-bold space-y-6">50+ Beautiful rooms inspiration</h1>
                        <p className="text-lg font-medium">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        <button className="bg-[#B88E2F] text-white w-50 py-4 text-sm mt-5">Explore More</button>
                    </div>
                    <div>
                        <Image src="/images/inspiration-img.jpg" alt="Inspiration" width={500} height={400}></Image>
                    </div>
                    <div>
                        <div className="carousel w-full h-[75vh]">
                            <div id="item1" className="carousel-item w-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                    className="w-full" />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                                    className="w-full" />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                                    className="w-full" />
                            </div>
                            <div id="item4" className="carousel-item w-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                                    className="w-full" />
                            </div>
                        </div>
                        <div className="flex w-full justify-start gap-2 py-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
