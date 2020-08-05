import React, { useReducer } from 'react';
import '../../styles/login.scss';

const LoginForm = props => {

    const [filterInput, setFilterInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: '',
            password: ''
        }
    );

    const update = (e) => {
        const { name, value } = e.target;
        setFilterInput({ [name]: value });
    };

    const handleSubmit = () => {
        const { email, password } = filterInput;

        let user = {
            email,
            password
        };

        props.login(user);
    };

    const renderErrors = () => {
        const { errors } = props;

        return (
            <ul className='errors-list'>
                {Object.keys(errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        <div className='warning'>
                            {errors[error]}
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className='login-form-container'>
            <div className='login-form-inner-container'>
                Admin Login
                {renderErrors()}
                <form onSubmit={handleSubmit}
                    className='login-form'>
                    <div className='input-container'>
                        <div className='input-wrapper'>
                            <input
                                name='email'
                                type='text'
                                placholder='Email'
                                value={filterInput.email}
                                onChange={e => update(e)}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <input
                                name='password'
                                type='password'
                                placholder='Password'
                                value={filterInput.password}
                                onChange={e => update(e)}
                            />
                        </div>
                    </div>
                </form>
                <button
                    className='session-button'
                    type='submit'
                    onClick={handleSubmit}>
                    Log In
                </button>
            </div>
        </div>
    )
}

export default LoginForm;