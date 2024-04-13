// import styles from './HomePage.module.css'
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";
import Landing from "../Landing/Landing";


function HomePage() {
  return (
    <>
      <Header />
      <Landing/>
    </>
  );
}

export default HomePage;
