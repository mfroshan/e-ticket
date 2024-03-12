import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [style] = useState({
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 80px 0px",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={style}>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <LoginForm 
        setPassengerMail={props.setPassengerMail} 
        passengerMail={props.passengerMail} 
        setPassengerNid={props.setPassengerNid}
        passengerNid={props.passengerNid} 
        setPassengerName={props.setPassengerName}
        passengerName={props.passengerName} 
        setPassengerMobile={props.setPassengerMobile}
        passengerMobile={props.passengerMobile} 
        setPassengerPassword={props.setPassengerPassword}
        passengerPassword={props.passengerPassword} 
      />
    </div>
  );
};

export default Login;
