import styles from "../styles/Layout.module.css";
import Nav from "../components/Nav";
import Header from '../components/Header'
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header/>
          {children}</main>
      </div>
    </>
  );
};

export default Layout;
