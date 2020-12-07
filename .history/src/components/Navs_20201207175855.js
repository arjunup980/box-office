import React from 'react'
import { Link } from 'react-router-dom'

const Navs = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/start">Go to starred pages</Link>
        </li>
      </ul>

    </div>
  );
};

export default Navs;
