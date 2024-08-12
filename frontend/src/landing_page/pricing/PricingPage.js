import React from "react";
import Navbar from "../Navbar"
import Footer from "../Footer"
import Hero from "./Hero";
import Borkerage from "./Brokerage";
import OpenAccount from "../OpenAccount";

export default function PricingPage(){
    return(
        <>
            <Hero/>
            <OpenAccount/>
            <Borkerage/>
        </>
    );
};