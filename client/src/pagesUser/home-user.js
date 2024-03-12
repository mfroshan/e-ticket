import React, { useState } from 'react';
import Header from '../components/Header';
import HomeInfoDiv from '../components/HomeInfoDiv';
import NavbarUser from '../components/NavbarUser';
import PaymentLogos from '../components/PaymentLogos';
import SidebarUser from '../components/SidebarUser';

const HomeUser = (props) => {
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
      <Header 
        setPassengerMail={props.setPassengerMail} 
        passengerMail={props.passengerMail}
        setFromStationID={props.setFromStationID}
        fromStationID={props.fromStationID}
        setToStationID={props.setToStationID}
        toStationID={props.toStationID}
        setFromStationPosition={props.setFromStationPosition}
        fromStationPosition={props.fromStationPosition}
        setToStationPosition={props.setToStationPosition}
        toStationPosition={props.toStationPosition}
        setJourneyDate={props.setJourneyDate}
        journeyDate={props.journeyDate}
        setClassID={props.setClassID}
        classID={props.classID}
        setNoOfPassengers={props.setNoOfPassengers}
        noOfPassengers={props.noOfPassengers}
        setSelectedTrainID={props.setSelectedTrainID}
        selectedTrainID={props.selectedTrainID}
      />
      <HomeInfoDiv />
      <hr></hr>
      <PaymentLogos />
      <hr></hr>
    </div>
  );
};

export default HomeUser;
