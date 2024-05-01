import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setName()
    }
    return (
        <div>
        <form>
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
        </div>
    );
}