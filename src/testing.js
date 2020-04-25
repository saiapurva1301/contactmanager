import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    About
                  </Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/add">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
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

export default Header;
