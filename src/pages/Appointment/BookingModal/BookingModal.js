import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatmentName, selectedDate }) => {
  const { name, slots } = treatmentName; //Means Appointment options
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

          <form className=" mt-8 grid grid-cols-1 gap-4">
            <input
              type="text"
              disabled
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full "
            />
            <select className="select select-bordered w-full ">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              placeholder="Phon Number"
              className="input input-bordered w-full "
            />

            <br />
            <input
              type="button"
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
