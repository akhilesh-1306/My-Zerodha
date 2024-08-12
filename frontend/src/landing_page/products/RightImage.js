import React from "react";

export default function RightImage({ imageUrl, productTitle, productDescription, learnMore}) {
    return (
        <div className="container mt-5 mb-5 p-3">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productTitle}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                        <a href={learnMore}>Learn More&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </div>
                <div className="col-6 p-0 mt-0">
                    <img src={imageUrl}></img>
                </div>
            </div>
        </div>
    );
};