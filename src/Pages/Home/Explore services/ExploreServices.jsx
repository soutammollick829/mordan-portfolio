import { Zoom } from "react-awesome-reveal";

const ExploreServices = () => {
  return (
    <Zoom>
      <div className="lg:flex justify-center items-center text-center p-4 font-serif mb-10">
        <div>
          <h3 className="text-4xl font-bold text-[#E9BA48]">
            Explore My Expertise Services!
          </h3>
        </div>
        <div className="lg:w-1/2 px-1">
          <p>
            Discover specialized services tailored for businesses in search of
            cutting-edge frontend solutions. Harness the power of React to craft
            exceptional user experiences, design responsive websites, create
            stunning interfaces, and build scalable applications. Benefit from
            expert consulting and unwavering support throughout the entire
            development process.
          </p>
        </div>
      </div>
    </Zoom>
  );
};

export default ExploreServices;
