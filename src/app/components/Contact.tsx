
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";
// import { Button } from "@/components/ui/button";

export default function Contact() {
  const contact_info = [
    { icon: <AiOutlineMail />, text: "ahmedullahfarooqi8@gmail.com" },
    { icon: <AiOutlinePhone />, text: "03186828980" },
    {
      icon: <AiFillEnvironment />,
      text: "CM 2/3 Aswan Town Malir City Karachi",
    },
  ];
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="py-10 px-3 text-white text-center mt-8">
      <div className="text-3xl font-semibold flex gap-2 justify-center">
        <h3>Contact</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-3xl bg-gray-800 md:p-6 p-2 rounded-lg m-auto">
        <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Name"
            className="bg-gray-600 rounded-md border-none p-2 text-1xl placeholder-slate-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-600 rounded-md border-none p-2 text-1xl placeholder-slate-500"
          />
          <textarea
            placeholder="Your Message"
            className="bg-gray-600 rounded-md border-none p-2 text-1xl placeholder-slate-500"
            rows={10}
          ></textarea>
          <button className=" rounded-2xl p-1 h-9 bg-cyan-600 text-white">Send Message</button>
        </form>
        <ul className="flex flex-col gap-7 list-none">
          {contact_info?.map((contact, i) => (
            <li
              key={i}
              className="flex flex-row text-left gap-4 flex-wrap items-center"
            >
              <div className="min-w-[3.5rem] text-2xl minh-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">{contact?.icon}
              </div>
                <div className="md:text-base text-xs break-words">{contact?.text}</div>
            </li>
          ))}
        </ul>
       
      </div>
    </section>
  );
}
