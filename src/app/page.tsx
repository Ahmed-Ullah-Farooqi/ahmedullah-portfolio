"use client"

import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Icon from "./components/icon/icon";

export default function Home (){
    return(
        <>
        <Navbar/>
        <Hero />
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
      
    )
}