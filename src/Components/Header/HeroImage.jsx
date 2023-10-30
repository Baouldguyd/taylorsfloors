import React from 'react';
import { Carousel } from 'antd';
import styles from './Header.module.css'


const contentStyle = {
  // height: '70vh',
  // color: '#fff',
  // lineHeight: '8rem',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'end',
  color: '#fff'
  
};

const HeroImage = () => {

  return (

  <Carousel autoplay>

    <div>
        <div style={contentStyle} className={styles.img_one }>
        
        <h1>
        Welcome to Taylor's Floors Inc
        </h1>
        
        </div>
    </div>

    <div>
        <div style={contentStyle} className={styles.img_two}>
        
        <h1>
        Elevate Your Space with Exquisite Flooring
        </h1>
        </div>
    </div>

    <div>
        <div style={contentStyle} className={styles.img_three}>
        
        <h1>
          Designed Specifically to your Taste
        </h1>
        </div>
    </div>

    <div>
        <div style={contentStyle} className={styles.img_four}>
        
        <h1>
          Satisfying you is our Priority
        </h1>
        
        </div>
    </div>
  </Carousel>

  )

}


export default HeroImage;