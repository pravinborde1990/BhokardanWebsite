import React from 'react';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import ScrollToTop from './ScrollToTop';
export default function Footer(){
    const credit="Site is designed and developed by Pravin Borde & Chhaya Borde";
    
    return (
        <div className="card navbar sticky-bottom">
           {/* <img src={logo} width={100} height={200} className="card-img-top" alt="Canvas Logo"/>*/}
           
            <div className="card-body" style={{ 
              width:'100%',  backgroundColor: 'black' 
            }}>
            <SocialMedia/>
                <p className="card-text mt-3 text-muted"><center><h4>{credit}</h4></center></p>
                <p className="card-text mt-3 text-muted"><center><h4>{""}</h4></center></p>
                <ScrollToTop/>
            </div>
        </div>
    )
}