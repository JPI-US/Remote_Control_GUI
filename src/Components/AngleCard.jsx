import React from "react";
import { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { motion } from "framer-motion";
import ".././CSS/AngleCard.css";

export const AngleCard = ({ title, value, iconName, altText }) => {
  return (
    <>
      <Card className="janta-bg-white shadow vc">
        <CardHeader className="janta-bg-white text-center card-title">
          {/*<img src={iconName} alt={altText} className="v-icon" >*/}
          {title}
        </CardHeader>
        <CardBody className="janta-bg-white vc-body">
          <div className="angle-holder">
            <img
              src="icons/Angle-Shower-2.svg"
              alt="compass directions shower"
              className="angle-display"
            />
            <motion.img
              src="icons/Angle-Shower-1.svg"
              alt="compass directions shower"
              className="angle-pointer"
              animate={{
                rotate: Number(value) + 180,
                top: "41%",
                left: "44%",
              }}
            />
          </div>
          <span className="angle-text">{value}°</span>
        </CardBody>
      </Card>
    </>
  );
};
