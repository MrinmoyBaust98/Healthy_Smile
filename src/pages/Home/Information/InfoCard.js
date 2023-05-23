import React from "react";

const InfoCard = ({ card }) => {
  const { title, descrip, logo, bgClass } = card;
  return (
    <div className={`card card-side  px-6 shadow-2xl ${bgClass} text-white `}>
      <figure>
        <img src={logo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{descrip}</p>
      </div>
    </div>
  );
};

export default InfoCard;
