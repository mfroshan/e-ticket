import React, { useState } from 'react';
import Header from '../components/Header';
import HomeInfoDiv from '../components/HomeInfoDiv';
import Navbar from '../components/Navbar';
import PaymentLogos from '../components/PaymentLogos';
import Sidebar from '../components/Sidebar';

const Home = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
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

export default Home;
