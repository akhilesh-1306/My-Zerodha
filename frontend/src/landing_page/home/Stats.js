import React from 'react';

export default function Stats(){
    return (
        <div className='container mt-5'>
            <div className='row p-5'>
                <div className='col-6 p-3'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4 className='mt-5 fs-5'> Customer-first always </h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments</p>

                    <h4 className='mt-5 fs-5'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h4 className='mt-5 fs-5'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>

                    <h4 className='mt-5 fs-5'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-3'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{width:"90%"}}></img>
                    <div>
                        <a href='#' className='mx-5' style={{textDecoration:"none"}}>Explore our products&nbsp; <i class="fa-solid fa-arrow-right"></i> </a>
                        <a href='#' className='mx-3' style={{textDecoration:"none"}}>Try kite demo&nbsp;<i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};