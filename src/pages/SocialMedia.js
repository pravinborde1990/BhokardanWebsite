import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const icon = <FontAwesomeIcon icon={faFacebook} />
export default function SocialMedia(){
    return (
        <div className="container d-flex align-items-center justify-content-center">
           <a href="http://facebook.com/bhokardancity2017" target="_blank"><FontAwesomeIcon className="fa-2x" icon={['fab', 'facebook']} /></a>
         {/*  <a href="https://twitter.com/pravinborde1990" target="_blank"><FontAwesomeIcon className="fa-2x mx-3" icon={['fab', 'twitter']} /></a>/*}


{/*<FontAwesomeIcon icon={['fab', 'linkedin']} />

    <FontAwesomeIcon icon={['fab', 'github']} /> */} 
</div>
    )
}