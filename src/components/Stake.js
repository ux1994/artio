import React from "react";
import { useState } from "react";
import { Button, CloseButton, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Stakeinfo from "./Stakeinfo";
function Bond()
{
    return (
        <div className="container-fluid">
            <div className="row navbg">
                <Header></Header>
                <Stakeinfo></Stakeinfo>
            </div>
        </div>
    );
}
export default Bond;