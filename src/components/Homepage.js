import react from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Stake from "./Stake";
function Homepage() {


    return (
        <div className="container-fluid">
            <div className="row navbg">
                <Header></Header>
                <Stake></Stake>
            </div>
        </div>
    );
}
export default Homepage;
