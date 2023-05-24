import React from "react";
import serviceBanner from "../../../assets/images/treatment.png";

const ServiceBanner = () => {
  return (
    <div className="hero my-24">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={serviceBanner}
          className="lg:w-1/3 shadow-2xl"
          alt="service-banner"
        />
        <div className=" flex-col-1 lg:text-center">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms!
          </h1>
          <p className="py-6 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Take Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
