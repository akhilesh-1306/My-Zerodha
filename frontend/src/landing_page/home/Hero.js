import React from 'react';

export default function Hero(){
    return (
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' />
                <h1 className='mt-3' >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button style={{width:"15%",margin:"0 auto"}} className='p-3 btn btn-primary' >Signup Now</button>
            </div>
        </div>
    );
};