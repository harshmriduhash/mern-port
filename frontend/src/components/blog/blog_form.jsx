import React, { useState, useReducer } from 'react';
import '../../styles/blog_form.scss';

const BlogForm = (props) => {
    const [ownerId, setOwnerId] = useState(props.session.user.id);
    const [pictureFiles, setPictureFiles] = useState(null);
    const [success, setSuccess] = useState(false);

    const [filterInput, setFilterInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            title: '',
            quote: '',
            authorQuote: '',
            description: ''
        }
    );

    // The backend is setup with the ability to connect to AWS and store picture 
    // in mongo and the cloud. But i need to setup the functionality in the frontend

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setFilterInput({ [name]: value });
    };

    const handleSubmit = () => {
        const { createBlog } = props;
        const { description, title, quote, authorQuote } = filterInput;

        if (title.length === 0 || description.length === 0) {
            return null
        } 

        createBlog({
            description,
            title,
            ownerId,
            quote,
            authorQuote
        })
            .then (() => {
                setSuccess(true);
                setFilterInput({
                    description: '',
                    title: '',
                    quote: '',
                    authorQuote: '',
                })
            })
                .then(() => {
                    setTimeout(() => {
                        setSuccess(false)
                    }, 5000)
                });
    };

    return (
        <div className='blog-form-container'>
            <div className='welcome-back-tarik'>
                Welcome back Harsh! Remember, the only way out is forward! <br />
                    Keep chugging along bud, I know you got this. <br />
                    One Love -Leafy
                </div>
            <div className='blog-form-inner-container'>
                <form onSubmit={() => handleSubmit()} className='blog-form'>
                    <label>
                        <input
                            type='text'
                            name='title'
                            className='blog-form-title'
                            placeholder='Title'
                            value={filterInput.title}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='quote'
                            className='blog-form-quote'
                            placeholder='Quote'
                            value={filterInput.quote}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <label>
                        <input
                            type='text'
                            name='authorQuote'
                            className='blog-form-authorQuote'
                            placeholder='Author Quote'
                            value={filterInput.authorQuote}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <label>
                        <textarea
                            type='text'
                            name='description'
                            className='blog-form-description'
                            placeholder='Description'
                            value={filterInput.description}
                            onChange={e => handleUpdate(e)} />
                    </label>
                    <div className='submit-container'>
                        <button className='submit-button' type='submit'>
                            Submit
                        </button>
                    </div>
                    {
                        success ?
                            (
                                <div className='posted-blog-post'>
                                    Posted
                                </div>
                            ) : (
                                null
                            )
                    }
                </form>
            </div>
        </div>
    )
}

export default BlogForm;