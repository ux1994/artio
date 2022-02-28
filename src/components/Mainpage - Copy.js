import React from "react";
import Smallcard from "./Smallcard";
function Mainpage() {
    return (
        <div className="bodybg">
            <div className="container">
                <div className="row homenavbg">
                    <div className="col-lg-8 col-12">
                        <img src="images/artio.png" />
                    </div>
                    <div className="col-lg-4 homenav mobile">
                        <ul>
                            <li className="mr-3"><a href="dashboard.html">Docs</a></li>
                            <li><a href="dashboard.html" className="btnn">Enter App</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="leftvector">
                <div className="canvas">
                    <div className="container banner">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1>Lorem Ipsum is simply dummy text of the printing and </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                <div className="row tt mt-5">
                                    <div className="col-lg-3 col-12 ">
                                        <a href="dashboard.html" className="bannerbtnn">Enter App</a></div>
                                    <div className="col-lg-4 col-12 leranbttun pl-0">
                                        <a href="dashboard.html" className="leranbtun">Learn More</a></div>
                                </div>
                            </div>
                            <div className="col-lg-5 bannerleft">
                                <div className="bannerimg tt">
                                    <img src="images/Invoice.png" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container threeboxes">
                    <div className="row justify-content-center">
                        <Smallcard name="MARKET CAP" value="10,144,856"></Smallcard>
                        <Smallcard name="COIN PRICE" value="54.33"></Smallcard>
                        <Smallcard name="TRADING VOLUME" value="4,412.70"></Smallcard>
                        
                    </div>
                </div>

            </div>

            <div className="rightvector">
                <div className="container stakethree">
                    <img src="images/hr.png" />
                    <p className="para ">Lorem Ipsum is simply dummy text of the printing and typesetting . </p>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12 border-rounded">
                            <div className="borderradius">
                                <div className="stakethreebox text-center">
                                    <img src="images/threeicon1.png" />
                                    <p className="stakethreeboxp">Stake </p>
                                    <p className="stakethreeboxone">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="stakethreebox text-center">
                                <img src="images/threeicon2.png" />
                                <p className="stakethreeboxp">Bond </p>
                                <p className="stakethreeboxone">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="stakethreebox text-center">
                                <img src="images/threeicon3.png" />
                                <p className="stakethreeboxp">NFT </p>
                                <p className="stakethreeboxone">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>

                    </div>
                    <div className="stakethebutton">
                        <a href="dashboard.html" className="bannerbtnn">Enter App</a>
                    </div>
                </div>
                <div className="footerlight">
                    <footer className="footer">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 tt">
                                    <div className="row tt justify">
                                        <div className="col-lg-1 col-2">
                                            <a href=""> <img src="images/telegram.png" /></a>
                                        </div>
                                        <div className="col-lg-2 col-2">
                                            <a href=""> <img src="images/twitter.png" /></a>
                                        </div>
                                    </div>
                                    <p className="copyright">Copyright artivo</p>
                                </div>
                                <div className="col-lg-5">
                                    <div className="row">
                                        <div className="col-lg-6 col-6 tt">
                                            <p className="footermenuhead">Learn</p>
                                            <p className="footertext"><a href="">Medium</a></p>
                                            <p className="footertext"><a href="">Documentation</a></p>
                                        </div>
                                        <div className="col-lg-6 col-6 tt">
                                            <p className="footermenuhead">Learn</p>
                                            <p className="footertext"><a href="">Medium</a></p>
                                            <p className="footertext"><a href="">Documentation</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Mainpage;