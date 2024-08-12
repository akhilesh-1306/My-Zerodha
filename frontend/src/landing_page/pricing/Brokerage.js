import React from "react"

export default function Borkerage(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col p-3 mb-5">
                    <a href="#" className="fs-5 mb-3" style={{display:"flex", justifyContent:"center"}}>Brokerage Calculator</a>
                    <ul className="text-muted" style={{fontSize:"0.85rem" , lineHeight:"1.5rem"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col p-3 mb-5">
                    <a href="#" className="fs-5 mb-3" style={{display:"flex", justifyContent:"center"}}>List Of Charges</a>
                </div>
            </div>
        </div>
    );
};