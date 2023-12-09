import styles from "./SideBar.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/mainLogo/logo-detail.png";
import logoDashboard from "../assets/DashBoard/DashboardLogo.png";
import logoBlocks from "../assets/Blocks/Blocks.png";
import logoEdges from "../assets/Edges/EdgeNode.png";
import logoDocs from "../assets/Docs/DOCS.png";
// import Ruet from "../assets/ruet.jpeg";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/" className={styles.homeLink}>
        <img src={Logo} alt="Edge Chain Logo" className={styles.logo} />
      </Link>

      <div className={styles.navLinks} id="navLink">
        <NavLink to="dashboard-details" className={styles.link}>
          <img
            src={logoDashboard}
            alt="Dashboard Logo"
            className={styles.logoMini}
          />
          Dashboard
        </NavLink>
        <NavLink to="blocks" className={styles.link}>
          <img src={logoBlocks} alt="Blocks Logo" className={styles.logoMini} />
          Blocks
        </NavLink>
        <NavLink to="edges" className={styles.link}>
          <img src={logoEdges} alt="Edges Logo" className={styles.logoMini} />
          Edges
        </NavLink>
        <NavLink to="docs" className={styles.link}>
          <img src={logoDocs} alt="Docs Logo" className={styles.logoMini} />
          Docs
        </NavLink>
        <p to="#" className={styles.ruet}>
          <img src="https://2.bp.blogspot.com/-PZyOrZqhvjM/WHz8RonT0dI/AAAAAAAAAEY/16FmuTcJlcIjfI8soyiteMOI-4JLMwlVQCLcB/s1600/RUET%2Blogo.png " alt="RUET Logo" className={styles.logoRuet} />
          Rajshai University of Engineering & Technology
          
        </p>
      </div>
    </div>
  );
}

export default SideBar;
