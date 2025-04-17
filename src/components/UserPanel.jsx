import React from 'react';

const myApplications = [
  { jobTitle: 'React Developer', company: 'Tech Solutions', status: 'In process' },
  { jobTitle: 'UI/UX Designer', company: 'Creative Agency', status: 'Rejected' },
  { jobTitle: 'Frontend Engineer', company: 'StartupX', status: 'Accepted' },
  { jobTitle: 'DevOps Engineer', company: 'CloudNet', status: 'In process' },
  { jobTitle: 'Product Manager', company: 'AgileX', status: 'In process' },
];

const suggestedJobs = [
  { jobTitle: 'Full Stack Developer', company: 'Innovatech' },
  { jobTitle: 'Software Engineer', company: 'NextGen Software' },
  { jobTitle: 'Frontend Developer', company: 'Visionary Labs' },
  { jobTitle: 'Cybersecurity Analyst', company: 'SecureTech' },
  { jobTitle: 'Cloud Architect', company: 'Cloudify' },
  { jobTitle: 'Business Analyst', company: 'Market Insights' },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'accepted':
      return 'success';
    case 'rejected':
      return 'danger';
    case 'in process':
      return 'warning';
    default:
      return 'secondary';
  }
};

const UserPanel = () => {
  return (
    <div className="container my-5">
      <h4 className="mt-5 mb-3">My Applications</h4>
      <div className="d-flex flex-column gap-4">
        {myApplications.map((app, index) => (
          <div
            key={index}
            className="card flex-row align-items-center p-3"
            style={{
              width: '100%',
              backgroundColor: '#f9f9f9',
              borderRadius: '16px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div className="ms-4" style={{ marginLeft: '20px', marginRight: '20px', flex: 1 }}>
              <h5 className="mb-1">{app.jobTitle}</h5>
              <small className="text-muted">at {app.company}</small>
              <div className="mt-2">
                <span className={`badge bg-${getStatusColor(app.status)}`}>{app.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mt-5 mb-3">Suggested Jobs</h4>
      {suggestedJobs.map((job, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title mb-0">{job.jobTitle}</h5>
              <small className="text-muted">at {job.company}</small>
            </div>
            <button className="btn btn-outline-primary btn-sm">Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPanel;