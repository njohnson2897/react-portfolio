import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// came from module 20 mini project
export default function Nav() {
    return (
      <Navbar
        links={[
        <Link key={1} className="nav-link text-light" to="/">
            About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
            Portfolio
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
            Contact
        </Link>,
        <Link key={4} className="nav-link text-light" to="/resume">
            Resume
        </Link>,
        ]}
      />
    );
  }