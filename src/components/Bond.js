import React from "react";
import { useState } from "react";
import { Button, CloseButton, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Bondinfo from "./Bondinfo";
function Bond()
{
    return (
        <div className="container-fluid">
            <div className="row navbg">
                <Header></Header>
                <Bondinfo></Bondinfo>
            </div>
        </div>
    );
}
export default Bond;