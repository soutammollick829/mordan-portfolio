import { FaCode, FaDesktop, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-[#E9BA48] mb-20 py-20">
      <h4 className="text-center text-4xl font-bold text-sky-700 mb-10 font-serif">
        What I Do
      </h4>
      <div className="bg-[rgb(255,245,203)] mx-10 rounded-lg space-y-5 p-10 text-black">
        <FaCode className="text-6xl font-bold text-sky-700" />
        <h4 className="text-2xl font-bold">What You Get:</h4>
        <li>
          <strong>Adherence to industry best practices:</strong> Our code is
          developed following the most up-to-date industry standards, ensuring
          the highest quality and reliability.
        </li>
        <li>
          <strong>Clean and properly commented code:</strong> The codebase is
          meticulously organized with clear comments, promoting readability and
          facilitating future maintenance.
        </li>
        <li>
          <strong>Modular code for ease of debugging and reusability:</strong>{" "}
          We implement a modular approach, allowing for seamless debugging and
          the effortless reuse of code components.
        </li>
        <li>
          <strong>Thoroughly-tested functionalities:</strong> Each functionality
          undergoes rigorous testing, guaranteeing its reliability and stability
          in various scenarios.
        </li>
      </div>
      <div className="lg:flex justify-center items-center gap-5 mx-10">
        <div className="bg-[rgb(255,245,203)] rounded-lg space-y-1 mt-5 p-10 lg:w-full text-black">
          <FaLaptopCode className="text-6xl font-bold text-sky-700" />
          <h4 className="text-2xl font-bold">What I Offer:</h4>
          <li>HTML5,CSS3</li>
          <li>Tailwind CSS,Bootstrap</li>
          <li>React JS, JavaScript</li>
          <li>Server Side Rendering (MongoDB)</li>
          <li>Expert with Node/Express Toolkit</li>
          <li>Performance optimization</li>
        </div>
        <div className="bg-[rgb(255,245,203)] rounded-lg space-y-1 p-10 mt-5 lg:w-full text-black">
          <FaDesktop className="text-6xl font-bold text-sky-700" />
          <h4 className="text-2xl font-bold">Why Choose Me:</h4>
          <li>Dedicated designer for Front-end</li>
          <li>Complete quality assurance</li>
          <li>Responsive designs</li>
          <li>On-time delivery</li>
          <li>Unlimited revisions!</li>
          <li>Professional branding & logo support.</li>
        </div> 
      </div>
    </div>
  );
};

export default Services;
