import React from 'react'
import './Contact.css'
import Bounce from 'react-reveal/Bounce';
import contact1 from './contact1.svg'
import address from './address.svg'

function Contact() {
    return (
        <div className="contact">
            <div>
                <Bounce>
                    <img src={contact1} alt="contact illustration" id="contact-img" width="70%" />
                    <h1 id="contactme">React out to me!</h1>
                </Bounce>
            </div>
            <div className="second-contact">
                <Bounce>
                    <img src={address} alt="address illustration" width="70%" />
                </Bounce>
            </div>
        </div>
    )
}

export default Contact
