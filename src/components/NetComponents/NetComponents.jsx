import styles from "./NetComponents.module.css";
import { useState, useEffect } from "react";
import axios from "axios";



function NetComponents({ endpoint, title, responseKey,unit="" }) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setValue(response.data[responseKey]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the API every second (1000 milliseconds)
    const interval = setInterval(fetchData, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [endpoint, responseKey]);
  return (
    <div className={styles.container}>
      <p className={styles.value}>{value} {unit}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default NetComponents;
