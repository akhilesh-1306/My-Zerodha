import React from "react";

export default function Hero(){
    return(
        <div className="container mb-5 border-bottom p-5">
            <div className="row text-center mt-5 pt-5">
                <h1>Technology</h1>
                <h4 className="text-muted fs-4 mt-3">Sleek, modern, and intuitive trading platforms</h4>
                <p className="mt-3 mb-5">Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-arrow-right"></i></a> </p>
            </div>
        </div>
    );
};