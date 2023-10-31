import React from "react";
import { Carousel } from "antd";
import styles from "./Products.module.css";
import hardwood from "../../../Assets/Images/hardwood.jpg";
import vinyl from '../../../Assets/Images/vinyl.png';
import tile from '../../../Assets/Images/tile.jpg';
import carpet from '../../../Assets/Images/carpet.jpg';
import laminate from '../../../Assets/Images/laminate.jpg';
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";

// const contentStyle = {
//   margin: 0,
//   height: "50vh",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   display: "flex",
//   flexWrap: 'wrap',
//   justifyContent: "space-around",
// };

const ProductCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <div className={styles.content_style} >
          <img src={hardwood} className={styles.floor_img} style={{ height: "100%", borderRadius: '7px', border: '4px solid #583822'}} alt="" />
          
          <div>
            <p className={styles.car_p} >Hardwood</p>
            <span className={styles.span}>
                Swipe Left 
                  <FaArrowAltCircleRight/>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.content_style}>
          <img src={laminate} style={{ height: "100%", borderRadius: '7px', border: '4px solid #583822' }} alt="" />
          <div>
            <p className={styles.car_p}>Laminate</p>
            <span className={styles.span}>
                Swipe Left 
                  <FaArrowAltCircleRight/>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.content_style}>
          <img src={tile} style={{ height: "100%", borderRadius: '7px', border: '4px solid #583822' }} alt="" />
          <div>
            <p className={styles.car_p}>Tile</p>
            <span className={styles.span}>
                Swipe Left 
                  <FaArrowAltCircleRight/>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.content_style}>
          <img src={carpet} style={{ height: "100%", borderRadius: '7px', border: '4px solid #583822' }} alt="" />
          <div>
            <p className={styles.car_p}>Carpet Cleaning
            </p>
            <span className={styles.span}>
                Swipe Left 
                  <FaArrowAltCircleRight/>
            </span>
          </div>
        </div>
      </div>


      <div>
        <div className={styles.content_style}>
          <img src={vinyl} style={{ height: "100%", borderRadius: '7px', border: '4px solid #583822' }} alt="" />
          <div>
            <p className={styles.car_p}>Vinyl</p>
          </div>
        </div>
      </div>


    </Carousel>
  );
};
export default ProductCarousel;
