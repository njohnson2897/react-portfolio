import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [errorMessage, setErrorMessage] =  useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }
        alert('Thank you for your message, I will respond as soon as possible');
    };

    return (
        <div>
        <form className='form text-center' onSubmit={handleFormSubmit}>
        <div className="input-group my-3">
        <span className="input-group-text">Name</span>
        <input type="text" aria-label="Name" className="form-control"/>
        </div>
        <div className="input-group my-3">
        <span className="input-group-text">Email</span>
        <input type="text" aria-label="Name" className="form-control"/>
        </div>
        <div className="input-group my-3">
        <span className="input-group-text">With textarea</span>
        <textarea className="form-control" aria-label="With textarea"></textarea>
        </div>

        <button type="submit" className="btn btn-secondary my-3">Submit</button>
        </form>
        {errorMessage && (
            <div className='text-center'>
                <p className='error-text'>{errorMessage}</p>
            </div>
        )}
        </div>
    );
}