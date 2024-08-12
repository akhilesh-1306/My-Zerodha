import React from 'react';

export default function Awards(){
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6 mt-3'>
                    <img src='media/images/largestBroker.svg' alt='largestBroker' ></img>
                </div>
                <div className='col-6 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mt-5'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2' >Futures and Options</li>
                                <li className='mt-2'>Commodity derivatives</li>
                                <li className='mt-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'>Stocks & IPOs</li>
                                <li className='mt-2'>Direct mutual funds</li>
                                <li className='mt-2'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='pressLogos' className='mt-3' style={{width:"95%"}}></img>
                </div>
            </div>
        </div>
    );
};