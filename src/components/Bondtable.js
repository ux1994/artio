import react from "react";
import { useState } from "react";
import { Button, CloseButton, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Bondtable({ bond, price, roi, duration }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <><div className="mt-4">
            <div className="row align-items-center tablebg m-auto justify-content-center">
                <div className="col-lg-3 col-12 box">
                    <div className="row">
                        <div className="col-7 col-lg-12">
                            <div className=" align-items-center mob   d-flex ">
                                <img src="images/crypto.png " />
                                <p className="llp "> {bond} <br />
                                    <span className="gradd ">View Asset</span> <img src="images/boxicon.png" /> </p>
                            </div>
                        </div>
                        <div className="col-5 desk">
                            <div className="d-flex align-items-center ">
                                <a href="" data-toggle="modal" data-target="#exampleModal"> <img src="images/vertibutton.png" className="btnimg" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-3">
                    <p className="tablemobiledis desk">Price</p>
                    <p className="llp  t">${price} </p>
                </div>
                <div className="col-lg-2 col-3">
                    <p className="tablemobiledis desk">ROI</p>
                    <p className="lllp t">{roi}% </p>
                </div>
                <div className="col-lg-2 col-4">
                    <p className="tablemobiledis desk">DURATION</p>
                    <p className="llp t">{duration} Days </p>
                </div>
                <div className="col-lg-3 bt">
                    <a href="#" onClick={handleShow}> <img src="images/tablebutton.png" alt="" /></a>
                </div>
            </div>
        </div><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <div class=" align-items-center mob d-flex">
                        <img src="images/crypto.png " />
                        <p class="lp ">BTC<br />
                            <span class="btc ">Fixed term for 30 days </span> </p>
                    </div>
                    

                </Modal.Header>
                <Modal.Body>
                <div class="row">
                        <div class="col-6">
                            <p class="pr">BOND PRICE</p>
                            <p class="btccc">$3.55</p>
                            <p class="pr">Your Balance</p>
                            <p class="pr">You will Get </p>
                            <p class="pr">Max</p>
                            <p class="pr">ROI</p>
                            <p class="pr">Duration</p>
                        </div>

                        <div class="col-6">
                            <p class="pr texted">BOND PRICE</p>
                            <p class="btccc texted">$3.55</p>
                            <p class="pr texted">0 SYN - ETH SLP</p>
                            <p class="pr texted">0 SYN</p>
                            <p class="pr texted">383284.119 SYN</p>
                            <p class="pr texted">7.80%</p>
                            <p class="pr texted">30 days</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        APPROVE
                    </Button>                    
                    <p class="impp t">Important: New bonds are auto-staked (accrue rebase rewards) and no longer vest linearly. Simply claim as sOHM or gOHM at the end of the term.</p>                
                </Modal.Footer>
            </Modal></>

    );
}

export default Bondtable;