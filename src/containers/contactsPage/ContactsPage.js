import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameDuplicate = props.contacts.some(contact => contact.name === name);

    if (isNameDuplicate) {
      window.alert("This name already exists in your contacts.");
    } else {

      props.addContact({
        name: name,
        phone: phone,
        email: email
      });

      setName('');
      setPhone('');
      setEmail('');

      window.alert("Form submitted successfully!");

    };


  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm setName={setName} setPhone={setPhone} setEmail={setEmail}
          handleSubmit={handleSubmit} name={name} phone={phone}
          email={email} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={props.contacts} />
      </section>
    </div>
  );
};
