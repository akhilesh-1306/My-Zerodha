import React from "react"

export default function Hero(){
    return(
        <div className="container text-center">
            <div className="row p-5 mt-5 mb-5 border-bottom">
                <h1>Pricing</h1>
                <p className="text-muted fs-5 mb-5 mt-3">Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>

            <div className="row mt-5 mb-5 border-bottom">
                <div className="col px-4 mb-5">
                    <img src="media/images/pricingEquity.svg" style={{height:"10rem"}}></img>
                    <h2>Free Equity Delivery</h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col px-4 mb-5">
                    <img src="media/images/intradayTrades.svg" style={{height:"10rem"}}></img>
                    <h2>Intraday and F&O trades</h2>
                    <p> className="text-muted"Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col px-4 mb-5">
                    <img src="media/images/pricingEquity.svg" style={{height:"10rem"}}></img>    
                    <h2>Free direct MF</h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
};