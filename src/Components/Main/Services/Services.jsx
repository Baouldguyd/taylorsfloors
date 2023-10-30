import React from "react";
import styles from "./Services.module.css";
import inst from '../../../Assets/Images/inst.jpg';
import repair from '../../../Assets/Images/repair.jpg';
import maintain from '../../../Assets/Images/maintain.jpg';


const Services = () => {
  return (
    <div className={styles.body}>
      <div>
        <h1 className={styles.h1}>Our Services</h1>
        <p className={styles.p}>
          We offer a comprehensive range of services, including installation,
          repair, and maintenance. Our skilled professionals are dedicated to
          ensuring your flooring project is executed flawlessly, from start to
          finish.
        </p>

        
        <p className={styles.dream}>You dream it; we bring it to life.</p>
        


      </div>

      <div
      className={styles.service_box}
      >
        <div
        className={styles.box}
        >
            <div
            className={styles.box_img}
            >
                <img src={inst} style={{
                    height: '100%',
                    width: '100%'
                }} alt="" />
            </div>
            <div>
                <p
                className={styles.box_p}
                >
                Installation
                </p>
            </div>
        </div>
        <div
        className={styles.box}
        >
            <div
            className={styles.box_img}
            >
                <img src={repair}   style={{
                    height: '100%',
                    width: '100%'
                }} alt="" />
            </div>
            <div>
                <p
                className={styles.box_p}
                >
                    Repair
                </p>
            </div>
        </div>
        <div
        className={styles.box}
        >
            <div
            className={styles.box_img}
            >
                <img src={maintain}  style={{
                    height: '100%',
                    width: '100%'
                }} alt="" />
            </div>
            <div>
                <p
                className={styles.box_p}
                >
                    Maintenance
                </p>
            </div>
        </div>

      </div>


    </div>
  );
};

export default Services;
