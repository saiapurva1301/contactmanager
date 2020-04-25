import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from '../contacts/Contact';
const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <div>
        <Router>
          <div>
            <nav>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-home" />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact/add">
                    <i className="fas fa-plus" />
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <i className="fas fa-question" />
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Router>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

const headingStyle = {
  color: 'blue',
  fontSize: '40px',
};
export default Header;
