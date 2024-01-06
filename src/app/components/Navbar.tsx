import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setopen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  });
  return (
    <nav
      className={`fixed w-full z-[999] justify-between flex ${
        sticky ? "bg-white/60 text-gray-900" : "text-white"
      }`}
    >
      <h1 className="text-xl font-bold mx-7 my-3">PORTFOLIO</h1>
      <ul
        className={`text-gray-900 hidden px-10 font-medium rounded-bl-full items-center md:flex gap-8 py-5 text-sm bg-white ${
          sticky ? "md:bg-white/0" : "bg-white"
        }`}
      >
        <li>
          <Link href={"#home"}>HOME</Link>
        </li>
        <li>
          <Link href={"#about"}>ABOUT</Link>
        </li>
        <li>
          <Link href={"#skills"}>SKILLS</Link>
        </li>
        <li>
          <Link href={"#projects"}>PROJECTS</Link>
        </li>
        <li>
          <Link href={"#contact"}>CONTACT</Link>
        </li>
      </ul>
      <BiMenu
        onClick={() => setopen(!open)}
        className={`text-3xl md:hidden m-5 ${
          open ? "text-gray-900" : "text-gray-100"
        } z-[999]`}
      />
      <ul
        className={`flex flex-col justify-center gap-10 items-center text-lg md:hidden text-gray-900 absolute w-2/3 h-screen px-7 font-medium bg-white top-0 ${
          open ? "right-0" : "right-[999px]"
        }`}
      >
        <li onClick={() => setopen(false)} className="hover:text-cyan-600">
          <Link href={"#home"}>HOME</Link>
        </li>
        <li onClick={() => setopen(false)} className="hover:text-cyan-600">
          <Link href={"#about"}>ABOUT</Link>
        </li>
        <li onClick={() => setopen(false)} className="hover:text-cyan-600">
          <Link href={"#skills"}>SKILLS</Link>
        </li>
        <li onClick={() => setopen(false)} className="hover:text-cyan-600">
          <Link href={"#projects"}>PROJECTS</Link>
        </li>
        <li onClick={() => setopen(false)} className="hover:text-cyan-600">
          <Link href={"#contact"}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
