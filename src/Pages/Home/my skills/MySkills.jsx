import Marquee from "react-fast-marquee";
import {
  FaCss3,
  FaDatabase,
  FaDownload,
  FaFigma,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Html",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "CSS",
    uv: 3700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "JS",
    uv: 3500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "React.js",
    uv: 3980,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "MongoDB",
    uv: 2500,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Node JS",
    uv: 3590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Express JS",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const MySkills = () => {
  return (
    <>
      <h4 className="text-2xl font-semibold uppercase mt-10 mb-10 mx-5 text-[#E9BA48] font-serif text-center underline">
        my skills
      </h4>
      <div className="lg:flex justify-center items-center space-y-7 lg:gap-5 mb-5 lg:mb-20">
        <div className="text-base font-semibold px-5 lg:px-0 text-center lg:text-start space-y-2 lg:space-y-10">
          <li>
            HTML, CSS, Tailwind, bootstrap, JavaScript React.JS, ES6, Firebase,
          </li>
          <li>MongoDB, Node JS, Express JS.</li>
          <li>
            Tools : VS code, GitHub, Chrome dev-tools, Vercel, Netlify, Figma.
          </li>
          <li>Front End & Back End Coding</li>
          <li>Team Leader, Problem - Solving</li>
          <button className="btn btn-outline rounded-none text-white border-1 bg-sky-700 border-sky-700  uppercase">
            Download Resume <FaDownload />
          </button>
        </div>
        <div>
          <BarChart
            width={390}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="uv"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      <Marquee pauseOnHover>
        <div className="flex text-7xl gap-10 justify-center mb-10 lg:mb-20">
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaReact />
          <FaDatabase />
          <FaNodeJs />
          <FaFigma />
          <FaGit />
        </div>
      </Marquee>
    </>
  );
};

export default MySkills;
