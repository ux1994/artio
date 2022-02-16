import React from "react";

function Cards({image, title, unstake = false }) {
    return (
        <div className="col-10 col-lg-3">
            <div className="card">
                <img className="card-img-top " src={image} alt="Card image cap " />
                <div className="card-body ">
                    <h5 className="card-title ">{title} <span className="bull ">- #102</span></h5>
                    <div className="row justify-content-center mb-4 ">
                        <div className="col-sm-3 col-3 colbg ">
                            <p className="lpp pt-2 pb-2 ">APR<br />
                                <span className="btc ">956%</span> </p>
                        </div>
                        <div className="col-sm-3 col-3 colbg ">
                            <p className="lpp pt-2 pb-2 ">APR<br />
                                <span className="btc ">956%</span> </p>
                        </div>
                        <div className="col-sm-3 col-3 colbg ">
                            <p className="lpp pt-2 pb-2 ">APR<br />
                                <span className="btc ">956%</span> </p>
                        </div>
                    </div>
                    {unstake? <a href="# " data-toggle="modal" data-target="#exampleModal" className="btnn mt-4 ">STAKE</a> : <a href="# " className="btnnn mt-4 ">UNSTAKE</a>}
                    
                    
                
                    
                </div>
            </div>
        </div>
    );
}

export default Cards;