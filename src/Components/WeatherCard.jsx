import React from "react";
import { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { weatherToIcon, weatherToAlt } from "../helpers";
import ".././CSS/WeatherCard.css";

export const WeatherCard = ({ weather }) => {
  return (
    <>
      <Card className="janta-white shadow vc">
        <CardHeader className="janta-bg-white text-center card-title">
          Weather
        </CardHeader>
        <CardBody className="janta-bg-white vc-body">
          <img
            src={weatherToIcon(weather)}
            alt={weatherToAlt(weather)}
            className="w-icon"
          />
        </CardBody>
      </Card>
    </>
  );
};
