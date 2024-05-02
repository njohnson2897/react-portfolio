import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className='bg-secondary text-center fs-3'>
        <a href='https://github.com/njohnson2897'><FaGithub className='mx-3 text-white'/></a>
        <a href='https://linkedin.com/in/nate-johnson-87396422b'><FaLinkedin className='mx-3  text-white' /></a>
        <a href='mailto:njohnson2897@gmail.com'><MdEmail  className='mx-3 text-white' /></a>
        </div>
    );
}