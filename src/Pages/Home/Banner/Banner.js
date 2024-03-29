import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="bg-[url('https://i.ibb.co/rGBjKXT/bannerbackground.png')]  bg-cover  bg-no-repeat flex flex-col items-center justify-center bg-center md:min-h-[520px] h-64 min-w-full overflow-hidden">
      <h1 className="text-center md:text-6xl text-4xl text-black font-medium md:mb-8 mb-3">
        Best food waiting for your belly
      </h1>
      <div className="relative rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Search your food..."
          className="md:w-96 w-56 md:py-2 py-1 md:px-4 px-3 rounded-full shadow-lg bg-white text-gray-700 focus:outline-none focus:shadow-outline"
        />
        <div className="absolute right-0 top-0 bottom-0 flex items-center ">
          <button className="flex-shrink-0 md:py-2 py-1  md:px-3 px-2 rounded-full bg-[#F91944] text-white hover:bg-[#da173e] focus:outline-none focus:shadow-outline">
            <MagnifyingGlassIcon className="w-6 h-6"></MagnifyingGlassIcon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
