import React from 'react';
import { detectMob } from '../../../util/detect_mobile';
import '../../../styles/projects.scss';

const handleReroute = (route) => {
    window.open(route);
};

const Projects = props => {
    const mobile = detectMob();
    return (
        <div className='projects-container'>
            {
                mobile ?
                (
                    <div className='projects-inner-container'>
                        <div className='projects-header'>
                            Projects and Applications
                        </div>
                        <div className='projects-boxes'>
                            <div className='box-container'>
                                <span>Bimeo</span>
                                <img alt='' 
                                    src='/bimeo-page.png'
                                    className='image-project'
                                    onClick={() => handleReroute('https://bimeo.herokuapp.com')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        Fullstack clone of Vimeo. Built on Ruby on Rails, React, Redux, webpack, PostgreSQL. Displays full CRUD actions, RESTful API routes, and database management.
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <span>Covid-415</span>
                                <img alt='' 
                                    src='/covid-415.png'
                                    className='image-project'
                                    onClick={() => handleReroute('https://covid415.herokuapp.com')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        Built using the MERN stack, COVID415 gives San Franciscan's the resources to establish a connection for help during the coronavirus pandemic.
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <span>Sudoku-Visualizer</span>
                                <img alt='' 
                                    src='sudoku-solver.png'
                                    className='image-project'
                                    onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')} />
                                <div className='project-description-container'>
                                    <div className='project-description'>
                                        This is a Sudoku solving visualizer. It focus's on solving the Exact Cover problem. Used in computer science and mathematics it is studied under the NP vs P debate.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='projects-inner-container'>
                        <div className='projects-header'>
                            Projects and Applications
                        </div>
                        <div className='projects-boxes'>
                            <div className='box-container'>
                                <img alt='' 
                                    src='/bimeo-page.png' 
                                    className='image-project'
                                    onClick={() => handleReroute('https://bimeo.herokuapp.com')}/>
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Bimeo
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            Fullstack clone of Vimeo. Built on Ruby on Rails, React, Redux, webpack, PostgreSQL. Displays full CRUD actions, RESTful API routes, and database management. 
                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <span>React</span>
                                        <span>Redux</span>
                                        <span>AWS</span>
                                        <span>PostgreSQL</span>
                                        <span>HTML</span>
                                        <span>SCSS</span>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/TarikGul/vimeo_clone_full_stack_project' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                        <div className='link-wrapper'>
                                            <img src='/link.svg' className='site-link-svg' />
                                            <a href='https://bimeo.herokuapp.com' className='project-link'>
                                                Live Site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <img alt='' 
                                    src='/covid-415.png' 
                                    className='image-project'
                                    onClick={() => handleReroute('https://covid415.herokuapp.com')}/>
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Covid-415
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            Built using the MERN stack, COVID415 gives San Franciscan's the resources 
                                            to establish a connection for assistance while sheltering-in-place, during the Corona virus pandemic.
                                            We implemented a tooling system using Mapbox's API, in order to match recipients with volunteers. 
                                            After we establish the connection, we allow the users to communicate, and confirm there transaction via the Twilio Api.

                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <span>React</span>
                                        <span>Redux</span>
                                        <span>Express</span>
                                        <span>Node</span>
                                        <span>MongoDB</span>
                                        <span>HTML</span>
                                        <span>SCSS</span>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/emostov/covid415' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                        <div className='link-wrapper'>
                                            <img src='/link.svg' className='site-link-svg'/>
                                            <a href='https://covid415.herokuapp.com' className='project-link'>
                                                Live Site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='box-container'>
                                <img alt='' 
                                    src='sudoku-solver.png' 
                                    className='image-project'
                                    onClick={() => handleReroute('https://tarikgul.github.io/Sudoku-solving-visualizer/dist/')}/>
                                <div className='project-right-box'>
                                    <h3 className='project-name'>
                                        Sudoku Solver
                                    </h3>
                                    <div className='project-description-container'>
                                        <div className='project-description'>
                                            This is a Sudoku solving visualizer. It focus's on solving the Exact Cover problem. Used in computer science and mathematics it is studied under the NP vs P debate.
                                        </div>
                                    </div>
                                    <div className='technologies'>
                                        <h4 className='technologies-header'>
                                            Technologies:
                                        </h4>
                                        <span>Javascript</span>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>Webpack</span>
                                    </div>
                                    <div className='project-links-wrapper'>
                                        <div className='link-wrapper'>
                                            <img src='/github-link.svg' className='site-link-svg' />
                                            <a href='https://github.com/TarikGul/Sudoku-solving-visualizer' className='project-link'>
                                                Github Repo
                                            </a>
                                        </div>
                                        <div className='link-wrapper'>
                                            <img src='/link.svg' className='site-link-svg'/>
                                            <a href='https://tarikgul.github.io/Sudoku-solving-visualizer/dist/' className='project-link'>
                                                Live Site
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Projects;