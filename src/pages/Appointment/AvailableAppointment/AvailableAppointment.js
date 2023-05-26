import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentoption, setAppointmentOption] = useState([]);

  // state for modal click handle
  const [treatmentName, setTreatmentName] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);
  return (
    <section>
      <p className="text-2xl text-center text-secondary font-bold my-6">
        Available Services On {format(selectedDate, "PP")}
      </p>
      <div className=" my-8 grid gap-10 grid-cols-1 lg:grid-cols-3">
        {appointmentoption.map((option) => (
          <AppointmentOption
            appointmentOption={option}
            key={option._id}
            setTreatment={setTreatmentName}
          ></AppointmentOption>
        ))}
      </div>
      {treatmentName && (
        <BookingModal
          treatmentName={treatmentName}
          setTreatmentName={setTreatmentName}
          selectedDate={selectedDate}
        />
      )}
    </section>
  );
};

export default AvailableAppointment;
