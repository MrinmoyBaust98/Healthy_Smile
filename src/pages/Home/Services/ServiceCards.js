import React from "react";
import treatmentLogo from "../../../assets/images/fluoride.png";
import fillingLogo from "../../../assets/images/cavity.png";
import teethtLogo from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const servicedata = [
    {
      id: 1,
      title: "Fluoride Treatment",
      descrip:
        "Fluoride treatment refers to the application of fluoride to the teeth as a preventive measure against tooth decay and cavities. Fluoride is a mineral that helps strengthen tooth enamel. It can also reverse early-stage tooth decay by remineralizing the enamel.",
      icon: treatmentLogo,
    },
    {
      id: 2,
      title: "Cavity Filling",
      descrip:
        "Cavity filling, also known as dental filling or tooth restoration, is a common dental procedure used to treat tooth decay or cavities. When a tooth develops a cavity, it means that the tooth structure has been damaged by bacteria, resulting in a small hole or pit.",
      icon: fillingLogo,
    },
    {
      id: 3,
      title: "Teeth Whitening",
      descrip:
        "Teeth whitening is a cosmetic dental procedure aimed at lightening the color of teeth and removing stains or discoloration. It is a popular treatment for enhancing the appearance of a person's smile. Teeth can become stained or discolored due to various factors.",
      icon: teethtLogo,
    },
  ];
  return (
    <>
      <div className="text-center">
        <p className="text-xl text-secondary font-bold">OUR SERVICES</p>
        <p className="text-2xl mt-1 font-bold">Services We Provide</p>
      </div>

      {/* card parts */}

      <div className=" mt-12 grid gap-6 grid-cols-1 lg:grid-cols-3">
        {servicedata.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default ServiceCards;
