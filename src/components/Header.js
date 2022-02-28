import react from "react";
import { NavLink } from "react-router-dom";
function Header() {
    const currentLocation = window.location.href;

    const menuItem = document.querySelectorAll('a,img');

    const menuLength = menuItem.length
    var i = 0;
    for (i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "335px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (

        <><div className="col-lg-2 leftsidebg overflow-auto">
           <img src="images/artio.png" />
            <ul className="desknav">
                <li className="nav-link">
                    <NavLink to="/Dashboard"><img src="images/dashboard_active.png" class="blue" />
                        <p>Dashboard</p></NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/Stake"><img src="images/stake_active.png" class="blue" />
                        <p>Stake</p></NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/Bond"><img src="images/bondlight.png" class="blue" />
                        <p>Bond</p></NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/Nft"><img src="images/nft_active.png" class="blue" />
                        <p>NFT</p></NavLink>
                </li>
                <li className="nav-link"><img src="images/docs.png" />
                    <p><a href="">Docs</a></p>
                </li>
            </ul>
            <a href="#" class="navbtn">0xx9192</a>
        </div>
            <div className="col-2 desk mticon">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

                    <ul className="desknav" id="main-menu">
                        
                        <li className="nav-link"><NavLink to="/Dashboard">
                            <img src="images/dashboard_active.png" class="blue" />
                        <p>Dashboard</p></NavLink>
                        </li>
                        <li className="nav-link"><NavLink to="/Stake">
                            <img src="images/stake_active.png" class="blue" />
                        <p>Stake</p></NavLink>
                        </li>
                        <li className="nav-link"><NavLink to="/Bond">
                            <img src="images/bondlight.png" class="blue" />
                        <p>Bond</p></NavLink>
                        </li>
                        <li className="nav-link"><NavLink to="/Nft">
                            <img src="images/nft_active.png" class="blue" />
                        <p>NFT</p></NavLink>
                        </li>
                        <li className="nav-link"><img src="images/docs.png" />
                            <p><a href="">Docs</a></p>
                        </li>
                    </ul>
                    <a href="#" class="navbtn">0xx9192</a>
                </div>
                <span className="threeicon" onClick={openNav}>&#9776; </span>

            </div>
            <div class="col-10 desk logomobile">
            <a href="#" > <h3 class="headingmobile">DASHBOARD  </h3></a>
            </div>

        </>

    );
}
export default Header;
