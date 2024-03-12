import React, { useState } from 'react';
import ContactTable from '../components/ContactTable';
import NavbarUser from '../components/NavbarUser';
import SidebarUser from '../components/SidebarUser';

const ContactUsUser = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <SidebarUser
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setPassengerMail={props.setPassengerMail}
        passengerMail={props.passengerMail}
      />
      <NavbarUser
        toggleSidebar={toggleSidebar}
        setPassengerMail={props.setPassengerMail}
        passengerMail={props.passengerMail}
      />
      <ContactTable />
    </div>
  );
};

export default ContactUsUser;
