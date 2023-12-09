import styles from "./DashboardDetails.module.css";
import NetworkPer from "./NetworkPer";
import LineChart from "./LineChart";
import BlockList from "./BlockList";
import PropTypes from "prop-types";

function DashboardDetails({ setCurrentHash,api }) {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <NetworkPer api={api} />
        <LineChart api={api} />
      </div>
      <BlockList setCurrentHash={setCurrentHash} api={api}/>
    </div>
  );
}

export default DashboardDetails;

DashboardDetails.propTypes = {
  setCurrentHash: PropTypes.func,
  api: PropTypes.string,
};

