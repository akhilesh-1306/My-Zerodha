import React from "react";

export default function NotFound(){
    return(
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <h1 className='mt-3' >404 Error : Page not found</h1>
                <p className="mt-4">Sorry, the page that you are looking for does not exist !</p>
            </div>
        </div>
    );
}