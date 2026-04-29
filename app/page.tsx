"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from"../components/Stats";
import Clients from"../components/Clients";
import Edge from"../components/Edge";
import Domain from"../components/Domain";
import TailoredCourses from"../components/TailoredCourses";
import WhoShouldJoin from "../components/WhoShouldJoin";
import Cat from "../components/Cat";
import HowItWorks from "../components/HowItWorks";
import Faqs from "../components/Faqs";
import Testimonials from  "../components/Testimonials";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Modal from "../components/Modal";


export default function Home(){
  const [open, setOpen] = useState(false);
  return(
    <div >
      <>
      <Navbar/>
      <Hero onEnquire={() => setOpen(true)} />
      <Stats/>
      <Clients/>
      <Edge/>
      <Domain/>
      <TailoredCourses/>
      <WhoShouldJoin/>
      <Cat/>
      <HowItWorks/>
      <Testimonials/>
      <Faqs onEnquire={() => setOpen(true)} />
      <Banner onEnquire={() => setOpen(true)} />
      <Footer onEnquire={() => setOpen(true)} />

      {/* MODAL */}
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </>
    </div>
  );
}