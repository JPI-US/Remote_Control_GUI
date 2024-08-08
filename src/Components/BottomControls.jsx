import React from "react";
import { ButtonGroup, Card, CardBody } from "reactstrap";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import ".././CSS/BottomControls.css";
import { Diagnostics } from "./Diagnostics";
import { Controls } from "./Controls";

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

export const BottomControls = ({ data, towerInfo, selectData, client }) => {
  const [selection, setSelection] = useState(0);

  return (
    <>
      <motion.div>
        <ButtonGroup className="selector-panel">
          <motion.button
            className="btn button-color shadow"
            onClick={() => setSelection(0)}
          >
            Diagnostics
          </motion.button>
          <motion.button
            className="btn button-color shadow"
            onClick={() => setSelection(1)}
          >
            Control
          </motion.button>
          <motion.button
            className="btn button-color shadow"
            onClick={() => setSelection(2)}
          >
            Historical
          </motion.button>
        </ButtonGroup>
        <Card className="interface shadow janta-bg-white">
          {
            <CardBody className="d-flex flex-row">
              {selection !== 2 && (
                <motion.img
                  src="icons/Tower-Drawing.svg"
                  alt="Janta Tower Icon"
                  className="tower-image"
                />
              )}
              {selection == 0 && <Diagnostics towerInfo={towerInfo} />}
              {selection == 1 && (
                <Controls towerInfo={towerInfo} client={client} />
              )}
            </CardBody>
          }
        </Card>
      </motion.div>
    </>
  );
};
