import { useContext } from "react";
import HeroLeft from "../../Components/Hero/HeroLeft";
import HeroRight from "../../Components/Hero/HeroRight";
import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Home = () => {


  const {place} = useContext(AuthContext)


  return (
    <div
      style={{ backgroundImage: `url('/src/assets/Rectangle 1.png')` }}
      className="w-full lg:h-[100vh] bg-cover bg-blend-multiply bg-slate-600"
    >
      <Navbar></Navbar>
      <div className="mx-auto">
        <div className="max-w-7xl mx-auto   grid  grid-cols-1 lg:grid-cols-2  items-center mt-36 gap-5">
          <HeroLeft></HeroLeft>
          <HeroRight></HeroRight>
        </div>
      </div>
    </div>
  );
};

export default Home;
