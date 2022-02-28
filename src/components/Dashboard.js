import React from "react";
import { useState } from "react";
import { Button, CloseButton, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Dashboardinfo from "./Dashboardinfo";
function Dashboard()
{
    return (
        <div className="container-fluid">
            <div className="row navbg">
                <Header></Header>
                <Dashboardinfo></Dashboardinfo>
            </div>
        </div>
    );
}
export default Dashboard;