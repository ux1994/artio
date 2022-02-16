import react from "react";
import { NavLink } from "react-router-dom";

function Header() {


    return (

        <><div className="col-lg-2 leftsidebg">
            <img src="images/artio.png" />
            <ul className="desknav">
                <li className="nav-link"><img src="images/dashboard.png" />
                    <p><a href="">Dashboard</a></p>
                </li>
                <li className="nav-link"><img src="images/stake.png" />
                    <p className="grad"><a href="">Stake</a></p>
                </li>
                <li className="nav-link"><img src="images/bond.png" />
                    <p><a href="bond.html">Bond</a></p>
                </li>
                <li className="nav-link"><img src="images/nft.png" />
                    <p><a href="">NFT</a></p>
                </li>
                <li className="nav-link"><img src="images/docs.png" />
                    <p><a href="">Docs</a></p>
                </li>
            </ul>
            <a href=""><img src="images/navbutton.png" /></a>
        </div>
        <div className="col-4 desk">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>

                    <ul className="desknav">
                        <li className="nav-link"><img src="images/artio.png" />
                        </li>
                        <li className="nav-link"><img src="images/dashboard.png" />
                            <p><a href="">Dashboard</a></p>
                        </li>
                        <li className="nav-link"><img src="images/stake.png" />
                            <p className="grad"><a href="">Stake</a></p>
                        </li>
                        <li className="nav-link"><img src="images/bond.png" />
                            <p><a href="bond.html">Bond</a></p>
                        </li>
                        <li className="nav-link"><img src="images/nft.png" />
                            <p><a href="">NFT</a></p>
                        </li>
                        <li className="nav-link"><img src="images/docs.png" />
                            <p><a href="">Docs</a></p>
                        </li>
                    </ul>
                    <a href="" className="t"><img src="images/navbutton.png" /></a>
                </div>
                <span className="threeicon">&#9776; </span>

            </div><div className="col-8 desk">
                <img src=" images/logo.png " />
            </div></>

    );
}
export default Header;
