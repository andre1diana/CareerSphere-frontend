import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/navbar.css';
import logo from '../assets/Logo3_0.png';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="navbar-brand d-flex align-items-center">
        <img src={logo} alt="CareerSphere Logo" width="40" height="40" />
        <Link className="navbar-title" to="/">CareerSphere</Link>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <ul className="navbar-nav text-center text-md-left">
            <li className="nav-item active">
              <Link className="nav-link nav-icon" to="/dashboard">
                <i className="fa fa-home"></i>
                <span>Home</span>
              </Link>
            </li>

            {user.role !== 'guest' && (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle nav-icon btn btn-link"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle"></i>
                  <span>Profile</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/profile">My Profile</Link>
                  <Link className="dropdown-item" to="/applications">Applications</Link>
                  <Link className="dropdown-item" to="/notifications">Notifications</Link>

                  {/* DOAR pentru ADMIN */}
                  {user.role === 'admin' && (
                    <>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item text-danger" to="/admin/management">
                        <i className="fa fa-tools mr-2"></i>Management
                      </Link>
                    </>
                  )}
                </div>
              </li>
            )}


            <li className="nav-item">
              <Link className="nav-link nav-icon" to="/jobs">
                <i className="fa fa-briefcase"></i>
                <span>Jobs</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-icon" to="/settings">
                <i className="fa fa-cogs"></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>

          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
            <form className="form-inline mt-2 mt-md-0 ml-3">
            {user.role === 'guest' ? (
            <Link to="/login" className="btn btn-outline-light my-2 my-sm-0">Login</Link>
          ) : (
            <button className="btn btn-outline-light my-2 my-sm-0" onClick={logout}>
              Logout
            </button>
          )}
            </form>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
