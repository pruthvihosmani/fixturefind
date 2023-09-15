
// pages/index.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Select from 'react-select';
import styles from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/styles/styles.module.css'; // Import the styles

const Home = () => {
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/getPumpOptions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setOptions(data.pumpOptions);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (inputValue) => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptions(filteredOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/details?selectedAttribute=${selectedAttribute}`;
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.heading}>Pump Search</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form className={styles.searchPane} onSubmit={handleSubmit}>
          <Select
            options={options}
            isSearchable
            placeholder="Search for a pump attribute"
            value={options.find((option) => option.value === selectedAttribute)}
            onChange={(selectedOption) =>
              setSelectedAttribute(selectedOption ? selectedOption.value : '')
            }
            onInputChange={handleInputChange}
            className={styles.partInput}
          />
          <button type="submit" className={styles.submitButton}>
            Search
          </button>
        </form>
      )}
      <Link href="/details">
      </Link>
    </div>
  );
};

export default Home;
