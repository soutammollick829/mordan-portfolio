import {
  FaEnvelope,
  FaFacebookSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h4 className="text-2xl font-semibold text-center uppercase text-[#E9BA48] font-serif underline">
        contact me{" "}
      </h4>
      <p className="text-3xl lg:text-5xl font-bold text-center text-sky-700 mt-2 lg:mb-10">
        I Want To Hear From You
      </p>
      <section
        className="py-6 dark:bg-gray-800 dark:text-gray-50 mb-10 lg:mb-20 bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/C1xN9cK/vintage-crumpled-paper-textured-background-53876-103940.jpg)",
        }}
      >
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6 text-black">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-2xl text-[#E9BA48]" />
                <span>Khulna, bangladesh</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl text-[#E9BA48]" />
                <span>+8801941238258</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-[#E9BA48]" />
                <span>soutammollick829@gmail.com</span>
              </p>
            </div>
            <div className="flex text-5xl mt-10 space-x-10">
              <div className="tooltip" data-tip="Click Here">
                <FaFacebookSquare className="text-blue-500" />
              </div>
              <div className="tooltip" data-tip="Click Here">
                <FaLinkedin className="text-sky-700" />
              </div>
              <div className="tooltip" data-tip="Click Here">
                <FaTwitter className="text-sky-400" />
              </div>
            </div>
          </div>
          <form action="https://formspree.io/f/xzbndarn" method="POST" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 text-black">
            <label className="block">
              <span className="mb-1 font-bold">Full name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="block w-full rounded-md shadow-sm h-10 pl-5 border-2 border-[#E9BA48] mt-2 dark:bg-gray-800 focus:ring focus:ri focus:ri"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-bold">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 h-10 pl-5 border-2 border-[#E9BA48] mt-2"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-bold">Message</span>
              <textarea
                rows="3"
                name="message"
                placeholder="Your text type here.."
                className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800 px-5 border-2 border-[#E9BA48] mt-2"
              ></textarea>
            </label>
            <button type="submit" className="btn btn-outline rounded-none text-black border-0 border-1 bg-[#E9BA48] uppercase">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
