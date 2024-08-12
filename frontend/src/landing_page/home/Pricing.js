import React from 'react';

export default function Pricing(){
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4 mx-5'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"none"}}>See pricing &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col'>
                    <div className='row text-center'>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};