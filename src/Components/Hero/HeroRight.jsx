import { useContext } from "react";
import card from "../../assets/Sreemongol.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Marquee from "react-fast-marquee";

const HeroRight = () => {
  const { place } = useContext(AuthContext);

  return (
    <div className=" relative mt-10 grid m-5 ">
      <Marquee>
        <div className="flex flex-r gap-3 w-full m-3 ">
          {place.map((item, idx) => (
            <img
              key={idx}
              className=" w-[270px] h-[415px] "
              src={card}
              alt=""
            />
          ))}
          {/* <img className="opacity-80 " src={card} alt="" /> */}
          {/* <img className="opacity-80 " src={card} alt="" /> */}
        </div>
      </Marquee>
      <p className="absolute  text-white left-3 font-semibold bottom-2 text-3xl font-Bebas Neue">
        Sreemongol
      </p>
    </div>
  );
};

export default HeroRight;
