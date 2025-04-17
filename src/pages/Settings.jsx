import React from 'react';
import '../styles/settings.css';

function Settings() {
  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <section className="settings-section">
        <h4>Account & Security</h4>
        <div className="settings-item">
          <label>Email</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <div className="settings-item">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <div className="settings-item">
          <label>Two-Factor Authentication</label>
          <select>
            <option>Disabled</option>
            <option>Enabled</option>
          </select>
        </div>
      </section>

      <section className="settings-section">
        <h4>Profile Preferences</h4>
        <div className="settings-item">
          <label>Job Type Preference</label>
          <select>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Job Search Status</label>
          <select>
            <option>Actively looking</option>
            <option>Open to offers</option>
            <option>Not looking</option>
          </select>
        </div>
      </section>

      <section className="settings-section">
        <h4>Notifications</h4>
        <div className="settings-item">
          <label>Email Notifications</label>
          <select>
            <option>All</option>
            <option>Only important</option>
            <option>None</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Push Notifications</label>
          <select>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
      </section>

      <section className="settings-section">
        <h4>General</h4>
        <div className="settings-item">
          <label>Language</label>
          <select>
            <option>English</option>
            <option>Română</option>
          </select>
        </div>
        <div className="settings-item">
          <label>Theme</label>
          <select>
            <option>Light</option>
            <option>Dark</option>
            <option>System default</option>
          </select>
        </div>
      </section>

      <section className="settings-section">
        <h4>Feedback & Support</h4>
        <div className="settings-item">
          <label>Message</label>
          <textarea rows="4" placeholder="Let us know what you think..." />
        </div>
        <button className="save-btn">Submit Feedback</button>
      </section>
    </div>
  );
}

export default Settings;
