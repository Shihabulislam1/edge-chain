// import styles from './HomePage.module.css'
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './HomePage.module.css';

function HomePage() {
  return <>
    <Header/>
    <Outlet/>
  </>
}

export default HomePage;
