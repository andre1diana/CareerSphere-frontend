import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import '../styles/jobdetails.css';
import { AuthContext } from '../context/AuthContext';

function JobDetails() {
const { user } = useContext(AuthContext);
const { id } = useParams();
const navigate = useNavigate();
const location = useLocation();
const job = location.state?.job;

if (!job) {
    return <p>Job details not found. Please go back and try again.</p>;
}

return (
    <div className="job-details-page">
        <div className="job-header">
            <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=random&size=150`}
                alt={job.company}
            />

            <div>
                <h2>{job.title}</h2>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Category:</strong> {job.category}</p>
            </div>
        </div>

        <div className="job-description">
        <h3>Job Description</h3>
        <p>
            We are looking for a dedicated and motivated professional, passionate about excellence and continuous development, 
            to join our dynamic team. This role involves close collaboration with colleagues across various departments, 
            actively contributing to the company’s goals through strong technical skills, effective communication, and analytical thinking.
        </p>

        <h4 className="mt-4">🔧 Key Responsibilities</h4>
        <ul>
            <li>Actively participate in the planning, implementation, and optimization of activities related to your field of expertise.</li>
            <li>Collaborate with internal and external teams to ensure efficient communication and timely project delivery.</li>
            <li>Monitor performance and identify opportunities for process improvements or better outcomes.</li>
            <li>Maintain a high level of professionalism, quality, and accountability in all assigned tasks.</li>
            <li>Comply with work standards, internal policies, and the strategic objectives of the company.</li>
        </ul>

        <h4 className="mt-4">🎓 Requirements</h4>
        <ul>
            <li>Completed studies in a relevant field .</li>
            <li>Excellent organizational skills and attention to detail.</li>
            <li>Ability to work independently as well as part of a team.</li>
            <li>Willingness to learn and adapt in a dynamic work environment.</li>
            <li>Technical/operational knowledge relevant to the role.</li>
        </ul>

        <h4 className="mt-4">🎁 What We Offer</h4>
        <ul>
            <li>A stable, professional, and friendly working environment.</li>
            <li>Real opportunities for professional and personal growth.</li>
            <li>Involvement in innovative and strategic projects.</li>
            <li>Competitive salary package and benefits tailored to your needs.</li>
            <li>Flexible work schedule and support for maintaining a healthy work-life balance.</li>
        </ul>

        </div>

        {user.role === 'user' && (
            <button className="apply-button" onClick={() => alert("Applied to " + job.title)}>
                Apply Now
            </button>
        )}


        <button className="back-button" onClick={() => navigate(-1)}>
            ← Back to Listings
        </button>
    </div>
    );
}

export default JobDetails;
