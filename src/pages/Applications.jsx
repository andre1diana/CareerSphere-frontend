import React from 'react';
import '../styles/applications.css';

const Applications = () => {
    const applications = [
        { id: 1, title: 'Software Developer', company: 'Tech Solutions Inc.', status: 'Pending' },
        { id: 2, title: 'Marketing Manager', company: 'Digital Marketing Agency', status: 'Reviewed' },
        { id: 3, title: 'Data Analyst', company: 'Data Insights Ltd.', status: 'Accepted' },
        { id: 4, title: 'UX/UI Designer', company: 'Creative Designs Studio', status: 'Pending' },
    ];

    return (
        <div className="applications">
            <h2>Job Applications</h2>
            <div className="application-list">
                {applications.map(application => (
                    <div key={application.id} className="application">
                        <h3>{application.title}</h3>
                        <p>Company: {application.company}</p>
                        <p>Status: {application.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
