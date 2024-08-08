import { Card, CardBody, CardHeader } from "reactstrap";
import { UnderlinedValue } from "./UnderlinedValue";
import { motion } from "framer-motion";

const states = [
  "Startup",
  "Connection",
  "Health Check",
  "Tracking",
  "Cloudy",
  "Idle",
  "Night",
  "Maintenance",
];

const getState = (code) => {
  if (code !== undefined) return states[code];
  else return "Unknown State";
};

export const Diagnostics = ({ towerInfo }) => {
  return (
    <>
      <Card className="diagnostics shadow">
        <motion.span className="w-100 text-center mt-3 fw-bold">
          Diagnostics
        </motion.span>
        <CardBody>
          <motion.div className="d-flex flex-row diag-row flex-wrap">
            <UnderlinedValue
              subtitle={"Tower Status"}
              value={getState(towerInfo.state)}
              color={"janta-green"}
              id="TowerStatus"
              code={towerInfo.state}
              error_code={towerInfo.error_state + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Motor"}
              value={"Operational"}
              color={"janta-green"}
              id="Motor"
              code={towerInfo.motor + 100}
              error_code={towerInfo.motor + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Compass"}
              value={"Operational"}
              color={"janta-green"}
              id="Compass"
              code={towerInfo.compass + 100}
              error_code={towerInfo.compass + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Light Sensor"}
              value={"Operational"}
              color={"janta-green"}
              id="LightSensor"
              code={towerInfo.l_sensor + 100}
              error_code={towerInfo.l_sensor + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Panels"}
              value={"Operational"}
              color={"janta-green"}
              id="Panels"
              code={towerInfo.panels + 100}
              error_code={towerInfo.panels + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Relay"}
              value={"Operational"}
              color={"janta-green"}
              id="Relay"
              code={towerInfo.relay + 100}
              error_code={towerInfo.relay + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Limit Switches"}
              value={"Operational"}
              color={"janta-green"}
              id="LimitSwitch"
              code={towerInfo.l_switch + 100}
              error_code={towerInfo.l_switch + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Pressure Sensor"}
              value={"Operational"}
              color={"janta-green"}
              id="PressureSensor"
              code={towerInfo.p_sensor + 100}
              error_code={towerInfo.p_sensor + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Humidity Sensor"}
              value={"Operational"}
              color={"janta-green"}
              id="HumiditySensor"
              code={towerInfo.h_sensor + 100}
              error_code={towerInfo.h_sensor + 100}
            ></UnderlinedValue>
            <UnderlinedValue
              subtitle={"Temperature Sensor"}
              value={"Operational"}
              color={"janta-green"}
              id="TemperatureSensor"
              code={towerInfo.t_sensor + 100}
              error_code={towerInfo.t_sensor + 100}
            ></UnderlinedValue>
          </motion.div>
        </CardBody>
      </Card>
    </>
  );
};
