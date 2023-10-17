import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState([{name: "Jay TeeX", phone: "123456789", email:"j.t@mail.com"}]);
  const [appointments, setAppointments] = useState([{name: "Daily Stand Up", contact: "Jay TeeX", date: "17.10.2023", time: "10:00"}]);

  const addContact = (contactParameter) => {
    setContacts([
      ...contacts,
      {
        name: contactParameter.name,
        phone: contactParameter.phone,
        email: contactParameter.email
      }
    ])
  };

  const addAppointment = (appointmentParameter) => {
    setAppointments([
      ...appointments,
      {
        name: appointmentParameter.name,
        contact: appointmentParameter.contact,
        date: appointmentParameter.date,
        time: appointmentParameter.time
      }
    ])
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
