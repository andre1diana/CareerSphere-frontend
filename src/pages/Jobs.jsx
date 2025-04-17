import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/jobs.css';

function Jobs() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('All');
  const [category, setCategory] = useState('All');
  const [appliedFilters, setAppliedFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const jobData = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', type: 'Full-time', category: 'IT' },
    { id: 2, title: 'Marketing Specialist', company: 'MarketInc', location: 'New York', type: 'Part-time', category: 'Marketing' },
    { id: 3, title: 'Finance Analyst', company: 'FinCorp', location: 'London', type: 'Full-time', category: 'Finance' },
    { id: 4, title: 'HR Manager', company: 'PeopleFirst', location: 'Remote', type: 'Full-time', category: 'HR' },
  ];

  const filterJobs = () => {
    const filtered = jobData.filter(job => {
      return (
        (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
        (jobType !== 'All' ? job.type === jobType : true) &&
        (category !== 'All' ? job.category === category : true)
      );
    });
    setFilteredJobs(filtered);  
    setAppliedFilters(true);
  };

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleJobTypeChange = (e) => setJobType(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  // Funcție pentru a deschide detalii job
  const openJobDetails = (job) => {
    navigate(`/jobs/${job.id}`, { state: { job } });
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h4>Filters</h4>
        <div className="filter-group">
          <label>Location</label>
          <input type="text" placeholder="Enter city" value={location} onChange={handleLocationChange} />
        </div>
        <div className="filter-group">
          <label>Job Type</label>
          <select value={jobType} onChange={handleJobTypeChange}>
            <option>All</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Category</label>
          <select value={category} onChange={handleCategoryChange}>
            <option>All</option>
            <option>IT</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>HR</option>
          </select>
        </div>
        <button className="filter-btn" onClick={filterJobs}>Apply Filters</button>
      </div>

      <div className="job-list">
        {appliedFilters && filteredJobs.length === 0 ? (
          <p>No jobs found with the applied filters.</p>
        ) : (
          filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div className="job-card" key={job.id}>
                <h5>{job.title}</h5>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Type: {job.type}</p>
                <button className="apply-btn" onClick={() => openJobDetails(job)}>View Details</button>
              </div>
            ))
          ) : (
            jobData.map((job) => (
              <div className="job-card" key={job.id}>
                <h5>{job.title}</h5>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Type: {job.type}</p>
                <button className="apply-btn" onClick={() => openJobDetails(job)}>View Details</button>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
}

export default Jobs;
