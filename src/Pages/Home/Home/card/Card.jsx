import "./card.css";

import cardImg1 from "../../../../assets/project image/project5.png";
import cardImg2 from "../../../../assets/project image/project2.png";
import cardImg3 from "../../../../assets/project image/project3.png";
import cardImg4 from "../../../../assets/project image/project4.png";
import cardImg5 from "../../../../assets/project image/project1.png";
import cardImg6 from "../../../../assets/project image/project6.png";
import { FaCode, FaGithub, FaGlobe } from "react-icons/fa";
import { Bounce} from "react-awesome-reveal";

const Card = () => {
  return (
    <>
    <h4 className="text-2xl font-semibold text-center uppercase text-[#E9BA48] font-serif underline mt-10">my works</h4>
    <Bounce>
    <p className="text-2xl lg:text-5xl font-bold text-center text-sky-700 mb-5 lg:mb-16 mx-5">The Most Recent Projects I've Been Working On!</p>
    </Bounce>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 ml-12 lg:ml-0 lg:gap-x-8">
        <div className="card">
          <div className="image">
            <img className="h-80" src={cardImg1} alt="project image" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Easy to learn music school</h1>
              <p>
                Featuring a dedicated admin route, instructors dashboard and a
                students dashboard to streamline the learning experience for all
                stakeholders
              </p>
              <a href="https://hello-firbase-ea76c.web.app/" target="blank">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700 mb-2 uppercase">
                <FaGlobe />
                Live Demo Website
              </button>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/soutammollick829/easy-to-learn-music-school" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Front-End
                </button>
                </a>
                <a href="https://github.com/soutammollick829/easy-to-learn-music-school-servr" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Back-End
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card 2  */}
        <div className="card">
          <div className="image">
            <img className="h-80" src={cardImg2} alt="project image" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Happy shop E-commerce</h1>
              <p>
                This is a modern e-commerce website. User can easily add to cart
                products. Deleted any product and see selected products.
              </p>
              <a href="https://6597dbe6e3b89405830e66bd--calm-madeleine-72f765.netlify.app/" target="blank">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700 mb-2 uppercase">
                <FaGlobe />
                Live Demo Website
              </button>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/soutammollick829/happy-shop-ecommarce" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Front-End
                </button>
                </a>
                <a href="https://github.com/soutammollick829/happy-shop-ecommarce-server" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Back-End
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card 3  */}
        <div className="card">
          <div className="image">
            <img className="h-80" src={cardImg3} alt="product image" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Super hero kid toy website</h1>
              <p>
                Developed a responsive homepage. Users are prompted to log in
                before adding a new toy for sale.displaying the selected orders
                in a table.
              </p>
              <a href="https://64a300d4f8f8e6384cff4868--stunning-centaur-ad2163.netlify.app/" target="blank">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700 mb-2 uppercase">
                <FaGlobe />
                Live Demo Website
              </button>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/soutammollick829/super-hero-kid-website-client" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Front-End
                </button>
                </a>
                <a href="https://github.com/soutammollick829/super-hero-kid-website-server" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Back-End
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card 4  */}
        <div className="card">
          <div className="image">
            <img className="h-80" src={cardImg5} alt="project image" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Bistro boss restaurant</h1>
              <p>
                Designed and developed the website for creating an engaging
                online platform to showcase the restaurant's offerings, menus,
                and services.
              </p>
              <a href="https://64a2e315ac33f71f0ffd4cb6--superb-banoffee-96b16b.netlify.app/" target="blank">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700 mb-2 uppercase">
                <FaGlobe />
                Live Demo Website
              </button>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/soutammollick829/bistro-boss-restarurent-client" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Front-End
                </button>
                </a>
                <a href="https://github.com/soutammollick829/bistro-boss-server" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Back-End
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card 5  */}
        <div className="card">
          <div className="image">
            <img className="h-80" src={cardImg4} alt="project image" />
          </div>
          <div className="details">
            <div className="center">
              <h1>Testy food recipes website</h1>
              <p>
                Dynamic website featuring renowned Chinese chefs and their
                signature recipes, providing users with a delightful culinary
                experience.
              </p>
              <a href="https://dancing-manatee-98dcd6.netlify.app" target="blank">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700 mb-2 uppercase">
                <FaGlobe />
                Live Demo Website
              </button>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/soutammollick829/recipes-testy-food-client" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Front-End
                </button>
                </a>
                <a href="https://github.com/soutammollick829/recipes-testy-food-server" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Back-End
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card 6  */}
        <div className="card">
          <div className="image">
            <img className="h-80" src={cardImg6} alt="project image" />
          </div>
          <div className="details">
            <div className="center">
              <h1>build career educational</h1>
              <p>
                Developed a educational website, seamlessly blending front-end
                aesthetics with valuable content to guide users on their
                professional journey
              </p>
              <a href="https://tranquil-gingersnap-095499.netlify.app/" target="blank">
              <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700 mb-2 uppercase">
                <FaGlobe />
                Live Demo Website
              </button>
              </a>
              <div className="flex space-x-2">
                <a href="https://github.com/soutammollick829/build-career-clint" target="blank">
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Front-End
                </button>
                </a>
                <button className="btn btn-sm btn-outline rounded-none text-white bg-sky-700">
                  <FaGithub /> Back-End
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
