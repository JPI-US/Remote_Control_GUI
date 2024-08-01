import React from "react";
import { ButtonGroup, Card, CardBody } from "reactstrap";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import ".././CSS/BottomControls.css";

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
        <Card className="interface shadow janta-white">
          {
            <CardBody>
              <motion.img
                src="icons/Tower-Drawing.svg"
                alt="Janta Tower Icon"
                className="tower-image"
              />
              <Card className="diagnostics">
                <CardBody></CardBody>
              </Card>
            </CardBody>
          }
        </Card>
      </motion.div>
    </>
  );
};
