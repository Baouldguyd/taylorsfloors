import React from "react";
import styles from "./About.module.css";
import aboutImg from '../../../Assets/Images/about.jpg'

const About = () => {
  return (
    <div className={styles.body}>
      <h1
        style={{
          textAlign: "center",
          fontSize: '2rem'
        }}
      >
        About Us
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
          <p
          className={styles.abt_head}
          >
            At Taylor's Floors Inc.
          </p>
          <p
          className={styles.abt_word}
          >
          We are passionate about transforming your
            spaces into works of art.
          </p>
          <p
          className={styles.abt_word}
          >
            With 6 years of experience in the flooring industry, we have
            become the trusted choice for homeowners and businesses alike. Our
            commitment to quality, craftsmanship, and customer satisfaction is
            what sets us apart.
          </p>
        </div>

        <div className={styles.abt_img}>
            <img src={aboutImg} style={{
                width: '100%',
                height: '100%',
                border: '4px solid #583822',
                borderRadius: '10px'
            
            }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
