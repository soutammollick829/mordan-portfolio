import Typewriter from "react-ts-typewriter";
import bannerImg from "../../../assets/photo/Profile Picture.png";
import { Fade } from "react-awesome-reveal";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mb-20 text-center lg:flex justify-center items-center gap-5 mt-10 lg:mx-0">
      <div className="space-y-4 lg:space-y-7 mb-10 lg:mb-0">
        <Fade cascade>
          <h1 className="lg:text-2xl font-bold text-gray-600">
            Hello! I am{" "}
            <span className="lg:text-4xl font-bold text-sky-700">Soutam.</span>
          </h1>
          <h4 className="lg:text-2xl font-semibold text-[#E9BA48]">
            I am passionate{" "}
            <Typewriter text="React Developer" loop={true} speed={200} />
          </h4>
          <p className="text-xs lg:text-lg">
            Dedicated to unleashing the full potential of the web. <br /> With a
            focus on crafting captivating and cutting-edge <br />
            digital experiences,I bring creativity and expertise to every
            project.
          </p>
          <button className="btn btn-outline rounded-none text-white border-1 bg-sky-700 border-sky-700  uppercase">
            Download Resume <FaDownload />
          </button>
          <div className="stats shadow border-2 border-sky-700 rounded-md">
            <div className="stat place-items-center">
              <div className="stat-title">Year of Experience</div>
              <div className="stat-value text-sky-700">2+</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Successful Project</div>
              <div className="stat-value text-sky-700">27+</div>
            </div>
          </div>
        </Fade>
      </div>
      <div>
        <img className="w-[500px]" src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Home;