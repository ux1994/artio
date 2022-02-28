import React from "react";

function Smallcard({name, value}) {
    return (
        <div className="col-lg-4 col-12">
            <div className="bonbox text-center">
                <p></p>
                <p className="bonboxp pt-2 pb-2 ">{name}<br />
                    <span className="bonboxh ">${value}</span> </p>
            </div>
        </div>
    );
}
export default Smallcard;