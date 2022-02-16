import React from "react";

function Rewards() {
    return (
        <div className="mainbox mt-4 ">
                        <div className="row d-flex align-items-center box m-auto ">
                            <div className="col-lg-4 ">
                                <div className="d-flex align-items-center ">
                                    <img src="images/bit.png" />
                                    <p className="lp ">LP<br/>
                                        <span className="btc ">$BTC - MONO  LP</span> </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-3 ">
                                <p className="lp ">APR<br/>
                                    <span className="btc ">956%</span> </p>
                            </div>
                            <div className="col-lg-2 col-3 ">
                                <p className="lp ">DAILY APR<br/>
                                    <span className="btc ">2.63</span> </p>
                            </div>
                            <div className="col-lg-2 col-3 ">
                                <p className="lp ">STAKED<br/>
                                    <span className="btc ">9</span> </p>
                            </div>
                            <div className="col-lg-2 col-3 ">
                                <p className="lp ">TVL<br/>
                                    <span className="btc ">$192,191</span> </p>
                            </div>

                        </div>

                        <div className="row d-flex align-items-center ">
                            <div className="col-lg-5 rew ">
                                <div className=" align-items-center mob">
                                    <img src="images/crypto.png" />
                                    <p className="lp ">TOTAL REWARDS<br/>
                                        <span className="btc ">199.010</span> </p>
                                </div>
                                <div className="row ">
                                    <div className="col-8 desk ">
                                        <div className="d-flex align-items-center ">
                                            <img src="images/crypto.png" />
                                            <p className="lp ">TOTAL REWARDS<br/>
                                                <span className="btc ">199.010</span> </p>
                                        </div>
                                    </div>
                                    <div className="col-4 desk ">
                                        <p className="lp ">X BALANCE<br/>
                                            <span className="btc ">199.010</span> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 reww ">
                                <div className="row d-flex align-items-center ">
                                    <div className="col-lg-4 mob">
                                        <p className="lp ">X BALANCE<br/>
                                            <span className="btc ">199.010</span> </p>
                                    </div>
                                    <div className="col-lg-4 col-6 ">
                                        <p>
                                            <span className="btc ">UNSTAKE</span> </p>
                                    </div>
                                    <div className="col-lg-4 col-6 ">
                                        <a href="# " className="btnn " data-toggle="modal" data-target="#exampleModal">STAKE</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
    );
}

export default Rewards;