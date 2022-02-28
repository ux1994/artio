import React from "react";
import { Button, CloseButton, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function Cards({image, title, unstake = false }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [shownft, setShownft] = useState(false);
    const shownftClose = () => setShownft(false);
    const shownftShow = () => setShownft(true);

    return (
        <><div className="col-10 col-lg-3">
            <div className="card">
                <img className="card-img-top " src={image} alt="Card image cap " />
                <div className="card-body ">
                    <h5 className="card-title ">{title} <span className="bull ">- #102</span></h5>
                    <div className="row justify-content-center mb-4 ">
                        <div className="col-sm-3 col-3 colbg ">
                            <p className="lpp pt-2 pb-2 ">APR<br />
                                <span className="btc ">956%</span> </p>
                        </div>
                        <div className="col-sm-3 col-3 colbg ">
                            <p className="lpp pt-2 pb-2 ">APR<br />
                                <span className="btc ">956%</span> </p>
                        </div>
                        <div className="col-sm-3 col-3 colbg ">
                            <p className="lpp pt-2 pb-2 ">APR<br />
                                <span className="btc ">956%</span> </p>
                        </div>
                    </div>
                    {unstake ? <a href="# " onClick={handleShow} className="cardbtn mt-4 ">STAKE</a> : <a href="# " className="btnnn mt-4 ">UNSTAKE</a>}




                </div>
            </div>
        </div><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>Stake</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12">
                            <p className="pr">Available $ATRIV: <span className="numm"> 923293922.0001 </span></p>
                            <input type="text" placeholder="0.5 Max" className="inputtext" />
                            <p className="impp t mt-3">Transaction may revert if price changes by more than slippage %</p>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={shownftShow}>
                        APPROVE
                    </Button>
                </Modal.Footer>
            </Modal><Modal show={shownft} onHide={shownftClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>Stake NFT</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12">
                            <div className="mofalbg">
                                <img src="images/aladin.png" />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row justify-content-center mb-4 mt-4 ">
                                <div className="col-sm-3 col-3 colbg t">
                                    <p className="lpp pt-2 pb-2 ">APR<br />
                                        <span className="btc ">956%</span> </p>
                                </div>
                                <div className="col-sm-3 col-3 colbg t">
                                    <p className="lpp pt-2 pb-2 ">APR<br />
                                        <span className="btc ">956%</span> </p>
                                </div>
                                <div className="col-sm-3 col-3 colbg t">
                                    <p className="lpp pt-2 pb-2 ">APR<br />
                                        <span className="btc ">956%</span> </p>
                                </div>
                            </div>
                            <p className="pr">Available $ATRIV: <span className="numm"> 923293922.0001 </span></p>
                            <input type="text" placeholder="0.5 Max" className="inputtext" />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={shownftClose}>
                        APPROVE
                    </Button>
                </Modal.Footer>
            </Modal></>
    );
}

export default Cards;