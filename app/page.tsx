import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('/images/hego-img.jpg')` }}
      >
        <div className="bg-[#FFF3E3] p-10 absolute bottom-[20%] right-20 w-160 space-y-4">
          <p className="text-md">New Arrival</p>
          <h1 className="text-5xl font-bold text-[#B88E2F]">Discover Our <br />New Collection</h1>
          <p className="text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="bg-[#B88E2F] text-white px-12 py-4 text-sm font-bold lg:mt-6">Shop Now</button>
        </div>
      </section>
    </main>
  );
}
