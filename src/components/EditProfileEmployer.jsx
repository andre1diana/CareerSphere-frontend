import React, { useState, useEffect } from 'react';

const EditProfileEmployer = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: 'Default Company',
    industry: 'Technology',
    location: 'Bucharest, Romania',
    description: 'We are a leading company in the tech industry, building innovative solutions for the future.',
    website: 'https://www.defaultcompany.com',
    founded: '2010',
    size: '51-200 employees',
    profileImage: localStorage.getItem('profileImage') || '',
  });
  
  useEffect(() => {
    setFormData({
      name: user.name || 'Default Company',
      industry: user.industry || 'Technology',
      location: user.location || 'Bucharest, Romania',
      description: user.description || 'We are a leading company in the tech industry, building innovative solutions for the future.',
      website: user.website || 'https://www.defaultcompany.com',
      founded: user.founded || '2010',
      size: user.size || '51-200 employees',
      profileImage: user.profileImage || localStorage.getItem('profileImage') || '',
    });
  }, [user]);
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profileImage' && files[0]) {
      const imageURL = URL.createObjectURL(files[0]);
      setFormData(prev => ({ ...prev, profileImage: imageURL }));
      localStorage.setItem('profileImage', imageURL);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    onSave(updatedUser);
  };

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <h2>Edit Company Profile</h2>

        <label>Company Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Industry</label>
        <input type="text" name="industry" value={formData.industry} onChange={handleChange} />

        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />

        <label>Website</label>
        <input type="text" name="website" value={formData.website} onChange={handleChange} />

        <label>Founded</label>
        <input type="text" name="founded" value={formData.founded} onChange={handleChange} />

        <label>Company Size</label>
        <input type="text" name="size" value={formData.size} onChange={handleChange} />

        <label>Company Logo</label>
        <input type="file" name="profileImage" accept="image/*" onChange={handleChange} />

        {formData.profileImage && (
          <img src={formData.profileImage} alt="Preview" className="preview-img" />
        )}

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileEmployer;
