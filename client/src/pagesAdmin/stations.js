import React, { useState } from 'react';
import Header from '../components/Header';
import HomeInfoDiv from '../components/HomeInfoDiv';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import StationList from '../components/StationList';

const HomeAdmin = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <AdminSidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                setAdminID={props.setAdminID}
                adminID={props.adminID}
            />
            <AdminNavbar
                toggleSidebar={toggleSidebar}
                setAdminID={props.setAdminID}
                adminID={props.adminID}
            />
            <StationList />
        </div>
    );
};

export default HomeAdmin;
