import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatmentName, setTreatmentName, selectedDate }) => {
  const { name, slots } = treatmentName; //Means Appointment options

  // control from onsubmit
  const handleBooking = (event) => {
    // event.preventdefault();
    // after submit modal close
    setTreatmentName(null);
  };

  return (
    <>
      <input
        type="checkbox"
        id="bookingAppointmentModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingAppointmentModal"
            className="btn btn-sm btn-accent btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form
            onSubmit={handleBooking}
            className=" mt-8 grid grid-cols-1 gap-4"
          >
            <input
              type="text"
              disabled
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="number"
              placeholder="Phon Number"
              className="input input-bordered w-full "
            />

            <br />
            <input
              type="submit"
              value="Submit"
              className="w-full btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
