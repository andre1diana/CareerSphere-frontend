import React, { useState } from 'react';

const EditProfileModal = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: user.name || 'John Doe',
    title: user.title || 'Frontend Developer',
    location: user.location || 'Cluj-Napoca, Romania',
    bio: user.bio || 'It ain`t much but it`s honest work.',
    skills: user.skills?.join(', ') || 'JavaScript, React, HTML, CSS, Git',
    profileImage: '../assets/avatar.jpg' || localStorage.getItem('profileImage'),
    experience: user.experience || [
      {
        id: 1,
        company: 'Tech Solutions SRL',
        position: 'Frontend Developer',
        startDate: '2022-01-01',
        endDate: '2024-01-01',
        description: 'Developed and maintained the user interface of a client portal using React and Bootstrap.'
      }
    ],
    education: user.education || [
      {
        id: 1,
        school: 'Universitatea Tehnică din Cluj-Napoca',
        degree: 'Bachelor in Computer Science',
        startDate: '2018-10-01',
        endDate: '2021-07-01',
        description: 'Studied computer science with a focus on web development and software engineering.'
      }
    ],
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'profileImage' && files[0]) {
      const imageURL = URL.createObjectURL(files[0]);
      if (formData.profileImage) {
        localStorage.setItem('profileImage', formData.profileImage);
      }
      setFormData(prev => ({ ...prev, profileImage: imageURL }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: '', position: '', startDate: '', endDate: '' },
      ],
    }));
  };

  const handleAddEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { school: '', diploma: '', startDate: '', endDate: '' },
      ],
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...formData.experience];
    updatedExperience[index][field] = value;
    setFormData(prev => ({ ...prev, experience: updatedExperience }));
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData(prev => ({ ...prev, education: updatedEducation }));
  };

  const handleDeleteExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, experience: updatedExperience }));
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, education: updatedEducation }));
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: formData.name,
      title: formData.title,
      location: formData.location,
      bio: formData.bio,
      profileImage: formData.profileImage,
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
      experience: formData.experience,
      education: formData.education,
    };

    localStorage.setItem('profileImage', formData.profileImage);
    onSave(updatedUser);
  };

  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <h2>Edit Profile</h2>

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} />

        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} />

        <label>Bio</label>
        <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="3" />

        <label>Skills (comma-separated)</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} />

        <label>Profile Picture</label>
        <input type="file" name="profileImage" accept="image/*" onChange={handleInputChange} />

        {formData.profileImage && (
          <img src={formData.profileImage} alt="Preview" className="preview-img" />
        )}

        <div className="experience-section">
          <h3>Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <label>Company Name</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              />
              <label>Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              />
              <label>Start Date (Month/Year)</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
              />
              <label>End Date (Month/Year)</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
              />
              <button type="button" className="delete-button" onClick={() => handleDeleteExperience(index)}>Delete</button>
            </div>
          ))}
          <button type="button" className="add-button" onClick={handleAddExperience}>Add Experience</button>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <label>School Name</label>
              <input
                type="text"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
              />
              <label>Diploma</label>
              <input
                type="text"
                value={edu.diploma}
                onChange={(e) => handleEducationChange(index, 'diploma', e.target.value)}
              />
              <label>Start Date (Month/Year)</label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
              />
              <label>End Date (Month/Year)</label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
              />
              <button type="button" className="delete-button" onClick={() => handleDeleteEducation(index)}>Delete</button>
            </div>
          ))}
          <button type="button" className="add-button" onClick={handleAddEducation}>Add Education</button>
        </div>

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
