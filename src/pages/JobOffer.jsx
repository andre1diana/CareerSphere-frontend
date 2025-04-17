import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useJobOffers } from '../context/JobOfferContext';
import "../styles/joboffer.css";

const JobOffer = () => {
  const { user } = useContext(AuthContext);
  const { addJobOffer } = useJobOffers();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: 'Software Engineer',
    company: 'Default Company',
    location: 'Bucharest, Romania',
    jobType: 'Full-time', 
    modality: 'On-site', 
    salary: '7000 RON / month',
    description: 'We are looking for a passionate software engineer to join our team and work on cutting-edge web technologies.',
  });
  

  useEffect(() => {
    if (user.role !== 'company_employer') {
      navigate('/unauthorized');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJobOffer({
      ...formData,
      id: Date.now(),
      postedBy: `${user.name} ${user.surname}`,
    });
    navigate('/dashboard');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow rounded-4 border-0">
            <div className="card-body p-4">
              <h2 className="mb-4 text-center">Create a New Job Offer</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Job Title</label>
                  <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control" name="company" value={formData.company} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Job Type</label>
                  <select className="form-select" name="jobType" value={formData.jobType} onChange={handleChange}>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Work Modality</label>
                  <select className="form-select" name="modality" value={formData.modality} onChange={handleChange}>
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Salary (optional)</label>
                  <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} placeholder="e.g. $3000/month or Negotiable" />
                </div>

                <div className="mb-4">
                  <label className="form-label">Job Description</label>
                  <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="4" required />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Publish Offer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
