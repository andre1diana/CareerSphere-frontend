import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import Jobs from '../pages/Jobs';
import Applications from '../pages/Applications';
import Notifications from '../pages/Notifications';
import Messages from '../pages/Messages';
import JobOffer from '../pages/JobOffer';
import Contact from '../pages/Contact';
import AdminManagement from '../pages/AdminManagement';
import JobDetails from '../pages/JobDetails';

import PrivateRoute from './PrivateRoute';


import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.css';



function RoutesComponent() {
    return (
        <Router>
            <Navbar />
            <Messages />
            <div className="page-container">
                <div className='content-wrap'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute allowedRoles={['admin', 'company_employer', 'user']}>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/jobs" element={<Jobs />} />
                        <Route path="/applications" element={<Applications />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/messages" element={<Messages />} />
                        <Route
                            path="/settings"
                            element={
                                <PrivateRoute allowedRoles={['admin', 'company_employer', 'user']}>
                                    <Settings />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/dashboard" element={
                            <PrivateRoute allowedRoles={['admin', 'company_employer', 'user']}>
                                <Dashboard />
                            </PrivateRoute>
                            } 
                        />
                        <Route path="/contact" element={
                            <PrivateRoute allowedRoles={['admin', 'company_employer', 'user']}>
                                <Contact />
                            </PrivateRoute>
                            } 
                        />
                        <Route path="/joboffer" element={<JobOffer />} />
                        <Route path="/admin/management" element={<AdminManagement />} />
                        <Route path="/jobs/:id" element={<JobDetails />} />

                    </Routes>
                </div>
            <Footer />
            </div>
        </Router>
    );
}

export default RoutesComponent;
