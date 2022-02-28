import React from "react";

function Circulatingsupply({ name, value }) {
    return (
        <div className="col-lg-6 dashboxpad">
            <div className="bonbox text-left ">
                <p></p>
                <p className="Dashtext pt-2 pb-2 ">CIRCULATING SUPPLY<br/>
                    <span className="btcc ">$310,219,291 <span className="boxgrad">Today</span></span>
                </p>
                <div className="row mt-3">
                    <div className="col-3 text-center">
                        <p className="dashp pt-2 pb-2 ">$4,000M</p>
                        <p className="dashp pt-2 pb-2 mt-100">$4,000M</p>
                    </div>
                    <div className="col-9">
                        <img src="images/graph.png" className="img-responsive img graph" />
                        <div className="row">
                            <div className="col-3">
                                <p className="dashp pt-2 pb-2 ">NOV 23</p>
                            </div>
                            <div className="col-3">
                                <p className="dashp pt-2 pb-2 ">NOV 23</p>
                            </div>
                            <div className="col-3">
                                <p className="dashp pt-2 pb-2 ">DEC 24</p>
                            </div>
                            <div className="col-3">
                                <p className="dashp pt-2 pb-2 ">JAN 24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Circulatingsupply;