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
                        <div className="carousel w-full h-[72vh]">
                            <div id="item1" className="carousel-item w-full">
                                <img
                                    src="/images/carouselOne.jpg"
                                    className="w-full" />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <img
                                    src="/images/carouselTwo.jpg"
                                    className="w-full" />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <img
                                    src="/images/carouselThree.jpg"
                                    className="w-full" />
                            </div>
                            <div id="item4" className="carousel-item w-full">
                                <img
                                    src="/images/carouselFour.jpg"
                                    className="w-full" />
                            </div>
                            
                            
                        </div>
                        <div className="flex w-full justify-start gap-2 py-5 bg-transparent">
                            <a href="#item1" className="rounded-full bg-[#B88E2F] p-2 border-2 border-[#B88E2F] w-5 h-5"></a>
                            <a href="#item2" className="rounded-full bg-[#B88E2F] p-2 border-2 border-[#B88E2F] w-5 h-5"></a>
                            <a href="#item3" className="rounded-full bg-[#B88E2F] p-2 border-2 border-[#B88E2F] w-5 h-5"></a>
                            <a href="#item4" className="rounded-full bg-[#B88E2F] p-2 border-2 border-[#B88E2F] w-5 h-5"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
