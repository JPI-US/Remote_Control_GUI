import React from "react";
import { Card, CardBody } from "reactstrap";
import { Line } from "react-chartjs-2";
import ".././CSS/SolarGraph.css";

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

export const SolarGraph = ({ data }) => {
  return (
    <>
      <Card className="graph shadow janta-bg-white">
        <CardBody>
          <Line options={options} data={data} className="" />
        </CardBody>
      </Card>
    </>
  );
};
