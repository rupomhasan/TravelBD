import { FaArrowRight } from "react-icons/fa";

const HeroLeft = () => {
  return (
    <div className=" text-white text-left mx-5">
      <h1 className="font-BebasNeue  text-4xl md:text-5xl lg:text-7xl font-extrabold">
        COX'S BAZAR
      </h1>
      <p className="text-justify  mt-5">
        Cox's Bazer is a town on the southest coast of Bangladesh. It's Known
        for its very long, sandy beachfront, stretching from Sea Beach in the
        north to Kolatoli Beach inteh south. Aggameda Khyang monaster is home to
        bronze statues and centuries-old Buddhist manuscripts. South of town ,
        the tropical rainforest of Himchari National Park has waterfalls and
        many birds . North, sea turtles breed on nearby Sonadia Island.
      </p>
      <button className="btn px-7 mt-10 ">
        Booking <FaArrowRight />
      </button>
    </div>
  );
};

export default HeroLeft;
