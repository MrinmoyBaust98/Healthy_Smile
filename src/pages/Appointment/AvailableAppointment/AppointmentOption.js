import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card border border-gray-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-center text-2xl font-bold text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Speces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="bookingAppointmentModal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
