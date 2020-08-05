import React, { memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import LogoButton from './logo_button';
import NavButton from './nav_button';
import ResumeButton from '../main/resume/resume_button';
import { detectMob } from '../../util/detect_mobile';
import '../../styles/navbar.scss';

const Navbar = memo((props) => {
    const mobile = detectMob();
    const { session } = props;

    let history = useHistory();
    let location = useLocation();

    const navs = [
        'portfolio',
        'location',
        'blog',
        'contact',
    ];

    const reRoute = (field) => {
        if (field === 'portfolio') {
            history.push('/');
        } else if (field === 'location') {
            history.push('/location');
        } else if (field === 'contact') {
            history.push('/contact');
        } else if (field === 'blog') {
            history.push('/blog');
        } else if (field === 'github') {
            window.location.href = 'https://github.com/harshmriduhash'
        };
    };

    const logoutUser = () => {
        props.logout();
    };

    return (
        <div className='navbar-container'>
            <div className='navbar-left-container'>
                <LogoButton />
                <div className='nav-buttons-container'>
                    {
                        navs.map((nav, i) => {
                            return <NavButton
                                title={nav}
                                key={`nav-${i}}`}
                                location={location}
                                reRoute={reRoute} />
                        })
                    }
                </div>
            </div>
            <div className='navbar-right-container'>
                {
                    session.isAuthenticated ?
                        (
                            <div onClick={() => logoutUser()} className='logout-button'>
                                Logout
                            </div>
                        ) : (
                            null
                        )
                }
                {
                    mobile ?
                        (
                            null
                        ) : (
                            <img className='github-logo' src='/github.svg' width='41' height='41' onClick={() => reRoute('github')} />
                        )
                }
                <ResumeButton nav={true} />
                {/* <div className='light-toggle'>
                        <img src='/moon.svg' className='moon-svg'/>
                    </div> */}
            </div>
        </div>
    )
})

export default Navbar;