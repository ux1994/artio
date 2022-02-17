import react from "react";

function Bondtable({ bond, price, roi, duration }) {
    return (
        <div className="mt-4">
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
                    <a href="" data-toggle="modal" data-target="#exampleModal"> <img src="images/tablebutton.png" alt="" /></a>
                </div>
            </div>
        </div>

    );
}

export default Bondtable;