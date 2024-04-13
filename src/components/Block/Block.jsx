import { Link } from "react-router-dom";
import styles from "./Block.module.css";
import PropTypes from "prop-types";


function Block({ block, setCurrentHash }) {
  function handleClick() {
    setCurrentHash(block.hash);
  }
  return (
    <div className={styles.container}>
      <p> {block.index}</p>
      <p> {formatDateWithoutTimezone(block.timestamp)}</p>
      <p> {getFirst15Characters(block.hash)}...</p>
      <Link
        to="/dashboard/blockdetails"
        className={styles.link}
        onClick={handleClick}
      >
        View Details
      </Link>
    </div>
  );
}

function getFirst15Characters(hash) {
  return hash.substring(0, 15);
}

function formatDateWithoutTimezone(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toString();
  return formattedDate.split("GMT")[0].trim();
}

export default Block;


Block.propTypes = {
  
  block: PropTypes.shape({
    index: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
  }).isRequired,
  setCurrentHash: PropTypes.func.isRequired,

};