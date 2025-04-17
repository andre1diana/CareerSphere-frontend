// src/context/JobOfferContext.jsx
import React, { createContext, useState, useContext } from 'react';

const JobOfferContext = createContext();

export const JobOfferProvider = ({ children }) => {
  const [jobOffers, setJobOffers] = useState([]);

  const addJobOffer = (newOffer) => {
    setJobOffers(prev => [...prev, newOffer]);
  };

  return (
    <JobOfferContext.Provider value={{ jobOffers, addJobOffer }}>
      {children}
    </JobOfferContext.Provider>
  );
};

export const useJobOffers = () => useContext(JobOfferContext);
