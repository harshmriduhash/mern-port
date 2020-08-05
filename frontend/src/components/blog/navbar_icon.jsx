import React from 'react';

const BlogNavIcon = props => {
    const { open } = props;
    return (
        <div className='icon-wrapper'>
            {
                open ? 
                (
                    <div
                        href='#'
                        className='blog-navbar-open'
                        onClick={props.handleClick}>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                    </div>
                ) : (
                    <div
                        href='#'
                        className='blog-navbar'
                        onClick = {props.handleClick}>
                        <div className='one-open'></div>
                        <div className='two-open'></div>
                        <div className='three-open'></div>
                    </div>
                )
            }
        </div>
    )
};

export default BlogNavIcon;

