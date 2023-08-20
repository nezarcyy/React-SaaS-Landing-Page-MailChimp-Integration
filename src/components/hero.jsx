import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";
import '../App.css';

const Hero = () => {

  useEffect(() => {
    const sleed1 = document.getElementById("sleed1");

    let position1 = 0;

    setInterval(() => {
      position1 = position1 + 1.25;
      sleed1.style.backgroundPosition = position1 + "px";
      sleed1.style.transitionDuration = "2.5ms";
    }, 40);
  }, []);


  return (
    <div className="bg-gradient-to-t from-black/40">
      <div className="scroll-smooth animate-fade-down mt-20 animate-once dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-white dark:text-white">
          Unlock Your E-Commerce Potential with NextierLab
        </h1>
        <p className="text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Be the First to Grow and Optimize Your Online Business for Success.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Product Launch Coming Soon!
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <ScrollLink to="contact" smooth={true} duration={900}>
            <button href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">

              Subscribe Now!

            </button>
          </ScrollLink>
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">Powered by Trusted Platforms</span>
          <div className="flex justify-center items-center mt-8 text-gray-500">
            <div id='sleed1' className="relative">


              <div id="squareleft" className="absolute"></div>
              <div id="squareright" className="absolute inset-y-0 right-0"></div>


            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
