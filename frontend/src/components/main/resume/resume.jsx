import React from 'react';
import ResumeButton from './resume_button';
import '../../../styles/resume.scss'

const Resume = props => {

    return (
        <div className='resume-container'>
            <div className='resume-inner-container'>
                <div className='download-header'>
                    Download My Resume
                </div>
                <ResumeButton nav={false}/>
            </div>
        </div>
    )
}

export default Resume;