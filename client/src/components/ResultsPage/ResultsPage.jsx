import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { destinationValue, travelDates, peopleDetails } = location.state || {};

  useEffect(() => {
    if (!destinationValue || !travelDates || !peopleDetails) {
      navigate('/');
    }
  }, [destinationValue, travelDates,  peopleDetails, navigate]);

  return (
    <div>
      <h1>Form Results</h1>
      {destinationValue && travelDates && peopleDetails ? (
        <div>
          <p><strong>Field 1:</strong> {destinationValue.airport_name}</p>
          <p><strong>Field 2:</strong> {travelDates.map((date, index) => (
                    <div key={index}>
                        <p>From: {date.startDate.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            })};
                        </p>
                        <p>To: {date.endDate.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            })};
                        </p>
                    </div>
                ))}</p>
          <p><strong>Field 2:</strong> {peopleDetails.group}</p>
        </div>
      ) : (
        <p>No form data available. Redirecting...</p>
      )}
    </div>
  );
}
