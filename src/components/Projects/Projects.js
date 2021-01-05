import React from 'react'
import './Projects.css'
import projects from './projects.svg'
import Slide from 'react-reveal/Slide';
import {Link} from 'react-router-dom'
import react from './react.png'
import css3 from './css3.png'
import npm from './npm.png'
import Flip from 'react-reveal/Flip';

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
                </div>
            </Slide>
            </div>
            <div className="project-box">
                <Flip left>
                <div className="row">
                    <h1>This Portfolio</h1>
                    <h4 id="row-h4">The complete portfolio website hosted using github pages (gh-pages).</h4>
                    {/* <h4 id="tech">Technologies used</h4> */}

                    <div className="btns">
                        <button><a href="https://github.com/rawah96/masterportfolio" target="_blank"> GitHub</a></button>
                        <button><Link to="/masterportfolio">Demo</Link></button>
                    </div>
                </div>
                </Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>
                <Flip left><div className="row">1</div></Flip>

            </div>
        </div>
    )
}

export default Projects
