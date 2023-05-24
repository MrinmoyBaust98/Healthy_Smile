import React from "react";

const ReviewCard = ({ rev }) => {
  const { review, img, name, city } = rev;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-justify">{review}</p>
        <div className="flex items-center ">
          <div className="avatar py-2">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="reviewer-img" />
            </div>
          </div>
          <div className="mx-4">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-xl ">{city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
