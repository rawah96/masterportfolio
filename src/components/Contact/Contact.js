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
                    {/* <img src={contact1} alt="contact illustration" id="contact-img" width="70%" /> */}
                    <div className="right-side">
                        <h1 id="contactme">React out to me!</h1>
                        <h4>You can message me anytime on my email address (rawahalsinan@gmail.com).</h4>
                        <h4>I will reply within 24 hours.</h4>
                        {/* <button>See My Resume</button> */}
                    </div>
                    
                </Bounce>
            </div>
                <Bounce>
                <div className="second-contact">
                    <img src={address} alt="address illustration" width="50%" />
                    <div className="right-side">
                        <h1 id="contactme">Address</h1>
                        <h4>
                            17744 SW johnson st. 
                            Beaverton, OR, USA, 97003
                        </h4>
                        <h1>Phone Number</h1>
                        <h4>
                            (503) 560-7843
                        </h4>
                    </div>
                </div>
                </Bounce>
        </div>
    )
}

export default Contact
