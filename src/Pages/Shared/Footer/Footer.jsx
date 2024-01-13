import footerLogo from "../../../assets/logo/Black White Yellow Simple Initial Name Logo (1).png";
import footerImg from "../../../assets/footer image/istockphoto-1416335096-170667a.webp";
import { FaFacebook, FaGithub, FaHeadset, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt,  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-base-200 pt-10">
        <h3 className="text-2xl text-sky-700 ml-10">HAVE PROJECT IN MIND?</h3>
        <h1 className="text-4xl font-bold text-gray-700 mt-2 ml-10">Let,s Talk!</h1>
        <p className="text-lg mt-2 ml-10">
          I also offer Full Stack Development, and we can discuss your
          requirements in detail.<br/> Looking forward to working with you!
        </p>
        <img className="mx-auto w-full lg:h-32 mt-5 opacity-70" src={footerImg} alt="image" />
      </div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">QUICK LINKS</header>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Term Of Service</a>
          <a className="link link-hover">Credits</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title">OTHER PAGES</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Projects</a>
        </nav>
        <nav>
          <header className="footer-title">CONTACT DETAILS</header>
          <a className="link link-hover inline-flex items-center text-base gap-2"><FaMapMarkerAlt className="text-red-600"/>Khulna, Bangladesh</a>
          <a className="link link-hover inline-flex items-center text-base gap-2"> <FaHeadset className="text-red-600"/>soutammollick829@gmail.com</a>
          <a className="link link-hover inline-flex items-center text-base gap-2"><FaPhoneAlt className="text-red-600"/> +8801941238258</a>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img className="w-20" src={footerLogo} alt="" />
          <p>
            Soutam Mallick / Personal portfolio website <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/mallick.somudro" target="blank">
        <FaFacebook className="text-3xl hover:text-blue-500" />
        </a>
        <a href="https://www.linkedin.com/in/soutam-mallick-158897285/" target="blank">
        <FaLinkedin className="text-3xl hover:text-sky-600"/>
        </a>
        <a href="https://github.com/soutammollick829?tab=repositories" target="blank">
        <FaGithub className="text-3xl hover:text-green-400"/>
        </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
