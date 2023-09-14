import React from 'react';
import styles from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/styles/BackgroundImage.module.css'; // Import the CSS module

const BackgroundImage = ({ children }) => {
  return (
    <div className={styles['background-image']}>
      {children}
    </div>
  );
};

export default BackgroundImage;
