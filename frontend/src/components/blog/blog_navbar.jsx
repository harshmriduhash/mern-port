import React, { useState } from 'react';
import BlogNavIcon from './navbar_icon';

const BlogNavbar = (props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        const newState = !open;
        setOpen(newState);
    };

    return (
        <div className='blog-navbar-container'>
            <div className='wrapper'>
                {
                    open ?
                        (
                            <div className='nav-open'>
                                <BlogNavIcon
                                    open={true}
                                    type='menu-fold'
                                    handleClick={() => handleClick()}
                                />
                                <div className='nav-body'>
                                    <div>
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        ) : (

                            <div className='nav'>
                                <BlogNavIcon
                                    open={false}
                                    type='menu-fold'
                                    handleClick={() => handleClick()}
                                />
                                <div className='nav-body-closed'>
                                    <div>
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default BlogNavbar;
