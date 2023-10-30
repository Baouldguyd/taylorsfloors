import React from "react";
import styles from "./Clients.module.css";
import customer from "../../../Assets/Images/customer.png";
import Star from "./Star";
import Reviews from "./Reviews";

const Clients = () => {
  const reviews = [
    {
      userName: "Jeané Elliott Bennett",
      reviewText:
        "The owner and his crew are very professional. They took their time and were patient with me with all of my questions regarding my flooring and mounting of my TV. They did an amazing job, and I will recommend them to everyone I meet that needs or wants flooring.",
      userImg: "",
    },
    {
      userName: "Wayne Lezama",
      reviewText:
        "Taylor's Flooring company was hired to install a new flooring in my home. I was more than please when the results due to the company representatives and their respect for my home and family. ",
      userImg: "",
    },
    {
      userName: "Brother Art",
      reviewText:
        "Experienced, informative, competitive and professional. GREAT service; showed samples, allowing options and no pressure. Installers provide an overall pleasant experience. Very pleased with the decision to use Taylor's Floors. Hope to pass this along and share their services with others.Thank you!",
      userImg: "",
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.h1}>What Our Clients Say</h1>
          <p className={styles.p}>
            Don't just take our word for it; hear what our satisfied customers
            have to say. We take pride in delivering exceptional results and
            building lasting relationships. Read testimonials from those who
            have experienced the difference with Taylor's Floors Inc.
          </p>
        </div>

        <div className={styles.customer}>
          <img
            src={customer}
            style={{ height: "100%", width: '100%' , borderRadius: "10px" }}
            alt=""
          />
        </div>
      </div>

      <div >
        <div className={styles.testimony}>
          {reviews.map((review, index) => (
            <div className={styles.test_box}>
              <div className={styles.test_text} key={index}>
                <p className={styles.username}>{review.userName}</p>
                <p>{review.reviewText}</p>
                <Star />
              </div>
              <div className={styles.test_img}>
                <img src={review.userImg} alt="" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Clients;
