import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
]

const Navs = () => {
  return (
    <div>
      <NavList>
        {
          LINKS.map(item => <li key={item.to}><Link to={item.to}>{item.text}</Link></li>)
        }
      </NavList>

    </div>
  );
};

export default Navs;
