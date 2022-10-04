import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as Crown } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <img src="../../assets/crown.svg" />
          {/* <Crown /> */}
        </Link>
        <div className="nav-link-container"></div>
        <Link to="/shop">Shop</Link>
        <Link to="/signIn">Sign In</Link>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
