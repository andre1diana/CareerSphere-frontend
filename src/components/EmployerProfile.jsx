// CompanyEmployerProfile.js
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useJobOffers } from '../context/JobOfferContext';
import EditProfileEmployer from './EditProfileEmployer';
import '../styles/profile.css';
import companyDefaultImg from '../assets/avatar.jpg';

const EmployerProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const { jobOffers, addJobOffer } = useJobOffers();
  const [activeTab, setActiveTab] = useState('profil');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [newJobData, setNewJobData] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    type: ''
  });

  const companyJobOffers = jobOffers.filter(job => job.companyId === user.id);

  const handleNewJobChange = (field, value) => {
    setNewJobData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddNewJob = () => {
    const jobOffer = {
      ...newJobData,
      id: Date.now(),
      companyId: user.id,
      companyName: user.name,
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    
    addJobOffer(jobOffer);
    
    // Reset the form
    setNewJobData({
      title: '',
      description: '',
      requirements: '',
      salary: '',
      location: '',
      type: ''
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profil':
        return isEditingProfile ? (
          <EditProfileEmployer
            user={user}
            onSave={(updatedUser) => {
              updateUser(updatedUser);
              setIsEditingProfile(false);
            }}
            onClose={() => setIsEditingProfile(false)}
          />
        ) : (
          <>
            <div className="company-info">
              <p className="company-description">{user.description}</p>
              <div className="company-details">
                <p><strong>Industry:</strong> {user.industry}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <p><strong>Website:</strong> <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                <p><strong>Founded:</strong> {user.founded}</p>
                <p><strong>Company size:</strong> {user.size}</p>
              </div>
            </div>
            <button className="edit-button" onClick={() => setIsEditingProfile(true)}>Edit Profile</button>
          </>
        );

      case 'joburi':
        return (
          <div className="profile-section">
            <div className="section-header">
              <h4>Posted Jobs</h4>
            </div>
            
            {/* Job listing section */}
            {companyJobOffers.length > 0 ? (
              <div className="job-listings">
                {companyJobOffers.map((job) => (
                  <div key={job.id} className="profile-item">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                      <span className="job-salary">{job.salary}</span>
                    </div>
                    <div className="job-description">
                      <h4>Description:</h4>
                      <p>{job.description}</p>
                    </div>
                    <div className="job-requirements">
                      <h4>Requirements:</h4>
                      <p>{job.requirements}</p>
                    </div>
                    <div className="job-status">
                      <span className={`status-badge ${job.status}`}>{job.status}</span>
                      <span className="job-date">Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No job offers posted yet.</p>
            )}
            <Link to="/joboffer" className="btn btn-primary me-2">Publish new offer</Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-pic-container">
          <img src={user.profileImage || companyDefaultImg} alt="Company Logo" className="profile-pic" />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-location">{user.location}</p>

        <div className="tabs">
          <button className={activeTab === 'profil' ? 'active' : ''} onClick={() => setActiveTab('profil')}>Company Profile</button>
          <button className={activeTab === 'joburi' ? 'active' : ''} onClick={() => setActiveTab('joburi')}>Jobs</button>
        </div>

        <div className="tab-content">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default EmployerProfile;