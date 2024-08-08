import { Card, CardBody, CardHeader } from "reactstrap";
import { UnderlinedValue } from "./UnderlinedValue";
import { motion } from "framer-motion";
import { useState } from "react";
import { gql } from "graphql-request";

export const Controls = ({ towerInfo, client }) => {
  const [currentCommand, setCurrentCommand] = useState("N/A");
  const [result, setResult] = useState("N/A");

  const sendCommand = async (command) => {
    if (command === "East" || command === "West" || command === "Go Home") {
      const command1 = gql`
        {
          control(towerID: 0, command: "Maintenance")
        }
      `;

      const command2 = gql`{
        control(towerID: 0, command: "${command}")
      }`;

      try {
        setResult((await client.request(command1)).control);
        setResult((await client.request(command2)).control);
        setCurrentCommand(command);
      } catch (exception) {
        setResult("Failed");
      }
    } else if (
      command === "End Maintenance" ||
      command === "Restart" ||
      command === "Reset"
    ) {
      const command1 = gql`{
        control(towerID: 0, command: "${command}")
      }`;
      try {
        setResult((await client.request(command1)).control);
        setCurrentCommand("N/A");
      } catch (exception) {
        setResult("Failed");
      }
    } else {
      const command1 = gql`{
        control(towerID: 0, command: "${command}")
      }`;
      try {
        setResult((await client.request(command1)).control);
        setCurrentCommand(command);
      } catch (exception) {
        setResult("Failed");
      }
    }
    await setTimeout(() => {
      setResult("N/A");
    }, 2000);
  };

  return (
    <>
      <Card className="diagnostics shadow">
        <motion.span className="w-100 text-center mt-3 fw-bold">
          Controls
        </motion.span>
        <motion.span className="w-100 text-center mt-3 fw-bold">
          Current Command: {currentCommand} | Result {result}
        </motion.span>
        <CardBody>
          <motion.div className="d-flex flex-row flex-wrap">
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("Restart");
              }}
            >
              Restart
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("Reset");
              }}
            >
              Reset
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("Go Home");
              }}
            >
              Go Home
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("Maintenance");
              }}
            >
              Enter Maintenance
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("End Maintenance");
              }}
            >
              Leave Maintenance
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("Stop");
              }}
            >
              Stop Command
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("East");
              }}
            >
              East
            </motion.button>
            <motion.button
              className="btn control-btn"
              onClick={() => {
                sendCommand("West");
              }}
            >
              West
            </motion.button>
          </motion.div>
        </CardBody>
      </Card>
    </>
  );
};
