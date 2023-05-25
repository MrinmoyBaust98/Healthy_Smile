import React from "react";
import bgApBanner from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="my-8">
      <section className="text-center text-2xl text-accent font-bold">
        <p> Pick Up Your Appointment Date</p>
      </section>
      <section className="my-16 lg:flex flex-row-reverse justify-around">
        <img
          src={bgApBanner}
          className="lg:w-2/5 shadow-xl rounded-l  "
          alt="AppointmentBanner-img"
        />
        <div className=" py-6 lg:border border-gray-50 shadow-xl rounded-l ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </section>
    </div>
  );
};

export default AppointmentBanner;
