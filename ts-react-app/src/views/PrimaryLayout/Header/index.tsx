import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './index.style';
import { globalNav, navLinks, navItem } from './index.css'

function Header() {
  return (
    <HeaderContainer className="container">
      <nav className={globalNav}>
        <ul className={navLinks}>
          <li>
            <Link to="/" className={navItem}>Home</Link>
          </li>
          <li>
            <Link to="/blog" className={navItem}>Blog</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header