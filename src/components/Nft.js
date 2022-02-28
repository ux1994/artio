import React from "react";
import { useState } from "react";
import { Button, CloseButton, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Nftinfo from "./Nftinfo";
function Nft()
{
    return (
        <div className="container-fluid">
            <div className="row navbg">
                <Header></Header>
                <Nftinfo></Nftinfo>
            </div>
        </div>
    );
}
export default Nft;