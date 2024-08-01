import React from "react";
import { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import ".././CSS/ValueCard.css";

export const ValueCard = ({ title, value, iconName, altText }) => {
  return (
    <>
      <Card className="janta-white shadow vc">
        <CardHeader className="janta-white text-center card-title">
          <img src={iconName} alt={altText} className="v-icon" />
          {title}
        </CardHeader>
        <CardBody className="janta-white vc-body">{value}</CardBody>
      </Card>
    </>
  );
};
