import react from "react";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";
import Rewards from "./Rewards";

function Stake() {
    return (
        <div className="col-lg-10 rightsidebg ">
                <div className="container ">
                    <h3 className="heading ">STAKE </h3>
                    <div className="hrr "></div>
                    <h4 className="subheading ">STAKE --</h4>
                    <div className="row ">
                        <div className="col-lg-8 ">
                            <p className="para ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="buy ">BUY $TXKLX <img src="images/arrow-right.png" /></p>
                        </div>
                    </div>
                    
                    <Rewards></Rewards>

                    <h4 className="subheading mt-4 ">STAKE YOUR NFT - EARN X </h4>
                    <div className="row ">
                        <div className="col-lg-8 ">
                            <p className="para ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="buy ">BUY NFT <img src="images/arrow-right.png " /></p>
                        </div>
                    </div>

                    <div className="container text-center my-3 mb-4 pb-4 ">

                        <div className=" d-flex mx-auto my-auto overflow-auto">
                            <Cards image="images/image 78.png" title="BSCWIN BULL" unstake="true"></Cards>
                            <Cards image="images/image88.png" title="BSCWIN BULL"></Cards>
                            <Cards image="images/image88.png" title="BSCWIN BULL"></Cards>
                            <Cards image="images/image88.png" title="BSCWIN BULL"></Cards>
                            
                        </div>
                    </div>
                </div>

            </div>
    );
}
export default Stake;
