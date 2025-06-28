import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.navbody}>
      <div
        style={{
          display: "flex",
        }}
      >
        <ul className={styles.ul}>
          <Link to="about" smooth={true} duration={500}>
            <li className={styles.li}>About Us</li>
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <li className={styles.li}>Services</li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li className={styles.li}>Projects</li>
          </Link>
          {/* <li className={styles.li}>Portfolio</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
