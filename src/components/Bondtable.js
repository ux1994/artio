import react from "react";
import { useState } from "react";
import { Button, CloseButton, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Bondtable({ bond, price, roi, duration }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [shownft, setShownft] = useState(false);
    const shownftClose = () => setShownft(false);
    const shownftShow = () => setShownft(true);

    return (
        <><div className="mt-4">
            <div className="row align-items-center tablebg m-auto justify-content-center">
                <div className="col-lg-3 col-12 bondbox">
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
                                <a href="#" onClick={handleShow} className="bondbtn">Bond</a>
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
                    {/* <a href="#" onClick={handleShow}> <img src="images/tablebutton.png" alt="" /></a> */}
                    <a href="#" onClick={handleShow} className="bondbtn">Bond</a>
                </div>
            </div>
        </div><Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <div className=" align-items-center mob d-flex">
                        <img src="images/crypto.png " />
                        <p className="lp ">BTC<br />
                            <span className="btc ">Fixed term for 30 days </span> </p>
                    </div>


                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6">
                            <p className="pr">BOND PRICE</p>
                            <p className="btccc">$3.55</p>
                            <p className="pr">Your Balance</p>
                            <p className="pr">You will Get </p>
                            <p className="pr">Max</p>
                            <p className="pr">ROI</p>
                            <p className="pr">Duration</p>
                        </div>

                        <div className="col-6">
                            <p className="pr texted">BOND PRICE</p>
                            <p className="btccc texted">$3.55</p>
                            <p className="pr texted">0 SYN - ETH SLP</p>
                            <p className="pr texted">0 SYN</p>
                            <p className="pr texted">383284.119 SYN</p>
                            <p className="pr texted">7.80%</p>
                            <p className="pr texted">30 days</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={shownftShow}>
                        APPROVE
                    </Button>
                    <p className="impp t">Important: New bonds are auto-staked (accrue rebase rewards) and no longer vest linearly. Simply claim as sOHM or gOHM at the end of the term.</p>
                </Modal.Footer>
            </Modal>
            <Modal show={shownft} onHide={shownftClose}>
                <Modal.Header closeButton closeVariant="white" >
                    <Modal.Title><p class="pr">Settings </p></Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12">
                            <p className="pr">Slippage </p>
                            <input type="text" placeholder="0.5%" className="inputtext" />
                                <p className="impp t mt-3">Transaction may revert if price changes by more than slippage %</p>
                        </div>
                        <div className="col-12">
                            <p className="pr">Recipient Address</p>
                            <input type="text" placeholder="0x3d816D3588e9aDBDfa4186c1AD01CBBdc6d0cAc3" className="inputtext" />
                                <p className="impp t mt-3">Choose recipient address. By default, this is your currently connected address</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={shownftClose}>
                        APPROVE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default Bondtable;