

import profile from "./profile.png"
import {FaInstagram, FaLinkedin, FaFacebook, FaTwitter} from "react-icons/fa";
import Image from "next/image";


export default function Hero() {
    const social_media = [
        { icon: <FaInstagram/> },
        { icon: <FaFacebook/> },
        { icon: <FaLinkedin/> },
        { icon: <FaTwitter/> },
    ];
    const contactClickFunction = () => {
      const contactSection = document.querySelector("#contact");
      if(contactSection){
        contactSection.scrollIntoView();
      }
    }

  return (
    <section id="home" className="min-h-screen flex py-10 gap-10 px-16 md:flex-row  flex-col items-center">
       <div className="w-96">
       <Image
        src={profile}
        alt="Profile"
        className="bg-cyan-950 rounded-full md:w-10/12 object-cover flex-1 flex items-center justify-center h-full"
      />
      </div>
      <div className="flex-1 flex-col">
        <h1 className="text-cyan-600 md:text-4xl text-2xl font-bold">Hello!</h1>
        <h1 className="md:text-2xl text-1xl md:leading-normal leading-10 text-white font-semibold">My Name is Ahmed Ullah Farooqi.</h1>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">FullStack Developer</h4>
        <a className="bg-cyan-600 px-4 py-1 inline-block mt-7 rounded-full cursor-pointer" onClick={contactClickFunction}>Contact Me</a>
        <ul className="mt-8 text-3xl flex text-gray-600 gap-5">{social_media.map((icon,i)=><li key={i} className="hover:text-white cursor-pointer">{icon?.icon}</li>)}</ul>
      </div>
    </section>
  );
}
