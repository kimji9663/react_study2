import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="container">
      <nav className="global_nav">
        <ul className="global_nav_links">
          <li>
            <Link to="/" className="global_nav_item">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="global_nav_item">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header
