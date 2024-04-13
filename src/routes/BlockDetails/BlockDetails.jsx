import styles from "./BlockDetails.module.css";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";

function BlockDetails({ currentHash, api = "http://127.0.1.1:3000" }) {
  const [blockData, setBlockData] = useState(null);

  useEffect(() => {
    const fetchBlockDetails = async () => {
      try {
        const response = await fetch(`${api}/blocks/${currentHash}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlockData(data.block);
      } catch (error) {
        console.error("Error fetching block details:", error);
      }
    };

    fetchBlockDetails();
  }, [currentHash,api]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Block Details</h2>
      <div className={styles.details}>
      <div className={styles.rows2}>
          <div className={styles.label2}>Overview</div>
          {/* <div className={styles.value}>{blockData?.hash}</div> */}
        </div>
        <div className={styles.rows}>
          <div className={styles.label}>Block Hash</div>
          <div className={styles.value}>{blockData?.hash}</div>
        </div>
        <div className={styles.rows}>
          <div className={styles.label}>Block Number</div>
          <div className={styles.value}>{blockData?.index}</div>
        </div>
        {/* mining time */}
        <div className={styles.rows}>
          <p className={styles.label}>Mining Time</p>
          <p className={styles.value}>{blockData?.miningTime}</p>
        </div>
        {/* Timestamp */}
        <div className={styles.rows}>
          <div className={styles.label}>Time Stamp</div>
          <div className={styles.value}>{blockData?.timestamp}</div>
        </div>
        {/* nonce */}
        <div className={styles.rows}>
          <p className={styles.label}>Nonce</p>
          <p className={styles.value}>{blockData?.nonce}</p>
        </div>
        <div className={styles.rows}>
          <div className={styles.label}>Previous Hash</div>
          <div className={styles.value}>{blockData?.previousHash}</div>
        </div>
        {/* validator */}
        <div className={styles.rows}>
          <div className={styles.label}>Validator</div>
          <div className={styles.value}>{blockData?.serverHash}</div>
        </div>

        {/* data */}
        <div className={styles.rows}>
          <div className={styles.label}>Data</div>
          <div className={`${styles.value} ${styles.datas}`}>
             <p className={styles.data}>Temperature : {blockData?.data.data.temperature}</p>
              <p className={styles.data}>Humidity : {blockData?.data.data.humidity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockDetails;

BlockDetails.propTypes = {
  currentHash: PropTypes.string.isRequired,
  api: PropTypes.string,
};
