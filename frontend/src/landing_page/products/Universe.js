import React from "react";

export default function Universe(){
    return (
        <div className="container text-center">
            <div className="row">
                <h1 className="mb-3">The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row p-5 mx-5">
                <div className="col">   
                    <img src="media/images/smallcaseLogo.png"></img>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col">
                    <img src="media/images/streakLogo.png" style={{height:"3rem"}}></img>
                    <p className="text-small text-muted">Algo & Strategy platform</p>
                </div>
                <div className="col">
                    <img src="media/images/sensibullLogo.svg" style={{height:"2rem"}}></img>
                    <p className="text-small text-muted">Options Trading Platfom</p>
                </div>
            </div>

            <div className="row p-3 mx-5">
                <div className="col">   
                    <img src="media/images/zerodhaFundhouse.png" style={{height:"3rem"}}></img>
                    <p className="text-small text-muted">Asset Management</p>
                </div>
                <div className="col">
                    <img src="media/images/tijori.svg" style={{height:"3rem"}}></img>
                    <p className="text-small text-muted">Fundamental research platform</p>
                </div>
                <div className="col">
                    <img src="media/images/dittoLogo.png" style={{height:"3rem"}}></img>
                    <p className="text-small text-muted">Insurance</p>
                </div>
            </div>
            <button style={{width:"15%",margin:"0 auto"}} className='p-3 btn btn-primary mb-5' >Signup Now</button>
        </div>
    );
};