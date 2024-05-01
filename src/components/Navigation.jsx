import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

// came from module 20 mini project
export default function Nav() {
  const currentPage = useLocation().pathname;
    return (
      <Navbar
        links={[
        <Link key={1} className={currentPage === '/' ? "nav-link active" : 'nav-link text-light'} to="/">
            About Me
        </Link>,
        <Link key={2} className={currentPage === '/portfolio' ? "nav-link active" : 'nav-link text-light'} to="/portfolio">
            Portfolio
        </Link>,
        <Link key={3} className={currentPage === '/contact' ? "nav-link active" : 'nav-link text-light'} to="/contact">
            Contact
        </Link>,
        <Link key={4} className={currentPage === '/resume' ? "nav-link active" : 'nav-link text-light'} to="/resume">
            Resume
        </Link>,
        ]}
      />
    );
  }