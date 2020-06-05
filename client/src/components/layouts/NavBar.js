import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-dark bg-primary'>
        <Link className='navbar-brand' to='#'>
          Fishes
        </Link>
      </nav>
    </Fragment>
  );
};

export default NavBar;
