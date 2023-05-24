import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../Information/InfoCards";
import ServiceCards from "../Services/ServiceCards";
import ServiceBanner from "../ServiceBanner/ServiceBanner";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div className="px-6 ">
      <Banner />
      <InfoCards />
      <ServiceCards />
      <ServiceBanner />
      <MakeAppointment />
    </div>
  );
};

export default Home;
