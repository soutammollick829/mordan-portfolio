import { Slide } from "react-awesome-reveal";
import myImg from "../../../assets/photo/profile-pic (14).png";
const AboutMe = () => {
  return (
    <>
      <img className="w-96 mx-auto rounded-full" src={myImg} alt="my image" />
      <h4 className="text-2xl font-semibold text-center uppercase mt-10  mx-5 text-[#E9BA48] font-serif underline">
        About Me
      </h4>
      <hr className=" mb-10" />
      <div className="mx-5 lg:mx-0 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 font-serif">
          <Slide>
            <div className="text-center lg:text-start">
              <h1 className="text-2xl font-bold text-sky-700">
                Soutam mallick
              </h1>
              <p className=" bg-[#E9BA48] inline-block text-white px-2">
                Front-End developer
              </p>
              <h1 className="text-lg font-semibold mb-2">
                <span className="text-5xl font-bold text-sky-700">2+</span>{" "}
                Years Experience
              </h1>
              <hr />
              <p className="text-lg">
                Hi there! My name is Soutam Mallick and I am a React developer
                with expertise in JavaScript and front-end development. Skilled
                in building scalable web applications using React.js and related
                technologies. Strong problem-solving abilities and a passion for
                staying updated with the latest industry trends.
              </p>
            </div>
          </Slide>
          <Slide direction="right">
            <div className="space-y-2 text-center lg:text-start">
              <h3 className="text-lg text-sky-700">EDUCATION</h3>
              <p>
                Govt Sundarban Adarsha College, Khulna, Bangladesh BBA Honours
                4th year in Accounting 2016-2017
              </p>
              <hr />
              <h3 className="text-lg text-sky-700">LANGUAGES</h3>
              <p>
                Bangla: Native <br /> English: Comfortable
              </p>
              <hr />
              <h3 className="text-lg text-sky-700">HOBBIES</h3>
              <p>
                Personal Coding Projects, Playing Football, Open Source
                Contribution
              </p>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
