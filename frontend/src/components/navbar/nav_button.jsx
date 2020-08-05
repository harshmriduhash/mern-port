import React from 'react';
import _ from 'lodash';

const NavButton = props => {
    const { title, reRoute, location } = props;
    return (
        <div className="navbar-button-container" onClick={() => reRoute(title)}>
            {
                location.pathname === `/${title}` || 
                (location.pathname === '/' && title === 'portfolio') ?
                (
                    <div className='current-nav-button'>
                        {_.capitalize(title)}
                    </div>
                ) : (
                    <div className='nav-button'>
                        {_.capitalize(title)}
                    </div>
                )
            }
        </div>
    )
}

export default NavButton