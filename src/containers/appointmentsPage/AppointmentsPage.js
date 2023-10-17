import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
 
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
 
    const isNameDuplicate = props.appointments.some(appointment => appointment.name === name)

    if (isNameDuplicate) {
      window.alert("This appointment already exists.");
    } else {

      props.addAppointment({
        name: name,
        contact: contact,
        date: date,
        time: time
      });

      setName('');
      setContact('');
      setDate('');
      setTime('');

      window.alert("Form submitted successfully!");

    };



  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm setName={setName} setContact={setContact} setDate={setDate}
          setTime={setTime} handleSubmit={handleSubmit} contacts={props.contacts}
          name={name} contact={contact} date={date} time={time} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={props.appointments} />
      </section>
    </div>
  );
};