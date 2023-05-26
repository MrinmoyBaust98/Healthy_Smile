import React from "react";
import contactImage from "../../../assets/images/appointment.png";

const ContactSection = () => {
  return (
    <section className="my-6" style={{ background: `url(${contactImage})` }}>
      <div className="text-center pt-20">
        <p className="text-secondary text-xl font-bold my-2">CONTACT US</p>
        <p className=" text-4xl text-white mb-6 ">Stay Connected With Us</p>
      </div>
      <div className="flex justify-center items-center">
        <div className=" w-2/3 lg:w-1/3 ">
          <input
            type="text"
            className="w-full px-4 py-4 mt-6 border border-primary rounded-lg"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="w-full px-4 py-4 mt-6 border border-primary rounded-lg"
            placeholder="Subject"
          />
          <textarea
            className="w-full h-40 px-4 py-2 mt-6 border border-primary rounded-lg lg:h-60"
            placeholder="Your Massage"
          />
          <div class=" my-6 flex justify-center items-center ">
            <button className=" w-1/2 lg:w-1/3 btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-secondary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
