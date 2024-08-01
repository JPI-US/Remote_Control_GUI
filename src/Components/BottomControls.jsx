import React from "react";
import { ButtonGroup, Card, CardBody } from "reactstrap";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import ".././CSS/BottomControls.css";
import { UnderlinedValue } from "./UnderlinedValue";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        font: {
          size: 16,
          family: "Nunito",
        },
      },
    },
    title: {
      display: true,
      text: "Janta Power Curve",
      font: {
        size: 30,
        weight: "bold",
        family: "Nunito",
      },
    },
  },
};

export const BottomControls = ({ data, towerInfo, selectData }) => {
  return (
    <>
      <motion.div>
        <ButtonGroup className="selector-panel">
          <motion.button className="btn button-color shadow">
            Diagnostics
          </motion.button>
          <motion.button className="btn button-color shadow">
            Control
          </motion.button>
          <motion.button className="btn button-color shadow">
            Historical
          </motion.button>
        </ButtonGroup>
        <Card className="interface shadow janta-bg-white">
          {
            <CardBody className="d-flex flex-row">
              <motion.img
                src="icons/Tower-Drawing.svg"
                alt="Janta Tower Icon"
                className="tower-image"
              />
              <Card className="diagnostics shadow">
                <CardBody>
                  <motion.div className="d-flex flex-row">
                    <UnderlinedValue
                      subtitle={"Tower Status"}
                      value={"Tracking"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Motor"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Compass"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Light Sensor"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Panels"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Relay"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                  </motion.div>
                  <motion.div className="d-flex flex-row">
                    <UnderlinedValue
                      subtitle={"Limit Switches"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Pressure Sensor"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Humidity Sensor"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                    <UnderlinedValue
                      subtitle={"Temperature Sensor"}
                      value={"Operational"}
                      color={"janta-green"}
                    ></UnderlinedValue>
                  </motion.div>
                </CardBody>
              </Card>
            </CardBody>
          }
        </Card>
      </motion.div>
    </>
  );
};
