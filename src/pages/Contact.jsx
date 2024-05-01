import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [errorMessage, setErrorMessage] =  useState('');
    const [email, setEmail] = useState('');
    const [userName, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }
        alert('Thank you for your message, I will respond as soon as possible');
    };

    const handleNoInput = (e) => {
        const { name, value } =  e.target;
        if(name === 'name' && value === '') {
            setErrorMessage(`Please enter your ${name}`)
            setName(value)
        } else if (name === 'email' && value === '') {
            setErrorMessage(`Please enter your ${name}`)
            setEmail(value)
        } else if (name === 'message' && value === '') {
            setErrorMessage(`Please enter your ${name}`)
            setMessage(value)
        }
    };

    return (
        <div>
        <form className='form text-center' onSubmit={handleFormSubmit}>
        <div className="input-group my-3">
        <span className="input-group-text">Name</span>
        <input 
            value={userName}
            name='name'
            type="text" 
            className="form-control"
            placeholder='Your name'
            onBlur={handleNoInput}/>
        </div>
        <div className="input-group my-3">
        <span className="input-group-text">Email</span>
        <input 
            value={email} 
            name='email'
            type="text" 
            className="form-control"
            placeholder='Your email'
            onBlur={handleNoInput}/>
        </div>
        <div className="input-group my-3">
        <span className="input-group-text">Message</span>
        <textarea 
            value={message}
            name='message'
            type="text" 
            className="form-control" 
            placeholder='Your message'
            onBlur={handleNoInput}>
            </textarea>
        </div>
        <button type="submit" className="btn btn-secondary my-3">Submit</button>
        </form>
        {errorMessage && (
            <div className='text-center'>
                <p className='error-text  text-danger'>{errorMessage}</p>
            </div>
        )}
        </div>
    );
}