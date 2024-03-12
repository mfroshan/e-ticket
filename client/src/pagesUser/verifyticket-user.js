import React, { useState } from 'react';
import NavbarUser from '../components/NavbarUser';
import SidebarUser from '../components/SidebarUser';
import TicketVerification from '../components/TicketVerification';

const VerifyTicket = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [style] = useState({
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 80px 0px",
  });
  const [message, setMessage] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={style}>
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
      <TicketVerification message={message} setMessage={setMessage} />
    </div>
  );
};

export default VerifyTicket;
