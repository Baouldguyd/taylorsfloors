import React from "react";
import ProductCarousel from "./ProductCarousel";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Our Flooring Products</h1>

      <p className={styles.abt_word} >
        Explore our wide range of flooring options. From the timeless beauty of
        hardwood to the durability of laminate and the versatility of vinyl, carpet cleaning, refined hardwood we
        have the perfect solution for every room in your home or office. Our
        experts will help you choose the ideal flooring to match your style and
        budget.
      </p>
      <ProductCarousel />
    </div>
  );
};

export default Products;
