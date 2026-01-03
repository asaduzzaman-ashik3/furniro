import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section
        className="h-[80vh] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('/images/hego-img.jpg')` }}
      >
        <div className="bg-[#FFF3E3] p-10 absolute top-[50%] right-20">
          <p className="">New Arrival</p>
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p>Discover your dream property</p>
        </div>
      </section>
    </main>
  );
}
