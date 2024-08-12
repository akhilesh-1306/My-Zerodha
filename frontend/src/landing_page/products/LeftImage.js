import React from "react";

export default function LeftImage({imageUrl, productTitle, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return (
        <div className="container mt-5 mb-5 p-3">
            <div className="row">
                <div className="col-6 px-5">
                    <img src={imageUrl}></img>
                </div>
                <div className="col-6 p-5">
                    <h1>{productTitle}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                        <a href={tryDemo}>Try Demo&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft:"4rem"}} >Learn More&nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"></img></a>
                        <a href={appStore} style={{marginLeft:"2rem"}} ><img src="media/images/appstoreBadge.svg"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
};