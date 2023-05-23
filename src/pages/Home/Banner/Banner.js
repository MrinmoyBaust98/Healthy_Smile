import React from "react";
import bannerImage from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero my-8 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImage} className="w-1/2 rounded-lg " alt="banner-img" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
