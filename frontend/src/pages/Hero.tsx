// import { useGSAP } from "@gsap/react";
// import { useNavigate } from "react-router-dom";
// import { StarsBackground } from "../../components/StarBackground";
// import { ShootingStars } from '../../components/ShootingStars'
// import RotatingPlanet from "../../components/Planet"
// import gsap from "gsap";
// import { useRef } from "react";

// const Hero = ({user}:{user:any}) => {
//   const navigate = useNavigate();
//   const btnRef = useRef<HTMLButtonElement>(null);
//   const starsBg = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.from(starsBg.current, {
//       opacity: 0,
//       delay: 0.6,
//       duration: 1
//     })
//   }, [starsBg]);



//   return (
//     <div className="flex justify-center items-center  ">
//       <div ref={starsBg} className="w-full  sm:h-[150vh] overflow-hidden flex flex-col items-center">
//         <StarsBackground
//           starDensity={0.0004}
//           allStarsTwinkle
//           twinkleProbability={1}
//           minTwinkleSpeed={0.6}
//           maxTwinkleSpeed={1.2}
//           className="absolute h-[150vh]"
//         />
//         <ShootingStars />
//         <div className="w-full h-[5rem] flex justify-between max-sm:mt-3 text-white ">
//           <div className="sm:pl-20 max-sm:pl-10  sm:mt-12">
//             <img src="./final text-Photoroom.png" width={200} alt="" className="max-sm:w-24" />
//           </div>
//           {/* pr-14 sm:pt-12 max-sm:pt-4 max-sm:-mr-14 */}
//           <div className="w-fit sm:mt-20 sm:mr-16 h-fit max-sm:mt-4 max-sm:mr-10 z-10">
//           <button
// 							ref={btnRef}
// 							type="button"
// 							onClick={() => {
// 								// Conditionally navigate to profile if logged in, else go to login
// 								if (user) {
// 									navigate("/profile");
// 								} else {
// 									navigate("/login");
// 								}
// 							}}
// 						>
// 							<h1 className="font-originTech text-4xl pt-9 pr-10">
// 								{user ? "Profile" : "Login"}
// 							</h1>
// 						</button>
//           </div>
//         </div>
//         <div id="words-animation" className="max-sm:mt-3 mt-44 mb-14 sm:text-[3.4rem] font-autoTechno">
//           <h1 className=" bg-gradient-to-r from-[#5162ce] via-[#E12198]/[77%] to-[#F3AC80] bg-clip-text text-transparent text-center max-sm:leading-[70px] sm:leading-[100px]">
//             <span className="max-sm:text-[1.2rem]">REVIVING</span> <br className="sm:hidden" /> <span className="max-sm:text-[1.6rem]">THE <br className="hidden" />LEGACY </span>
//             <br /><span className="sm:text-[2.7rem] max-sm:text-4xl">INSPIRING </span><br className="sm:hidden" /><span className="max-sm:text-[2.7rem]">INOVATION</span> </h1>
//         </div>
//         <RotatingPlanet />
//       </div>
//     </div>
//   );
// };

// export default Hero;

/////////////////////////////////////////////////////////////////////




import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import { StarsBackground } from "../../components/StarBackground";
import { ShootingStars } from '../../components/ShootingStars';
import RotatingPlanet from "../../components/Planet";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
};

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const btnRef = useRef<HTMLButtonElement>(null);
  const starsBg = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const userCookie = getCookie("accessToken"); 
    setIsLoggedIn(!!userCookie); 
  }, []);

  useGSAP(() => {
    gsap.from(starsBg.current, {
      opacity: 0,
      delay: 0.6,
      duration: 1
    });
  }, [starsBg]);

  return (
    <div className="flex justify-center items-center">
      <div ref={starsBg} className="w-full sm:h-[150vh] overflow-hidden flex flex-col items-center">
        <StarsBackground
          starDensity={0.0004}
          allStarsTwinkle
          twinkleProbability={1}
          minTwinkleSpeed={0.6}
          maxTwinkleSpeed={1.2}
          className="absolute h-[150vh]"
        />
        <ShootingStars />
        <div className="w-full h-[5rem] flex justify-between max-sm:mt-3 text-white">
          <div className="sm:pl-20 max-sm:pl-10 sm:mt-12">
            <img src="./final text-Photoroom.png" width={200} alt="Logo" className="max-sm:w-24" />
          </div>
          <div className="w-fit sm:mt-14 sm:mr-16 h-fit max-sm:mt-4 max-sm:mr-10 z-10">
            <button
              ref={btnRef}
              type="button"
              onClick={() => {
                if (isLoggedIn) {
                  navigate("/profile"); 
                } else {
                  navigate("/login"); 
                }
              }}
            >
              <h1 className="font-originTech sm:text-4xl sm:pt-9 sm:pr-10">
                {isLoggedIn ? "Profile" : "Login"}
              </h1>
            </button>
          </div>
        </div>
        <div id="words-animation" className="max-sm:mt-3 mt-44 mb-14 sm:text-[3.4rem] font-autoTechno">
          <h1 className="bg-gradient-to-r from-[#5162ce] via-[#E12198]/[77%] to-[#F3AC80] bg-clip-text text-transparent text-center max-sm:leading-[70px] sm:leading-[100px]">
            <span className="max-sm:text-[1.2rem]">REVIVING</span> <br className="sm:hidden" /> <span className="max-sm:text-[1.6rem]">THE <br className="hidden" />LEGACY</span>
            <br /><span className="sm:text-[2.7rem] max-sm:text-4xl">INSPIRING</span><br className="sm:hidden" /><span className="max-sm:text-[2.7rem]">INNOVATION</span>
          </h1>
        </div>
        <RotatingPlanet />
      </div>
    </div>
  );
};

export default Hero;
