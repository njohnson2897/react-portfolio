import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className='bg-secondary text-center fs-3'>
        <FaGithub className='mx-3'/>
        <FaLinkedin className='mx-3' />
        <MdEmail  className='mx-3' />
        </div>
    );
}