import React from 'react'
import './Projects.css'
import projects from './projects.svg'
import Slide from 'react-reveal/Slide';
import {Link} from 'react-router-dom'
import react from './react.png'
import css3 from './css3.png'
import Flip from 'react-reveal/Flip';
import html5 from './html5.png'
import tmdb from './tmdb.jpeg'
import material from './material.png'
import redux from './redux.svg'
import node from './node.png'

function Projects() {
    return (
        <div className="projects">
            <div className="projects-intro">
            <Slide left>
                <div className="left-section">
                    <img src={projects} alt="projects illustration" />
                </div>
            </Slide>
            <Slide right>
                <div className="right-section">
                    <h1>Projects</h1>
                    <br />
                    <br />
                    <h4 id="projects-h4">Most of my recent projects are focused on the client side using vast variety of latest technology tools. </h4>
                    <br />
                    <h4 id="projects-h4">In this portfolio, I am showcasing my Reactjs &amp; CSS skills</h4>
                </div>
            </Slide>
            </div>
            <div className="project-box">                    
                <Flip left>
                <div className="row">
                    <h1>This Portfolio</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    {/* <h4 id="tech">Technologies used</h4> */}
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="https://github.com/rawah96/masterportfolio" target="_blank"> GitHub</a></button>
                        {/* <button><Link to="/masterportfolio">Demo</Link></button> */}
                        <button><a href="https://rawah96.github.io/masterportfolio/">Demo</a></button>
                    </div>
                </div>

                </Flip>
                <Flip left><div className="row">
                    <h1>Netflix Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                        <img src={tmdb} alt="tmdb" width="35px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                <Flip left><div className="row">
                    <h1>Hulu Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                        <img src={tmdb} alt="tmdb" width="35px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                <Flip left><div className="row">
                    <h1>Nike Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                {/* <Flip left><div className="row">
                    <h1>Youtube Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using Firebase.</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>                    
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip> */}

                {/* <Flip left><div className="row">
                    <h1>Discord Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                        <img src={redux} alt="redux" width='40px' />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip> */}
                {/* </div>
                <div className="show-more">
                    <button id="show-more"><a href="https://github.com/rawah96?tab=repositories" target="_blank">Show More Frontend</a></button>
                </div>
                <div className="project-box">                     */}
                <Flip left><div className="row">
                    <h1>Covid Dashboard</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                {/* <Flip left><div className="row">
                    <h1>Covid Dashboard 1</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip> */}

                <Flip left><div className="row">
                    <h1>Capstone | EMS</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using Heroku.</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                        <img src={redux} alt="redux" width='40px' />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                <Flip left><div className="row">
                    <h1>Mern Store</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using Heroku.</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" /> 
                        <img src={redux} alt="redux" width='50px' />
                        <img src={node} alt="node" width="30px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>
                {/* </div>
                <div className="show-more">
                    <button id="show-more"><a href="https://github.com/rawah96?tab=repositories" target="_blank">Show More Full-stack</a></button>
                </div>
                <div className="project-box">                    
                <Flip left><div className="row">
                    <h1>PORTFOLIO 0</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip> */}


                <Flip left><div className="row">
                    <h1>PORTFOLIO 1</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                <Flip left><div className="row">
                    <h1>PORTFOLIO 2</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                {/* <Flip left><div className="row">
                    <h1>Facebook Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using Firebase.</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip> */}

                {/* <Flip left><div className="row">
                    <h1>Linkedin Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                        <img src={redux} alt="redux" width='40px' />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip>

                <Flip left><div className="row">
                    <h1>Gmail Clone</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    <div id="techs">
                        <img src={html5} alt="css3" width="50px"/>
                        <img src={react} alt="react" width="100px" />
                        <img src={css3} alt="css3" width="40px"/>
                        <img src={material} alt="material" width="55px" />
                        <img src={redux} alt="redux" width='40px' />
                    </div>
                    <div className="btns">
                        <button><a href="" target="_blank"> GitHub</a></button>
                        <button><a href="" target="_blank">Demo</a></button>
                    </div>
                </div></Flip> */}
            </div>
            <div className="show-more">
                <button id="show-more"><a href="https://github.com/rawah96?tab=repositories" target="_blank">Show More Projects</a></button>
            </div>
        </div>
    )
}

export default Projects
