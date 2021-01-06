import React from 'react'
import './Education.css'
import education from './education.svg'
import Bounce from 'react-reveal/Bounce';
import maseeh from './maseeh.png'

function Education() {
    return (
        <div className="education">
            <Bounce>
                <img src={education} alt="education illustration" />
            </Bounce>
            <Bounce>
            <div className="edu-right">
                <h1>Degrees Received</h1>
                <div className="degree-box">
                    <img src={maseeh} alt="psu" />
                    <br />
                    <h4>Electrical &amp; Computer Engineering <span id="year">2016 - 2018</span></h4>
                    <br /> <br/>
                    <h4>Computer Science <span id="year"> 2018 - 2020</span></h4>
                </div>
            </div>
            </Bounce>
        </div>
    )
}

export default Education
