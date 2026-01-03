import React from 'react'

export default function OurProducts() {
    return (
        <section className='py-12 w-13/15 mx-auto space-y-16'>
            <h1 className='text-center text-3xl font-bold'>Our Products</h1>
            <div>
                <div className="card bg-[#F4F5F7] h-112 w-96 shadow-sm">
                    <figure className='h-[90%] w-full'>
                        <img
                            className='w-full h-full object-cover'
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold">Grifo</h2>
                        <p className='font-medium text-medium text-[#898989]'>Night lamp</p>
                        <h2 className="text-xl font-semibold">Rp 1.500.000</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>
            <button className='bg-blue-500 text-white px-4  rounded-md'>Show More</button>

        </section>
    )
}
