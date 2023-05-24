import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../Information/InfoCards";
import ServiceCards from "../Services/ServiceCards";
import ServiceBanner from "../ServiceBanner/ServiceBanner";

const Home = () => {
  return (
    <div className="px-6 ">
      <Banner />
      <InfoCards />
      <ServiceCards />
      <ServiceBanner />
    </div>
  );
};

export default Home;
