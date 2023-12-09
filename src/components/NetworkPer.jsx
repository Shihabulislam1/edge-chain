import styles from "./NetworkPer.module.css";
import NetComponents from "./NetComponents";
function NetworkPer({api="http://127.0.0.1:3000"}) {
  return <div className={styles.container}>
  <h2 className={styles.header}>Network Performance</h2>
  <div className={styles.containerChild}>
    <NetComponents endpoint={`${api}/servers/count`} title={"No. of Nodes"} responseKey={"count"} />
    <NetComponents endpoint={`${api}/average-mining-time`} title={"Avg Block Time"} responseKey={"averageMiningTime"} unit={"s"} />
    <NetComponents endpoint={`${api}/last-block-index`} title={"Latest Block"} responseKey={"lastBlockIndex"} />
    <NetComponents endpoint={`${api}/power-consumption`} title={"Power Consumption"} responseKey={"totalPower"} unit="kW" />
  </div>
    
  </div>;
}

export default NetworkPer;
