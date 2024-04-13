import styles from "./Blocks.module.css";
import Block from "../../components/Block/Block";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Blocks({ api = "http://127.0.0.1:3000", setCurrentHash }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlockData = async () => {
      try {
        const response = await fetch(`${api}/blocks`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (data.blocks && data.blocks.length > 0) {
          setBlocks(data.blocks.reverse());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlockData();
    const interval = setInterval(fetchBlockData, 1000); // Fetch data every second

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <p className={styles.blockText}>Block</p>
        <p className={styles.time}>Time</p>
        <p className={styles.hash}>Hash</p>
        <p className={styles.white}>&nbsp;</p>
      </div>
      <div className={styles.datas}>
        {blocks.map((block, index) => (
          <Block key={index} block={block} setCurrentHash={setCurrentHash} />
        ))}
      </div>
    </div>
  );
}

export default Blocks;

Blocks.propTypes = {
  api: PropTypes.string,
  setCurrentHash: PropTypes.func,
};
