import React, { useState } from "react";
import bgApBanner from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="my-8">
      <section className="text-center text-2xl text-accent font-bold">
        <p> Pick Your Appointment Date</p>
      </section>
      <section className="my-16 lg:flex flex-row-reverse justify-around">
        <img
          src={bgApBanner}
          className="lg:w-2/5 shadow-xl rounded-l  "
          alt="AppointmentBanner-img"
        />
        <div className="px-24 py-6 lg:py-0 border border-gray-50 shadow-xl rounded-l ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </section>
      {/* <p> You Have Select Dtae: {format(selectedDate, "PP")}</p> */}
    </div>
  );
};

export default AppointmentBanner;
