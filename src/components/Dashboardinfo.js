import react from "react";
import { NavLink } from "react-router-dom";
import Dashboardcard from "./Dashboardcard";
import Circulatingsupply from "./Circulatingsupply";

function Dashboardinfo() {
    return (
        <div className="col-lg-10 rightsidebg">
                <div className="container ">
                <div class="col-10 desk mobileheader">
                    <a href="#"> <h3 class="mobileheadershow">DASHBOARD  </h3></a>
                    </div>
                    <h3 className="heading ">DASHBOARD </h3>
                    <div className="hrr "></div>

                    <div className="row justify-content-center mt-4">
                        <Dashboardcard name="COIN PRICE" value="54.33"></Dashboardcard>
                        <Dashboardcard name="TRADING VOLUME" value="4,412.70"></Dashboardcard>
                        <Dashboardcard name="MARKET CAP" value="10,144,856"></Dashboardcard>
                        <Dashboardcard name="COIN PRICE" value="54.33"></Dashboardcard>
                        <Dashboardcard name="TRADING VOLUME" value="4,412.70"></Dashboardcard>
                        <Dashboardcard name="MARKET CAP" value="10,144,856"></Dashboardcard>
                        
                    </div>
                    <div class="row justify-content-center">
                        <Circulatingsupply></Circulatingsupply>
                        <Circulatingsupply></Circulatingsupply>
                        <Circulatingsupply></Circulatingsupply>
                        <Circulatingsupply></Circulatingsupply>
                    </div>

                    
                </div>
                
            </div>
    );
}
export default Dashboardinfo;
