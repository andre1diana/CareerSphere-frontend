import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/profile.css';
import avatarImg from '../assets/avatar.jpg';
import EditProfileModal from './ProfileEdit';

const UserProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profil');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const profileImage = localStorage.getItem('profileImage') || avatarImg;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profil':
        return (
          <>
            <p className="profile-bio">{user.bio}</p>
            <div className="profile-skills">
              <h4>Skills:</h4>
              <ul>
                {user.skills?.map((skill, index) => (
                  <li key={index} className="skill">{skill}</li>
                ))}
              </ul>
            </div>
          </>
        );

      case 'experienta':
        return (
          <div className="profile-section">
            <h4>Professional Experience</h4>
            {user.experience?.map((job, index) => (
              <div key={index} className="profile-item">
                <strong>{job.role}</strong> at <em>{job.company}</em>
                <div className="item-period">{job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}</div>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        );
        

        case 'educatie':
          return (
            <div className="profile-section">
              <h4>Education</h4>
              {user.education?.map((edu, index) => (
                <div key={index} className="profile-item">
                  <strong>{edu.institution}</strong>
                  <div>{edu.degree}</div>
                  <div className="item-period">{edu.startYear} - {edu.endYear}</div>
                </div>
              ))}
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
          <img src={profileImage} alt="Profil" className="profile-pic" />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-title">{user.title}</p>
        <p className="profile-location">{user.location}</p>

        <div className="tabs">
          <button className={activeTab === 'profil' ? 'active' : ''} onClick={() => setActiveTab('profil')}>Profile</button>
          <button className={activeTab === 'experienta' ? 'active' : ''} onClick={() => setActiveTab('experienta')}>Experience</button>
          <button className={activeTab === 'educatie' ? 'active' : ''} onClick={() => setActiveTab('educatie')}>Education</button>
        </div>

        <div className="tab-content">{renderTabContent()}</div>

        <button className="edit-button" onClick={() => setIsEditModalOpen(true)}>Edit Profile</button>
      </div>

      {isEditModalOpen && (
        <EditProfileModal
          user={user}
          onSave={(updatedUser) => {
            updateUser(updatedUser);
            setIsEditModalOpen(false);
          }}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;