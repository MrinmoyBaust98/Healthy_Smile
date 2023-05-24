import React from "react";
import doctorImage from "../../../assets/images/doctor.png";
import bgAppointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section className="my-20" style={{ background: `url(${bgAppointment})` }}>
      <div className="hero h-[512px]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctorImage}
            className="-mt-32 hidden lg:block lg:w-1/2"
            alt="doctor-img"
          />
          <div>
            <h4 className="text-secondary text-2xl font-bold">Appointment</h4>
            <h1 className="mt-6 text-4xl text-white font-bold">
              Make an Appointment Today
            </h1>
            <p className="py-6 text-justify text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary font-bold bg-gradient-to-r from-primary to-secondary text-blue font-bold">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
