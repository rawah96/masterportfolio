import React from 'react'
import './First.css'
import me from './me.svg'
import Bounce from 'react-reveal/Bounce';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InstagramIcon from '@material-ui/icons/Instagram';
import Pdf from './myresume.pdf'
import Fade from 'react-reveal/Fade';
import whatido from './whatido.svg'
import react from './react.png'
import redux from './redux.svg'
import js from './js.png'
import node from './node.png'
import html5 from './html5.png'
import css3 from './css3.png'
import npm from './npm.png'

function First() {
    return (
        // first thing in the first page
        <div>
            <section id="one">
            <Bounce left>
                <div id="left">
                    <h1>Hi, I'm Rawah</h1>
                    <h4 id="h4">Portland State University/Maseeh College of Engineering and Computer Science Science Alumni</h4>
                    <h4 id="h4">Passionate about creating responsive &amp; accessble Full-Stack web applications | React-Enthusiast</h4>
                    {/* socials */}
                <div id="socials">
                    <div id="links">
                        <a href="https://github.com/rawah96" target="_blank"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/rawah-alsinan-917973187/" target="_blank"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/raw3a1996/" target="_blank"><InstagramIcon /></a>
                    </div>
                    <a id="resume" href={Pdf} without rel="noopener noreferrer" target="_blank">Resume</a>
                </div>
                </div>
            </Bounce>
            <Bounce>
                <img src={me} alt="illustration of me" width="50%"/>
            </Bounce>
            </section>
            <section id="two">
                <Fade top>
                    <h1>What I Do ?</h1>
                </Fade>
                <div className="two">
                    <Fade left>
                        <img src={whatido} alt="what I do illustration" width="70%" id="img"/>
                    </Fade>
                    <Fade right>
                        <div id="right">
                            <h1 id="right-h1">Full Stack Development</h1>
                            <br />
                            <div className="stack">
                                <img src={react} alt="react" width="85px" id="react"/>
                                <img src={redux} alt="redux" width="50px"/>
                                <img src={js} alt="js" width="50px"/>
                                <img src={node} alt="node" width="50px"/>
                            </div>
                            <br />
                            <div className="stack">
                                <img src={html5} alt="html" width="50px"/>
                                <img src={css3} alt="css" width="40px"/>
                                <img src={npm} alt="react" width="50px"/>
                            </div>
                            {/* bullet points */}
                        </div>
                    </Fade>
                </div>
            </section>
            <sectgion id="third">Cloud Infra-Architecture</sectgion>
        </div>
    )
}

export default First
