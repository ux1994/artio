import react from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import { Button, CloseButton, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function Nftinfo() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <><div className="col-lg-10 rightsidebg ">
            <div className="container ">
                <div className="col-10 desk mobileheader">
                    <a href="#"> <h3 className="mobileheadershow">NFT  </h3></a>
                </div>
                <h3 className="heading ">NFT </h3>
                <div className="hrr "></div>
                <div className="nftbg mt-4 ">
                </div>
                <div className="pt-100">
                    <div className="row d-flex align-items-center nftbarbg m-auto">
                        <div className="col-lg-4 nftmobilebg">
                            <h3 className="nftheading ">MINT AN NFT </h3>
                        </div>

                        <div className="col-lg-2 col-7">
                            <div className=" align-items-center d-flex ">
                                <img src="images/crypto.png " />
                                <p className="lp ">MINT PRICE<br />
                                    <span className="btc ">0.012 BNB</span> </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-5">
                            <div className=" align-items-center ">
                                <p className="lp t-end">AVAILABLE<br />
                                    <span className="btc ">32/10000</span> </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mtmobile">
                            <div className="row">
                                <div className="col-7 mintbtnalign pr-15">
                                    <a href="#" onClick={handleShow} className="minttbn mt-4">Mint</a>
                                </div>
                                <div className="col-5 lentxt">
                                    <a href="" className="nftboxbtn">Learn More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <h4 className="subheading pt-0">Your NFTs</h4>
                <div className="row ">
                    <div className="col-lg-8 ">
                        <p className="para ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
            <div className="containerr text-center ">

                <div className=" d-flex mx-auto my-auto overflow-auto">

                    <Cards image="images/image 78.png" title="BSCWIN BULL" unstake="true"></Cards>
                    <Cards image="images/image88.png" title="BSCWIN BULL"></Cards>
                    <Cards image="images/image88.png" title="BSCWIN BULL"></Cards>
                    <Cards image="images/image88.png" title="BSCWIN BULL"></Cards>

                </div>
            </div>
        </div><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title><p className="pr">Stake NFT </p></Modal.Title>

                </Modal.Header>
                <Modal.Body>
                <div className="row">
                        <div className="col-12">
                            <div className="mofalbg">
                                <img src="images/aladin.png" />
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="t mt-3"> <span className="numm mt-3 text-center"> How many would you like to mint? </span></p>
                            <div className="row justify-content-center mb-4 mt-4 ">

                                <div className="col-lg-8 col-12 t">
                                    <div className="input-group">
                                        <span className="input-group-btn">
                                                <button type="button" className="btn btn-default btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                    <span className="glyphicon glyphicon-minus"> <img src="images/minus.png" /></span>
                                        </button>
                                        </span>
                                        <input type="text" name="quant[1]" className="form-control input-number" value="1" min="1" max="10" />
                                        <span className="input-group-btn">
                                                <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                                    <span className="glyphicon glyphicon-plus"><img src="images/plus.png" /></span>
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="pr text-center">1054/2000 Sold<br />Max 10 Per Transaction </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" >
                        APPROVE
                    </Button>
                </Modal.Footer>
            </Modal></>
    );

}
export default Nftinfo;