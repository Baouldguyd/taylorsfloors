import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "../About/About.module.css";
import ContactForm from "./ContactForm";

const Consultation = () => {
  return (
    <div className={styles.body}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Consultation
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-around",
          height: "90%",
        }}
      >
        <div className={styles.abt_text}>
          <p className={styles.abt_head}>Request A Free Consultation</p>
          <p className={styles.abt_word}>
            We are passionate about transforming your spaces into works of art.
          </p>
          <p className={styles.abt_word}>
            Ready to get started? Contact us for a free consultation. Our
            experts will discuss your flooring needs, provide expert advice, and
            offer a no-obligation quote. Let's bring your vision to life.
          </p> 
          <p className={styles.abt_word}>
            <FaPhone/>
            <a href="tel:+19179986500" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}> 9179986500 </a>
          </p>

          <p className={styles.abt_word}>
            <FaEnvelope/>
            <a href="mailto:tayloorsfloorsinc@gmail.com" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }} > taylorsfloorsinc@gmail.com </a>
          </p>
        </div>

        <div className={styles.abt_img}>
          
          <h2>
            Fill the Form Below
          </h2>

          <ContactForm/>

        </div>
      </div>
    </div>
  );
};

export default Consultation;
