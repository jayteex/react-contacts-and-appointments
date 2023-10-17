import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [day, month, year] = new Date()
    .toLocaleDateString("de-DE")
    .split(".");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = (props) => {

  return (
    <>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input value={props.name} defaultValue="" className="input" type="text" id="title" name="title" onChange={(e) => props.setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <ContactPicker
            contacts={props.contacts}
            onChange={(e) => props.setContact(e.target.value)}
            value={props.contact}
            name="contact"
            id="contact"
          />
          <div>
          </div>
          <label htmlFor="date">Date:</label>
          <input value={props.date} defaultValue="" className="input" type="date" id="date" name="date" onChange={(e) => props.setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input min={getTodayString()} value={props.time} defaultValue="" className="input" type="time" id="time" name="time" onChange={(e) => props.setTime(e.target.value)} />
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
    </>
  );
};
