import React from "react";
import { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { motion } from "framer-motion";
import ".././CSS/UnderlinedValue.css";

export const UnderlinedValue = ({ subtitle, value, color }) => {
  return (
    <>
      <motion.div className="u-container">
        <span className={"u-value " + color}>{value}</span>
        <br />
        <span className="u-subtitle">{subtitle}</span>
      </motion.div>
    </>
  );
};
