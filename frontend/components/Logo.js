import React from 'react';
import styles from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/styles/Logo.module.css'; // Updated CSS module path

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="/Users/pruthvihosmani/Desktop/flask13sep/frontend/public/1200px-Logo.jpeg" alt="Logo" width={150} height={50} /> {/* Updated image path */}
    </div>
  );
};

export default Logo;
