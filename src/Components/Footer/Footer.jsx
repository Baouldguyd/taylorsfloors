import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Assets/Images/taylorLogo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={logo} style={{ width: "100%", height: "100%" }} alt="" />
        </div>

        <div className={styles.line}></div>

        <div className={styles.foot}>
          <div>
            <p className={styles.p}>
              Contact us today for all your flooring needs. Connect with us on
              social media to stay updated with our latest projects and
              promotions.
            </p>

            <div className={styles.icons}>
            <a href="http://facebook.com/profile.php?id=100054371416711"><FaFacebook /></a>
            <a href="http://instagram.com/taylorsfloorsinc"><FaInstagram /></a>
            <a href="mailto:taylorsfloorsinc@gmail.com"><FaEnvelope /></a>
            <a href="tel:+19173837843"><FaPhone /></a>
            </div>
            
          </div>

          <div className={styles.products}>
            <h3>Products</h3>

            <ul className={styles.ul}>
              <li className={styles.li}>Unfinished Wood</li>
              <li className={styles.li}>Prefinished Wood</li>
              <li className={styles.li}>Laminates</li>
              <li className={styles.li}>Luxury Vinyl</li>
              <li className={styles.li}>Carpet</li>
            </ul>
          </div>
          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li className={styles.li}>Installation</li>
              <li className={styles.li}>Repair</li>
              <li className={styles.li}>Maintenance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© Copyright 2023 | Tayloor's Floors Inc</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
