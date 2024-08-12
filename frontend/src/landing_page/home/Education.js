import React from 'react';

export default function Education(){
    return (
        <div className='container mt-5'>
        <div className='row p-5'>
            <div className='col-4'>
                <img src='media/images/education.svg' alt='education'></img>
            </div>
            <div className='col-2'></div>
            <div className='col my-3'>
                <h1 className='fs-2'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='#' className='mt-5'  style={{textDecoration:"none"}}>Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                <a href='#' style={{textDecoration:"none"}}>Trading Q&A &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
    );
};