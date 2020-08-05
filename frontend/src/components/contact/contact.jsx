import React, { useState, useEffect, useReducer } from 'react';
import ReactGA from 'react-ga';
import Footer from '../footer/footer';
import '../../styles/contact.scss'

const Contact  = (props) => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [filterInput, setFilterInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            title: '',
            message: '',
            email: ''
        }
    );

    useEffect(() => {
        if (window.location.hostname !== 'localhost') {
            ReactGA.initialize('UA-162754702-2');
            ReactGA.pageview('/contact');
        }
    }, []);
    

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setFilterInput({ [name]: value });
    }

    const handleSubmit = () => {
        const { createContact } = props;
        if (filterInput.title.length === 0 || filterInput.message.length === 0 || filterInput.email.length === 0) {
            setError(true);
            return;
        };

        createContact({
            title: filterInput.title,
            message: filterInput.message,
            email: filterInput.email
        })
        .then(() => setSuccess(true), setFilterInput({ title: '', message: '', email: '' }))
        .then(() => {
            setTimeout(() => {
                setSuccess(false)
            }, 5000)
        })
    }

    return (
        <div className='contact-container'>
            <div className='contact-me'>
                <span>Contact Me</span>
            </div>
            <div className='contact-inner-container'>
                <form className='contact-form'>
                    <input
                        type='text'
                        name='title'
                        value={filterInput.title}
                        className='contact-title-input'
                        placeholder='Subject'
                        onChange={e => handleUpdate(e)} />
                    <input
                        type='text'
                        name='email'
                        value={filterInput.email}
                        className='contact-email-input'
                        placeholder='Your Email'
                        onChange={e => handleUpdate(e)} />
                    <textarea
                        name='message'
                        value={filterInput.message}
                        className='contact-message-input'
                        placeholder='Write Tarik a message'
                        onChange={e => handleUpdate(e)} />
                </form>
                {
                    error ?
                        (
                            <div className='contact-error-message'>
                                Please fill in all the fields
                            </div>
                        ) : (
                            null
                        )
                }
                {
                    success ?
                        (
                            <div className='contact-success-message'>
                                Your message was sent succssfully. Thanks again
                            </div>
                        ) : (
                            null
                        )
                }
                <div className='contact-submit-button-container'>
                    <button className='contact-submit-button' type='checkbox' onClick={() => handleSubmit()}>
                        Send
                    </button>
                </div>
            </div>
            <Footer position={'absolute'} />
        </div>
    )
}

export default Contact;