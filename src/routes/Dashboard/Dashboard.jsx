import { Outlet,Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import SideBar from "../../components/SideBar/SideBar";
import BecomeEdge from "../../components/BecomeEdge/BecomeEdge";
function Dashboard() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.headText}>BlockChain Covered Edge Sever</p>
          {/* <Link to="https://github.com/Shihabulislam1/iot-file-server" className={styles.edgeLink}>Become an Edge</Link> */}
          <BecomeEdge/>
        </div>
        <div className={styles.scroll}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
