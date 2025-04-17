import React, { useState } from 'react';

const JobManagement = () => {
  const [jobs, setJobs] = useState([
    { id: 101, title: 'Frontend Developer', active: true },
    { id: 102, title: 'Backend Engineer', active: false },
  ]);

  const toggleJobStatus = (id) => {
    setJobs(prevJobs =>
      prevJobs.map(job =>
        job.id === id ? { ...job, active: !job.active } : job
      )
    );
  };

  const deleteJob = (id) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
  };

  return (
    <div className="container mt-5">
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(j => (
            <tr key={j.id}>
              <td>{j.title}</td>
              <td>{j.active ? 'Active' : 'Inactive'}</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2" style={{width:'100px'}} onClick={() => toggleJobStatus(j.id)}>
                  {j.active ? 'Deactivate' : 'Activate'}
                </button>
                <button className="btn btn-danger btn-sm" style={{width:'100px'}} onClick={() => deleteJob(j.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobManagement;
