// frontend/pages/details.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/styles/Details.module.css';

const Details = () => {
  const router = useRouter();
  const { selectedAttribute } = router.query;

  // State to store pump details
  const [pumpData, setPumpData] = useState(null);

  useEffect(() => {
    // Fetch pump details based on the selected attribute
    if (selectedAttribute) {
      fetch(`http://127.0.0.1:5000/api/getPumpDetails?attribute=${selectedAttribute}`)
        .then((response) => response.json())
        .then((data) => {
          setPumpData(data);
        })
        .catch((error) => {
          console.error('Error fetching pump details:', error);
        });
    }
  }, [selectedAttribute]);

  return (
    <div className={styles['details-container']}>
      <div className={styles['logo-container']}>
        <img src="/Users/pruthvihosmani/Desktop/flask13sep/frontend/public/images/1200px-Logo_of_Bosch_Rexroth_AG.svg.png" alt="Logo" className={styles['logo']} />
      </div>
      <div className={styles['details-content']}>
        <h1>Pump Details</h1>
        <div className={styles['detail-item']}>
          <h2>Pump</h2>
          <p>{pumpData && pumpData['Pump'] ? pumpData['Pump'] : 'No data'}</p>
        </div>
        <div className={styles['detail-item']}>
          <h2>A Side Fixture</h2>
          <p>{pumpData && pumpData['A Side Fixture'] ? pumpData['A Side Fixture'] : 'No data'}</p>
        </div>
        <div className={styles['detail-item']}>
          <h2>B Side Fixture</h2>
          <p>{pumpData && pumpData['B Side Fixture'] ? pumpData['B Side Fixture'] : 'No data'}</p>
        </div>
        <div className={styles['detail-item']}>
          <h2>Final Torquing Fixture</h2>
          <p>{pumpData && pumpData['Final Torquing Fixture'] ? pumpData['Final Torquing Fixture'] : 'No data'}</p>
        </div>
        <div className={styles['detail-item']}>
          <h2>Position Pin Dia</h2>
          <p>{pumpData && pumpData['Position Pin Dia'] ? pumpData['Position Pin Dia'] : 'No data'}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
