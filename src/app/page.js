import Brands from "./components/Home/Brands";
import Case from "./components/Home/Case";
import Contact from "./components/Home/Contact";
import Hero from "./components/Home/Hero";
import Newsletter from "./components/Home/Newsletter";
import Pricing from "./components/Home/Pricing";
import Process from "./components/Home/Process";
import Service from "./components/Home/Service";
import Team from "./components/Home/Team";
import Testimonial from "./components/Home/Testimonial";


// app/components/HomeSections.jsx
export default function Home() {
  return (
    <>
    <Hero/>
    <Service/>
    <Process/>
    <Brands/>
    <Case/>
    <Testimonial/>
    <Pricing/>
    <Contact/>
    <Newsletter/>
    </>
  );
}

