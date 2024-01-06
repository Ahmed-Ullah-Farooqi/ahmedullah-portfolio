import { FaCss3, FaHtml5 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, level: "Advance" },
    { icon: <FaCss3 />, level: "Expert" },
    { icon: <BiLogoTypescript />, level: "Intermediate" },
    { icon: <SiNextdotjs />, level: "Intermediate" },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 mt-8 text-gray-100 text-center">
      <div className="flex justify-center text-3xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Skills</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
      <ul className="flex items-center justify-center mt-12 gap 10 flex-wrap">{skills?.map((skills, i) => (
          <li key={i} className="m-5">
            <div className="text-5xl flex justify-center">{skills?.icon}</div>
            <div className="text-1xl">{skills?.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
