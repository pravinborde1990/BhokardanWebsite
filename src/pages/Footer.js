import React from 'react';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import ScrollToTop from './ScrollToTop';
import VisitorCount from './VistorCount';
export default function Footer(){
    const credit="Site is designed and developed by Pravin Borde";
    
    return (
        <div className="card navbar">
           {/* <img src={logo} width={100} height={200} className="card-img-top" alt="Canvas Logo"/>*/}
           
            <div className="card-body relative-bottom" style={{ 
              width:'100%',  backgroundColor: 'black' 
            }}>
            <SocialMedia/>
                <p className="card-text mt-3 text-light"><center><h4>{credit}</h4></center></p>
                <p className="card-text mt-3 text-light"><center><i>Contact us on mybhokrdanhelpdesk@gmail.com</i></center></p>
                <p className="card-text mt3 text-light"><center><VisitorCount/></center></p>
            </div>
            <ScrollToTop/>
        </div>
    )
}