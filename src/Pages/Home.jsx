import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import VisionMission from "../Components/VisionMission";
import WhatWeDo from "../Components/WhatWeDo";
import Impact from "../Components/Impact";
import Activities from "../Components/Activities";
import Team from "../Components/Team";
import Gallery from "../Components/Gallery";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {

  return (

    <>

      <Navbar />

      <main id="home">

        <Hero />
        <About />
        <VisionMission />
        <WhatWeDo />
        <Impact />
        <Activities />
        <Team />
        <Gallery />
        <Contact />
        <Footer />

      </main>

    </>

  );

}