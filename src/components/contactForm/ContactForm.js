import React from "react";

export const ContactForm = (props) => {
  
  return (
    <>
      <form onSubmit={(e) => props.handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input value={props.name} defaultValue="" className="input" type="text" id="name" name="name" onChange={(e) => props.setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input value={props.phone} defaultValue="" className="input" type="tel" id="phone" name="phone" pattern="^\d{6-12}$" onChange={(e) => props.setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input value={props.email} defaultValue="" className="input" type="email" id="email" name="email" onChange={(e) => props.setEmail(e.target.value)} />
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
    </>
  );
};

