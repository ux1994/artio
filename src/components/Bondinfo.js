import react from "react";
import { NavLink } from "react-router-dom";
import Bondtable from "./Bondtable";

function Bondinfo() {
    return (
        <div className="col-lg-10 rightsidebg ">
                <div className="container ">
                    <h3 className="heading ">BOND </h3>
                    <div className="hrr "></div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-6">
                            <div className="bonbox text-center">
                                <p></p>
                                <p className="lppp pt-2 pb-2 ">TREASUREY BAL.<br/>
                                    <span className="btcc ">120,100,123</span> </p>
                            </div>
                        </div>
                        <div className="col-lg-6 myu">
                            <div className="bonbox text-center">
                                <p></p>
                                <p className="lppp pt-2 pb-2 ">ARTIO PRICE<br />
                                    <span className="btcc ">$12.31</span> </p>
                            </div>
                        </div>
                    </div>



                    <h4 className="subheading mt-4 ">BOND </h4>
                    <div className="row ">
                        <div className="col-lg-12">
                            <p className="para ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>

                    </div>

                    <section className="table d-lg-block">
                        <div className="d-sm-none d-md-none d-lg-block">
                            <div className="row mb-3">
                                <div className="col-lg-3">
                                    <p className="lp">BOND </p>
                                </div>
                                <div className="col-lg-2">
                                    <p className="lp t">PRICE </p>
                                </div>
                                <div className="col-lg-2">
                                    <p className="lp t">ROI </p>
                                </div>
                                <div className="col-lg-2">
                                    <p className="lp t">DURATION </p>
                                </div>
                                <div className="col-lg-3 d-none">
                                    <p className="lp t">DURATION </p>
                                </div>
                            </div>
                        </div>
                        <Bondtable bond="OHM" price="103.21" roi="4.51" duration="30"></Bondtable>
                        <Bondtable bond="OHM" price="103.21" roi="4.51" duration="30"></Bondtable>
                        <Bondtable bond="OHM" price="103.21" roi="4.51" duration="30"></Bondtable>
                        <Bondtable bond="OHM" price="103.21" roi="4.51" duration="30"></Bondtable>
                    </section>
                </div>
                <p className="imp t">Important: New bonds are auto-staked (accrue rebase rewards) and no longer vest linearly. Simply claim as sOHM or gOHM at the end of the term.</p>

            </div>
    );
}
export default Bondinfo;
