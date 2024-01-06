import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import React, { useState } from "react";
import project1 from "./project1.png";
import project2 from "./project2.jpg";
import project3 from "./project3.jpg";
import project4 from "./project4.jpg";


interface Project {
    img: any;
    name: string;
    github_link?: string;
  
  }

export default function Project() {
    const projects: Project[] = [
        { img: project1, name: "Portfolio", github_link: "https://github.com"  },
        { img: project2, name: "Fitness website", github_link: "https://github.com" },
        { img: project3, name: "CLI TODO List", github_link: "https://github.com"  },
        { img: project4, name: "CLI School Management", github_link: "https://github.com"  },
    ];
    const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  return (
    <section id="projects" className="mt-10">
      <div className="flex justify-center text-3xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-600">Projects</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg flex justify-center mb-3">
        My Awesome Work
      </p>
      <Swiper
  slidesPerView={1}
  spaceBetween={20}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  modules={[Pagination, Autoplay]}
  className="flex max-w-2xl gap-6 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
>
        {projects?.map((projects, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-700 rounded-xl"
          >
            <Image src={projects?.img} alt="" className="rounded lg" />
            <h3 className="text-xl my-4">{projects.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a href={projects.github_link} target="_blank" rel="noreferrer" className="text-cyan-600 bg-gray-800 rounded-full px-2 py-1 flex w-32 justify-center">Github</a>
          
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
