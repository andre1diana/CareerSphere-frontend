import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/profile.css';
import adminDefaultImg from '../assets/avatar.jpg';

const AdminProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Admin',
    email: 'admin@examplecom',
    role: 'admin',
    department: 'personnel',
    joinDate: '2023-10-01'
  });

  useEffect(() => {
    setFormData({
      name: user.name || 'Admin',
      email: user.email || 'admin@example.com',
      role: user.role || 'admin',
      department: user.department || 'personnel',
      joinDate: user.joinDate || '2023-10-01'
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser({ ...user, ...formData });
    setIsEditing(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <>
            {isEditing ? (
              <div className="admin-edit-form">
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Department</label>
                  <input 
                    type="text" 
                    name="department" 
                    value={formData.department} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Join Date</label>
                  <input 
                    type="date" 
                    name="joinDate" 
                    value={formData.joinDate} 
                    onChange={handleChange} 
                  />
                </div>
                
                <button className="save-button" onClick={handleSave}>Save Changes</button>
                <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            ) : (
              <div className="admin-details">
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{user.email}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{user.department}</span>
                </div>
                
                <div className="detail-item">
                  <span className="detail-label">Admin Since:</span>
                  <span className="detail-value">{user.joinDate}</span>
                </div>
                
                <div className="admin-actions">
                  <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
              </div>
            )}
            
            <div className="admin-stats">
              <h3>Administration Statistics</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-value">{user.userCount || 0}</span>
                  <span className="stat-label">Total Users</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{user.companyCount || 0}</span>
                  <span className="stat-label">Companies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{user.jobCount || 0}</span>
                  <span className="stat-label">Job Postings</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{user.reportsHandled || 0}</span>
                  <span className="stat-label">Reports Handled</span>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card admin-profile">
        <div className="profile-pic-container">
          <img src={user.profileImage || adminDefaultImg} alt="Admin" className="profile-pic" />
        </div>
        
        <h2 className="profile-name">{user.name}</h2>
        <div className="admin-badge">Administrator</div>
        
        <div className="tabs">
          <button 
            className={activeTab === 'profile' ? 'active' : ''} 
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
        </div>
        
        <div className="tab-content">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default AdminProfile;
