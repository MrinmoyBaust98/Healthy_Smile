import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../Information/InfoCards";
import ServiceCards from "../Services/ServiceCards";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
import ContactSection from "../ContactSection/ContactSection";

const Home = () => {
  return (
    <div className="px-6 ">
      <Banner />
      <InfoCards />
      <ServiceCards />
      <ServiceBanner />
      <MakeAppointment />
      <Testimonial />
      <ContactSection />
    </div>
  );
};

export default Home;
