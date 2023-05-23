import React from "react";
import timeLogo from "../../../assets/icons/clock.svg";
import locationLogo from "../../../assets/icons/marker.svg";
import phoneLogo from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Opening Hours",
      descrip: "The period beginning at 9.30 A.M. And ending at 5.30 P.M.",
      logo: timeLogo,
      bgClass: "bg-secondary",
    },
    {
      id: 2,
      title: "Visit Our Location",
      descrip: "R959+8MP, Begum Rokeya Avenue, Dhaka 1216",
      logo: locationLogo,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      title: "Contact Us Now",
      descrip: "phn:+8801755555555",
      logo: phoneLogo,
      bgClass: "bg-secondary",
    },
  ];
  return (
    <div className=" my-28 grid gap-6 grid-cols-1 lg:grid-cols-3">
      {cardData.map((card) => (
        <InfoCard card={card} key={card.id}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
