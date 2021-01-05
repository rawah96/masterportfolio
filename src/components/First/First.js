import React from 'react'
import './First.css'
import me from './me.svg'
import Bounce from 'react-reveal/Bounce';

function First() {
    return (
        // first thing in the first page
        <div>
            <section id="one">
            <Bounce left>
                <div id="left">
                    <h1>Rawah Al Sinan</h1>
                    <h4 id="h4">Portland State University Computer Science Alumni</h4>
                    <h4 id="h4">Passionate about creating responsive &amp; accessble web applications</h4>
                </div>
            </Bounce>
            <Bounce>
                <img src={me} alt="illustration of me" width="50%"/>
            </Bounce>
            </section>
            <section id="two">second section</section>
            <sectgion id="third">third section</sectgion>
        </div>
    )
}

export default First
