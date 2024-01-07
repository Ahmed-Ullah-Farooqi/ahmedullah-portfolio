import { Content } from "next/font/google";

export default function About() {
  const Info = [
    { text: "Year Experience", count: "01" },
    { text: "Project Completed", count: "10" },
    { text: "Companies Work", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-3xl font-semibold mt-8 flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold">My Introduction</p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-2-6xl mx-auto text-gray-300 mt-5">
        <p className="text-justify leading-7 w-11/12 mx-auto">
          My name is Ahmed Ullah Farooqi and I hold a bachelors degree from a
          Urdu Federal University. I have been working in the accounts
          department for the past two years, leveraging my education in the
          field. After gaining valuable experience in the accounts department for
          two years, I have recently transitioned to the dynamic field of
          programming. I have acquired proficiency in languages such as
          TypeScript, JavaScript, and Next.js, driven by a strong passion for
          creating innovative and efficient solutions. Eager to broaden my
          programming horizons, I am committed to continuous learning and growth
          in this exciting and ever-evolving field.
        </p>
        <ul className="mt-10 flex items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i} className="flex md:flex-row md:gap-2 ">
              <div className="flex-col">
                <div className="flex text-center items-center justify-center">
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content?.count}
                  </h3>
                  <h3 className="text-cyan-600 font-bold text-2xl">+</h3>
                </div>
                <h3 className="md:text-base text-xs">{content?.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
