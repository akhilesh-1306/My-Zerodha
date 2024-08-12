import React from "react"

export default function CreateTicket(){
    return(
        <div className="container">
            <h2 className="text-muted fs-4 m-5">To create a ticket, select a relevant topic</h2>
            <div className="row mb-5 mt-5">
                <div className="col px-5">
                    <h2 className="fs-5 text-muted"><i class="fa-solid fa-plus-circle"></i>&nbsp;&nbsp;Account Opening</h2>
                    <ul style={{listStyleType:"none",lineHeight:"2.25rem"}}>
                        <li><a href="#">Getting started</a></li>
                        <li><a href="#">Online</a></li>
                        <li><a href="#">Offline</a></li>
                        <li><a href="#">Charges</a></li>
                        <li><a href="#">Company, Partnership and HUF</a></li>
                        <li><a href="#">Non Resident Indian (NRI)</a></li>
                    </ul>
                </div>
                <div className="col px-5">
                    <h2 className="fs-5 text-muted"><i class="fa-regular fa-user"></i>&nbsp;&nbsp;Your Zerodha Account</h2>
                    <ul style={{listStyleType:"none",lineHeight:"2.25rem"}}>
                        <li><a href="#">Login credentials</a></li>
                        <li><a href="#">Your Profile</a></li>
                        <li><a href="#">Account modification and segment addition</a></li>
                        <li><a href="#">CMR & DP ID</a></li>
                        <li><a href="#">Nomination</a></li>
                        <li><a href="#">Transfer and conversion of shares</a></li>
                    </ul>
                </div>
                <div className="col px-5">
                    <h2 className="fs-5 text-muted"><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Trading and Markets</h2>
                    <ul style={{listStyleType:"none",lineHeight:"2.25rem"}}>
                        <li><a href="#">Trading FAQs</a></li>
                        <li><a href="#">Kite</a></li>
                        <li><a href="#">Margins</a></li>
                        <li><a href="#">Product and order types</a></li>
                        <li><a href="#">Corporate actions</a></li>
                        <li><a href="#">Kite features</a></li>
                    </ul>
                </div>
            </div>

            <div className="row mb-5 mt-5">
                <div className="col px-5">
                    <h2 className="fs-5 text-muted"><i class="fa-solid fa-wallet"></i>&nbsp;&nbsp;Funds</h2>
                    <ul style={{listStyleType:"none",lineHeight:"2.25rem"}}>
                        <li><a href="#">Fund withdrawal</a></li>
                        <li><a href="#">Adding funds</a></li>
                        <li><a href="#">Adding bank accounts</a></li>
                        <li><a href="#">eMandates</a></li>
                    </ul>
                </div>
                <div className="col px-5">
                    <h2 className="fs-5 text-muted"><i class="fa-solid fa-chart-pie"></i>&nbsp;&nbsp;Console</h2>
                    <ul style={{listStyleType:"none",lineHeight:"2.25rem"}}>
                        <li><a href="#">IPO</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Funds statement</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Referral program</a></li>
                    </ul>
                </div>
                <div className="col px-5">
                    <h2 className="fs-5 text-muted"><i class="fa-regular fa-circle"></i>&nbsp;&nbsp;Coin</h2>
                    <ul style={{listStyleType:"none",lineHeight:"2.25rem"}}>
                        <li><a href="#">Understanding mutual funds and Coin</a></li>
                        <li><a href="#">Coin app</a></li>
                        <li><a href="#">Coin web</a></li>
                        <li><a href="#">Transactions and reports</a></li>
                        <li><a href="#">National Pension Scheme (NPS)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};