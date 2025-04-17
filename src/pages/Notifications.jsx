import React from 'react';
import '../styles/notifications.css';

const Notifications = () => {
    const notifications = [
        { id: 1, message: 'Your application for Software Developer has been reviewed.', status: 'Reviewed' },
        { id: 2, message: 'Your application for Data Analyst has been accepted!', status: 'Accepted' },
        { id: 3, message: 'Your application for UX/UI Designer is still pending.', status: 'Pending' },
    ];

    return (
        <div className="notifications-page">
            <div className="notifications-content">
                <h2>Notifications</h2>
                <ul className="notifications-list">
                    {notifications.map(notification => (
                        <li key={notification.id} className={`notification ${notification.status.toLowerCase()}`}>
                            {notification.message}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Notifications;
