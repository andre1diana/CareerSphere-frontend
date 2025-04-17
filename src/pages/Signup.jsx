import React, { useContext } from 'react';
import '../styles/signup.css';
import { UsersContext } from '../context/UsersContext';
import { AuthContext } from '../context/AuthContext';

function Signup() {
  const { addUser, users } = useContext(UsersContext);
  const { login } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();

    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const [name, surname] = fullName.split(' ');

    // Check for duplicate email
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('An account with this email already exists!');
      return;
    }

    const newUser = {
      email,
      password,
      role,
      name: name || '',
      surname: surname || ''
    };

    addUser(newUser);
    login({ role, email, name: newUser.name, surname: newUser.surname });
    alert('Account created successfully!');
    window.location.href = '/dashboard';
  };

  return (
    <div className="signup-page">
      <div className="signup-card card">
        <div className="card-body">
          <h2 className="text-center">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group mb-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="role">Select Role</label>
              <select className="form-control" id="role" required>
                <option value="">-- Choose a role --</option>
                <option value="user">User</option>
                <option value="company_employer">Employer</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Create Account
            </button>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
