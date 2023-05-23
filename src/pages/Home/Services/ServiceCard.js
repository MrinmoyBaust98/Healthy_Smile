import React from "react";

const ServiceCard = ({ service }) => {
  const { title, descrip, icon } = service;
  return (
    <div className=" my-6 card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={icon} alt="service-pic" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{descrip}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
