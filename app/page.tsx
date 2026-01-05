import BrowseSection from "@/components/landingPage/sections/browseSection";
import OurProducts from "@/components/landingPage/sections/ourProducts";
import Navbar from './../components/shared/Navbar';
import InspirationsSection from "./../components/landingPage/sections/inspirationsSection";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

        <section
          className="h-[80vh] bg-cover bg-center bg-no-repeat relative "
          style={{ backgroundImage: `url('/images/hego-img.jpg')` }}
        >
          <div className="bg-[#FFF3E3] p-10 absolute bottom-[20%] right-20 w-160 space-y-4">
            <p className="text-lg">New Arrival</p>
            <h1 className="text-5xl font-bold text-[#B88E2F]">Discover Our <br />New Collection</h1>
            <p className="text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#B88E2F] text-white px-12 py-4 text-sm">Shop Now</button>
          </div>
        </section>
      <BrowseSection />
      <OurProducts/>
      <InspirationsSection/>
    </div>
  );
}

