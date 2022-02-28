import React from "react";

function Dashboardcard({ name, value }) {
    return (
        <div className="col-lg-4 col-6 dashboxpad">
            <div className="bonbox text-center">
                <p></p>
                <p className="lppp pt-2 pb-2 ">{name}<br />
                    <span className="btcc ">${value}</span>
                </p>
            </div>
        </div>
    );
}
export default Dashboardcard;