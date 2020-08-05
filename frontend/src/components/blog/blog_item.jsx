import React from 'react';

const parseDate = date => {
    const split = date.split('T');
    return split[0];
}

const BlogItem = props => {
    const { title, description, date, authorQuote, quote } = props;

    return (
        <div className='blog-item-container'>
            <div className='blog-title'>
                {title}
            </div>
                {
                    quote ?
                    (
                        <div className='quote-container'>
                            <div className='quote'>
                                {`"${quote}"`}
                            </div>
                            <div className='authorQuote-container'>
                                {`-${authorQuote}`}
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
            <div className='blog-date'>
                {parseDate(date)}
            </div>
            <p className='blog-description'>
                {description}
            </p>  
        </div>
    )
};

export default BlogItem; 