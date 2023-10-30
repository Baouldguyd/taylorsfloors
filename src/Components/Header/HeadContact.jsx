import React from 'react'
import styles from  './Header.module.css'
import { FaBook, FaEnvelope, FaPhone } from "react-icons/fa"
import taylorLogo  from '../../Assets/Images/taylorLogo.png'

const HeadContact = () => {

  return (
    <div className={styles.headcontact}>
        <div
        style={{
            height: '3rem',
            width : '8rem',
            backgroundColor: '#F6EEDD',
            borderRadius:'4px',
        }}
        >

            <img style={{ width: '100%', height: '100%' }} src={taylorLogo} alt="" />
        
        </div>
        <div style={{
            display: 'flex',
            gap: '1rem',
            marginRight: '1rem'
        }}>
        <button className={styles.head_btn}>  <a href="tel:+19179986500" style={{ textDecoration: 'none', color: '#583822' }}> <FaPhone/> <span className={styles.cta}> CALL US TODAY</span></a> </button>
        <button className={styles.head_btn}>  <a href="#" style={{ textDecoration: 'none', color: '#583822' }}> <FaBook/>  <span className={styles.cta}> GET A QUOTE</span> </a>  </button>
        <button className={styles.head_btn}> <a href="mailto:taylorfloorsinc@gmail.com" style={{ textDecoration: 'none', color: '#583822' }}> <FaEnvelope/> <span className={styles.cta}>CONTACT US</span> </a> </button>
        </div>
        
    </div>
  )
}

export default HeadContact;