import React from 'react';
import Welcome from './welcome';
import Timeline from './timeline/timeline';
import About from './about/about';
import Resume from './resume/resume';
import Skills from './skills/skills';
import Projects from './projects/projects';
import Footer from '../footer/footer';

const Main = props => {

    // This is for new visitors if they want to log there first time coming to 
    // the site

    // const { openModal } = props;
    // useEffect(() => {
    //     openModal('welcome-visitor')
    // }, []);

    return (
        <div className="main-page-container">
            <Welcome />
            <About />
            <Timeline />
            <Projects />
            <Skills />
            <Resume />
            <Footer position={'relative'} />
        </div>
    )
}

export default Main;