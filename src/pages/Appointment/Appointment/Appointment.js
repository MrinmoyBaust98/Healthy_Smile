import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Footer from "../../../Shared/Footer/Footer";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="px-6">
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointment selectedDate={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
