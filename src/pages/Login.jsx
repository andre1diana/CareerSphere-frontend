import React, { useContext } from 'react';
import '../styles/login.css';
import { AuthContext } from '../context/AuthContext';
import { UsersContext } from '../context/UsersContext';

const api_location = "http://localhost:8080/api/";

function Login() {
  const { login } = useContext(AuthContext);
  const { users } = useContext(UsersContext);

  function login_action(e) {
    e.preventDefault();
    console.log('Login button clicked');
  
    fetch(api_location + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Content-Type, Authorization'
        },
        body: JSON.stringify({
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.status === 'success') {
            alert('Login successful');
            login({ role: "user", email: data.email });
            window.location.href = '/dashboard';
        } else {
            alert('Login failed');
        }
    })
    .catch(error => console.error('Error:', error));
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const matchedUser = users.find(user => user.email === email && user.password === password);
    
    if (matchedUser) {
      alert('Login successful');
      login({ role: matchedUser.role, email: matchedUser.email, name: matchedUser.name, surname: matchedUser.surname, 
        profileImage: matchedUser.profileImage, experience: matchedUser.experience, education: matchedUser.education });
      window.location.href = '/dashboard';
    } else {
      alert('Login failed: Invalid email or password');
    }
  }

  return (
    <div className="login-page">
      <div className="login-card card">
        <div className="card-body">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
          </form>
          <div className="mt-4">
            <p><strong>Test Accounts:</strong></p>
            <ul>
              <li>User: <code>user@example.com</code> / <code>user123</code></li>
              <li>Admin: <code>admin@example.com</code> / <code>admin123</code></li>
              <li>Employer: <code>employer@example.com</code> / <code>employer123</code></li>
            </ul>
          </div>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
