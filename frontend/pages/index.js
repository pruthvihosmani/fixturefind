// frontend/pages/index.js

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]); // Suggestions for the "Pump" attribute

//   // Dummy data for options (you will replace this with real data)
//   const dummyOptions = [
//     { value: 'R983085082', label: 'R983085082' },
//     { value: 'R983085405', label: 'R983085405' },
//   ];

//   // Handle input change and update suggestions
//   const handleInputChange = (inputValue) => {
//     // You can make API calls to fetch suggestions based on inputValue here
//     // For now, we'll use the dummyOptions as an example
//     const filteredOptions = dummyOptions.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement navigation to the details page with the selectedAttribute
//     // For now, we'll display it as an alert
//     alert(`Selected Attribute: ${selectedAttribute}`);
//   };

//   return (
//     <div>
//       <h1>Pump Search</h1>
//       <form onSubmit={handleSubmit}>
//         <Select
//           options={options}
//           isSearchable
//           placeholder="Search for a pump attribute"
//           value={options.find((option) => option.value === selectedAttribute)}
//           onChange={(selectedOption) =>
//             setSelectedAttribute(selectedOption ? selectedOption.value : '')
//           }
//           onInputChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <Link href="/details">
//         <a>Go to Details Page</a>
//       </Link>
//     </div>
//   );
// };

// export default Home;

// frontend/pages/index.js

// frontend/pages/index.js

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';
// import csv from 'csv-parser';
// import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css'; // Import the styles using the styles object

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/getPumpOptions'); // Replace with your API endpoint
//         const data = await response.body.pipe(csv());
//         const uniquePumps = new Set();

//         data.forEach((row) => {
//           uniquePumps.add(row.Pump);
//         });

//         const pumpOptions = Array.from(uniquePumps).map((pump) => ({
//           value: pump,
//           label: pump,
//         }));

//         setOptions(pumpOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (inputValue) => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push(`/details?selectedAttribute=${selectedAttribute}`);
//   };

//   return (
//     <div className={styles.pageContainer}> {/* Use the styles object */}
//       <h1 className={styles.heading}>Pump Search</h1> {/* Use the styles object */}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form className={styles.form} onSubmit={handleSubmit}>
//   <Select
//     options={options}
//     isSearchable
//     placeholder="Search for a pump attribute"
//     value={options.find((option) => option.value === selectedAttribute)}
//     onChange={(selectedOption) =>
//       setSelectedAttribute(selectedOption ? selectedOption.value : '')
//     }
//     onInputChange={handleInputChange}
//   />
//   <button type="submit">Search</button>
// </form>
//       )}
//       <Link href="/details">
//         <a className={styles.detailsLink}>Go to Details Page</a> {/* Use the styles object */}
//       </Link>
//     </div>
//   );
// };

// export default Home;
// frontend/pages/index.js

// frontend/pages/index.js

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';
// import csv from 'csv-parser';

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/getPumpOptions');
//         const data = await response.body.pipe(csv());
//         const uniquePumps = new Set();

//         data.forEach((row) => {
//           uniquePumps.add(row.Pump);
//         });

//         const pumpOptions = Array.from(uniquePumps).map((pump) => ({
//           value: pump,
//           label: pump,
//         }));

//         setOptions(pumpOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (inputValue) => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Redirect to the details page with the selected attribute
//     window.location.href = `/details?selectedAttribute=${selectedAttribute}`;
//   };

//   return (
//     <div>
//       <h1>Pump Search</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <Select
//             options={options}
//             isSearchable
//             placeholder="Search for a pump attribute"
//             value={options.find((option) => option.value === selectedAttribute)}
//             onChange={(selectedOption) =>
//               setSelectedAttribute(selectedOption ? selectedOption.value : '')
//             }
//             onInputChange={handleInputChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       )}
//       <Link href="/details">
//         <div>
//           <a>Go to Details Page</a>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';
// import csv from 'csv-parser';

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/getPumpOptions');
//         const data = await response.body.pipe(csv());
//         const uniquePumps = new Set();

//         data.forEach((row) => {
//           uniquePumps.add(row.Pump);
//         });

//         const pumpOptions = Array.from(uniquePumps).map((pump) => ({
//           value: pump,
//           label: pump,
//         }));

//         setOptions(pumpOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (inputValue) => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Redirect to the details page with the selected attribute
//     window.location.href = `/details?selectedAttribute=${selectedAttribute}`;
//   };

//   return (
//     <div>
//       <h1>Pump Search</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <Select
//             options={options}
//             isSearchable
//             placeholder="Search for a pump attribute"
//             value={options.find((option) => option.value === selectedAttribute)}
//             onChange={(selectedOption) =>
//               setSelectedAttribute(selectedOption ? selectedOption.value : '')
//             }
//             onInputChange={handleInputChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       )}
//       <div>
//         <Link href="/details">
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';
// import csv from 'csv-parser';
// import Background from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/components/BackgroundImage.js'; // Import your Background component
// import Logo from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/components/Logo.js'; // Import your Logo component

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/getPumpOptions');
//         const data = await response.body.pipe(csv());
//         const uniquePumps = new Set();

//         data.forEach((row) => {
//           uniquePumps.add(row.Pump);
//         });

//         const pumpOptions = Array.from(uniquePumps).map((pump) => ({
//           value: pump,
//           label: pump,
//         }));

//         setOptions(pumpOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (inputValue) => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Redirect to the details page with the selected attribute
//     window.location.href = `/details?selectedAttribute=${selectedAttribute}`;
//   };

//   return (
//     <div>
//       <Background /> {/* Add the Background component */}
//       <Logo /> {/* Add the Logo component */}
//       <h1>Pump Search</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <Select
//             options={options}
//             isSearchable
//             placeholder="Search for a pump attribute"
//             value={options.find((option) => option.value === selectedAttribute)}
//             onChange={(selectedOption) =>
//               setSelectedAttribute(selectedOption ? selectedOption.value : '')
//             }
//             onInputChange={handleInputChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       )}
//       <div>
//         <Link href="/details">
//           {/* Your Link component goes here */}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';
// import Background from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/components/BackgroundImage.js'; // Import your Background component
// import Logo from '/Users/pruthvihosmani/Desktop/flask13sep/frontend/components/Logo.js'; // Import your Logo component

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/getPumpOptions');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const csvData = await response.text(); // Read response body as text
//         const parsedData = csvData
//           .split('\n')
//           .map((row) => row.split(','));

//         const uniquePumps = new Set(parsedData.map((row) => row[0])); // Assuming the pump data is in the first column

//         const pumpOptions = Array.from(uniquePumps).map((pump) => ({
//           value: pump,
//           label: pump,
//         }));

//         setOptions(pumpOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching CSV data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (inputValue) => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Redirect to the details page with the selected attribute
//     window.location.href = `/details?selectedAttribute=${selectedAttribute}`;
//   };

//   return (
//     <div>
//       <Background /> {/* Add the Background component */}
//       <Logo /> {/* Add the Logo component */}
//       <h1>Pump Search</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <Select
//             options={options}
//             isSearchable
//             placeholder="Search for a pump attribute"
//             value={options.find((option) => option.value === selectedAttribute)}
//             onChange={(selectedOption) =>
//               setSelectedAttribute(selectedOption ? selectedOption.value : '')
//             }
//             onInputChange={handleInputChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//       )}
//       <div>
        // <Link href="/details">
        //   {/* Your Link component goes here */}
        // </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Select from 'react-select';

// const Home = () => {
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [options, setOptions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/api/getPumpOptions'); // Updated URL
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setOptions(data.pumpOptions);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (inputValue) => {
//     const filteredOptions = options.filter((option) =>
//       option.label.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setOptions(filteredOptions);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Redirect to the details page with the selected attribute
//     window.location.href = `/details?selectedAttribute=${selectedAttribute}`;
//   };

//   return (
//     <div className="pageContainer">
//       <h1 className="heading">Pump Search</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form className="formContainer" onSubmit={handleSubmit}>
//           <Select
//             options={options}
//             isSearchable
//             placeholder="Search for a pump attribute"
//             value={options.find((option) => option.value === selectedAttribute)}
//             onChange={(selectedOption) =>
//               setSelectedAttribute(selectedOption ? selectedOption.value : '')
//             }
//             onInputChange={handleInputChange}
//             className="react-select-container"
//           />
//           <button type="submit" className="submitButton">
//             Search
//           </button>
//         </form>
//       )}
//       <div>
//         <Link href="/details">
//           {/* Your Link component goes here */}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

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
