import React from "react";

export const ContactPicker = (props) => {

  return (
    <select value={props.value} className="select" name={props.name} id={props.id} onChange={props.onChange}>
      <option key="default"  value="">No Contact Selected</option>
      {props.contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
