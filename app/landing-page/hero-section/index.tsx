// "use client";
// import Image from "next/image";
// import StartJourneyModal from "../../components/start-journey-modal/StartJourneyModal";

// const HeroSection = () => {
//   return (
//     <section className="relative flex justify-center items-center h-screen">
//       <div className="relative flex flex-col lg:flex-row justify-between items-center bg-[#EAF4CF] w-full h-full rounded-xl overflow-hidden mx-[2rem] lg:mx-[2rem]">
//         <div className="z-10 px-6 lg:px-16">
//           <h1 className="text-4xl lg:text-6xl pt-6 lg:pt-0 font-bold text-black leading-snug lg:leading-tight">
//             Healthy Eating Made Easy
//           </h1>
//           <p className="mt-4 text-base py-1 lg:text-xl text-gray-600">
//             Achieve your goals with Nigerian based meal plans that make healthy
//             eating simple, satisfying, and sustainable.
//           </p>
//           <StartJourneyModal
//             trigger={
//               <button className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-full mb-6 lg:mb-0">
//                 <p>Start Your Journey</p>
//               </button>
//             }
//           />
//         </div>

//         <div className="relative w-full h-full flex items-end">
//           <div
//             className="absolute inset-y-0 right-0 w-full lg:w-[70%] h-full  rounded-l-full"
//             style={{
//               background:
//                 "linear-gradient(138.04deg, #81C77B 3.17%, #539299 99.82%)",
//             }}
//           ></div>

//           <div className="relative z-20">
//             <Image
//               src={
//                 "https://files.skillpaddy.com/public/image/hero-1728385324448.png"
//               }
//               alt="Healthy meal"
//               className="object-contain w-full lg:mb-[4rem] sm:w-full sm:h-[400px] lg:w-[90%] lg:h-[580px]"
//               width={300}
//               height={400}
//               style={{ maxWidth: "none" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


"use client";
import StartJourneyModal from "../../components/start-journey-modal/StartJourneyModal";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });


const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center h-screen mx-[2rem] overflow-hidden">
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute right-0 top-0 h-full w-[40%] lg:w-[55%] bg-gradient-to-r from-[#43A5AE00] to-[#43A5AE]"></div>
      </div>

      <div className="relative z-10 w-full flex justify-end items-center h-full px-6 lg:px-16">
        <div className="w-full max-w-lg text-white">
          <h1
            className={`text-4xl lg:text-6xl font-bold leading-snug ${nunito.className}`}
          >
            Healthy Eating Made Easy
          </h1>
          <p className={`mt-4 text-lg lg:text-xl ${nunito.className}`}>
            Achieve your goals with Nigerian-based meal plans that make healthy
            eating simple, satisfying, and sustainable.
          </p>
          <StartJourneyModal
            trigger={
              <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-full">
                Start Your Journey
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
