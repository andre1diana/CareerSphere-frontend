import React from 'react';
import { Link } from 'react-router-dom';

const EmployerPanel = () => {
  // Exemplu de date pentru anunțuri și aplicații
  const jobOffers = [
    { title: 'Frontend Developer', company: 'Tech Solutions', applications: 10, status: 'Active' },
    { title: 'Backend Developer', company: 'Innovatech', applications: 5, status: 'Active' },
    { title: 'UI/UX Designer', company: 'Creative Agency', applications: 3, status: 'Inactive' },
  ];

  return (
    <div className="card p-4 shadow-sm mb-4">

      {/* Secțiunea cu Anunțuri Active */}
      <div className="job-offers-summary">
        <h6>Active Ads</h6>
        <ul className="list-group">
          {jobOffers.filter(offer => offer.status === 'Active').map((offer, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{offer.title}</strong> at {offer.company}
              </div>
              <span className="badge bg-primary">{offer.applications} applications</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Secțiunea cu Butoane pentru gestionare */}
      <div className="mt-4">
        <h6>Manage Options</h6>
        <Link to="/joboffer" className="btn btn-primary me-2">Publish new offer</Link>
        <Link to="/applications" className="btn btn-secondary me-2">See Applications</Link>
      </div>
    </div>
  );
};

export default EmployerPanel;
