import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (
        <section>
            <form className="ui huge form" onSubmit={handleSubmit}>
            <h1>Contact me</h1>
                <div className="field">
                    <label htmlFor="name"> Name:</label>
                    <input className="form-control" type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div className="field">
                    <label htmlFor="email">Email address:</label>
                    <input className="form-control" type=" email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                
                <button type="ui submit button">Submit</button>
            </form>
        </section >
        
    );


}

export default ContactForm;