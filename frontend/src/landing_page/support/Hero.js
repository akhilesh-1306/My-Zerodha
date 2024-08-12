import React from "react"

export default function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="p-5 mt-5" id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="#">Track Tickets</a>
            </div>
            <div className="row mx-5 p-3">
                <div className="col-6 px-5">
                    <h1 className="fs-5">Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder="Eg: how do i activate F&O"></input> <br/>
                    <a href="">Track account opening </a> &nbsp;&nbsp;
                    <a href="">Track segment activation </a>&nbsp;&nbsp;
                    <a href="">Intraday margins </a><br/>&nbsp;&nbsp;
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6 px-5">
                    <h1 className="fs-5 mb-5" >Featured</h1>
                    <p>Credit for the funds withdrawal request made yesterday will be credited to your bank account by 4 PM today.</p>
                </div>
            </div>
        </section>
    );
};