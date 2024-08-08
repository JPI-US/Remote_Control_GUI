import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  Button,
  DropdownItem,
  DropdownMenu,
  Spinner,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Errors } from "./errors";
import { gql, GraphQLClient } from "graphql-request";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import "./CSS/App.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import store from "store2";
import { OpenScreen } from "./Components/OpenScreen";
import { SolarGraph } from "./Components/SolarGraph";
import { BottomControls } from "./Components/BottomControls";
import { DatePicker } from "./Components/DatePicker";
import { ValueCard } from "./Components/ValueCard";
import { AngleCard } from "./Components/AngleCard";
import { WeatherCard } from "./Components/WeatherCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

// HomePage component, may need to be expanded as the functionality increases
export const HomePage = () => {
  // State
  const [state, setState] = useState("Startup");
  // Direct Method
  const [method, setMethod] = useState("Restart");
  // Device ID
  const [deviceID, setDeviceID] = useState("0");
  // Response from Tower
  const [response, setResponse] = useState("None");
  // bool for Loading spinner
  const [loading, setLoading] = useState(false);
  const [startupFinished, setStartupFinished] = useState(
    store.get("startupFinished", false),
  );
  const [appReady, setAppReady] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [peakPower, setPeakPower] = useState(0.0);
  const [currentPower, setCurrentPower] = useState(0.0);
  const [angle, setAngle] = useState(0.0);
  const [temperature, setTemperature] = useState(0.0);
  const [humidity, setHumidity] = useState(0.0);
  const [pressure, setPressure] = useState(0.0);
  const [solarFlux, setSolarFlux] = useState(0.0);
  const [dailyEnergy, setDailyEnergy] = useState(0.0);
  const [towerInfo, setTowerInfo] = useState({});
  const [weather, setWeather] = useState(null);
  // Error code for use in the modal
  const [code, setCode] = useState(0);
  // Data from the database
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        fill: true,
        label: "Power Output",
        data: [],
        borderColor: "rgb(255, 193, 106)",
        backgroundColor: "rgba(255, 193, 106, 0.5)",
      },
    ],
  });

  // Labels for data
  //const [labels, setLabels] = useState([]);
  // The Health Status for the tower represented as error codes
  const [healthStatus, setHealthStatus] = useState([
    Errors.NoError,
    Errors.NoError,
    Errors.NoError,
    Errors.NoError,
    Errors.NoError,
    Errors.NoError,
  ]);

  const endpoint = "https://api.jantaus.com/api/";
  const client = new GraphQLClient(endpoint);

  // Connection mapper
  const connectionToValue = () => {
    if (healthStatus[5] === 0) return "Stable";
    else return "Unstable";
  };

  // Handle the background tasks for the webpage
  useEffect(() => {
    var queryBackend = async () => {
      if (startupFinished) {
        const morning = startDate;
        morning.setHours(6);
        morning.setMinutes(0);
        const current = new Date();
        if (
          startDate.getDate() === current.getDate() &&
          startDate.getMonth() === current.getMonth() &&
          startDate.getFullYear() === current.getFullYear()
        ) {
        } else {
          current.setHours(21);
          current.setMinutes(0);
          current.setFullYear(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate(),
          );
        }
        const dayCurve = gql`{
          telemetry(after: "${morning.toISOString()}", before: "${current.toISOString()}"){
            date_time
            power_output
          }
        }`;

        const latestSensor = gql`
          {
            latestTelemetry(tower_id: 0) {
              power_output
              temperature
              humidity
              pressure
              solar_flux
              angle
            }
          }
        `;

        const energyNow = gql`{
          energy(tower_id: 0, day: ${startDate.getDate()}, month: ${startDate.getMonth()}, year: ${startDate.getFullYear()}) {
            energy
          }
        }`;

        const towerQuery = gql`
          {
            tower(id: 0) {
              state
              error_state
            }
          }
        `;
        const componentQuery = gql`
          {
            components(id: 0) {
              motor
              panels
              relay
              wiper
              l_sensor
              h_sensor
              t_sensor
              p_sensor
              l_switch
              compass
            }
          }
        `;
        var powerData = [];
        var sensorData = [];
        var energyData = [];
        var tInfo = {};
        var cInfo = {};
        var weatherData = {};
        try {
          powerData = (await client.request(dayCurve)).telemetry;
          sensorData = (await client.request(latestSensor)).latestTelemetry;
          energyData = (await client.request(energyNow)).energy;
          tInfo = (await client.request(towerQuery)).tower;
          cInfo = (await client.request(componentQuery)).components;
          if (weather == null) {
            var temp = await fetch(
              "https://api.weather.gov/points/32.7978,-96.8356",
            ).then((response) => response.json());
            weatherData = await fetch(temp.properties.forecastHourly).then(
              (response) => response.json(),
            );
            setWeather(weatherData.properties.periods[0].shortForecast);
          }
        } catch (exception) {
          powerData = null;
          console.log(exception);
        }
        if (powerData !== null) {
          const labels = powerData.map((item) => {
            let date = new Date(item.date_time);
            return date.getHours() + ":" + date.getMinutes();
          });
          const loaded_data = powerData.map((item) => item.power_output);

          setPeakPower(Math.max(...loaded_data));
          setCurrentPower(sensorData.power_output);
          setAngle(sensorData.angle);
          setTemperature(sensorData.temperature);
          setHumidity(sensorData.humidity);
          setPressure(sensorData.pressure);
          setSolarFlux(sensorData.solarFlux);
          setDailyEnergy(energyData[0].energy);
          setTowerInfo({ ...tInfo, ...cInfo });
          // console.log(labels);
          // console.log(energyData);
          /*const blob = new Blob([JSON.stringify(stuff)], {
          type: "application/json",
        });
        console.log(URL.createObjectURL(blob));*/
          setData({
            labels,
            datasets: [
              {
                fill: true,
                label: "Power Output",
                data: loaded_data,
                borderColor: "rgb(255, 193, 106)",
                backgroundColor: "rgba(255, 193, 106, 0.5)",
              },
            ],
          });
        }
      }
    };

    setInterval(queryBackend, 1000);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!startupFinished && (
          <motion.div
            key="screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <OpenScreen
              onTowerSelection={() => {
                setStartupFinished(true);
                store.set("startupFinished", true);
              }}
            ></OpenScreen>
          </motion.div>
        )}
        {startupFinished && !appReady && (
          <motion.div
            key="startup-transition"
            className="startup-transition"
            animate={{
              zIndex: [0, 1],
              scale: [0, 1],
              borderRadius: [
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                0,
              ],
              width: ["0vw", "50vw", "100vw"],
              height: ["0vw", "50vw", "130vw"],
            }}
            transition={{ duration: 0.9 }}
            exit={{
              mask: [
                "radial-gradient(circle at center, transparent 1%, white 1%)",
                "radial-gradient(circle at center, transparent 100%, white 1%)",
              ],
            }}
            onAnimationComplete={() => {
              console.log("we in");
              setTimeout(1000, () => {
                console.log("wow");
                setAppReady(true);
              });
            }}
          >
            <motion.img
              src="logos/logo_mix_blue.png"
              alt="Janta Blue Logo"
              className="st-img"
            />
          </motion.div>
        )}
        {startupFinished && (
          <motion.div
            animate={{ opacity: [0, 100] }}
            transition={{ duration: 3.5 }}
          >
            <motion.img
              src="logos/logo_mixed_black.png"
              className="app-logo"
              alt="Janta Power Mid-sized Logo"
            />

            <motion.div className="d-flex flex-wrap">
              <motion.div className="flex-column flex-fill">
                <SolarGraph data={data} />
                <DatePicker
                  chooseDate={(date) => {
                    setStartDate(date);
                  }}
                />
              </motion.div>
              <motion.div className="flex-column flex-shrink">
                <WeatherCard weather={weather} />
                <ValueCard
                  title={"Current Power (W)"}
                  value={currentPower.toString() + "W"}
                  iconName={"icons/lightning-bolt.svg"}
                  altText={"lightning bolt"}
                />
                <AngleCard
                  title={"Current Angle °"}
                  value={angle.toFixed(2)}
                  iconName={""}
                />
              </motion.div>
              <motion.div className="flex-column">
                <ValueCard
                  title={"Daily Peak (W)"}
                  value={peakPower.toString() + "W"}
                  iconName={"icons/lightning-bolt.svg"}
                  altText={"lightning bolt"}
                />
                <ValueCard
                  title={"Daily Energy (kWh)"}
                  value={dailyEnergy.toFixed(2) + " kWh"}
                  iconName={"icons/lightning-bolt.svg"}
                  altText={"lightning bolt"}
                />
                <ValueCard
                  title={"Current Temp. (F°)"}
                  value={temperature.toFixed(2) + "°"}
                  iconName={"icons/thermometer.svg"}
                />
                <ValueCard
                  title={"Current Humidity (%)"}
                  value={humidity.toFixed(2) + "%"}
                  iconName={"icons/water-droplet.svg"}
                />
              </motion.div>
            </motion.div>
            <BottomControls towerInfo={towerInfo} client={client} />
          </motion.div>
        )}
      </AnimatePresence>
      {/*
        <Card className="ms-5 me-5 mb-5 shadow">
          <CardHeader>
            <CardTitle className="text-center">
              Choose what action should be performed:
            </CardTitle>
          </CardHeader>
          <CardBody className="d-flex justify-content-center align-items-center">
            <UncontrolledDropdown className="d-inline-block" group>
              {!loading && (
                <Button
                  color="warning"
                  onClick={() => {
                    setLoading(true);
                    directMethod();
                  }}
                >
                  Submit
                </Button>
              )}
              {loading && (
                <Button
                  color="warning"
                  onClick={() => {
                    setLoading(true);
                    directMethod();
                  }}
                >
                  <Spinner size="sm">Loading...</Spinner>
                  <span className="ms-3">Submit</span>
                </Button>
              )}
              <DropdownToggle caret color="warning">
                {method}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    setMethod("Restart");
                  }}
                >
                  Restart
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("East");
                  }}
                >
                  East
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("West");
                  }}
                >
                  West
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("Stop");
                  }}
                >
                  Stop
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("Maintenance");
                  }}
                >
                  Maintenance
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("End Maintenance");
                  }}
                >
                  End Maintenance
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("Reset");
                  }}
                >
                  Reset
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setMethod("Health Check");
                  }}
                >
                  Health Check
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </CardBody>
          <CardFooter>
            <CardTitle className="text-center">Response: {response}</CardTitle>
          </CardFooter>
        </Card>

        <Card className="me-5 ms-5 mb-5">
          <CardHeader>
            <CardTitle className="text-center">
              Tower Health {"(Click to get more information)"}:
            </CardTitle>
          </CardHeader>
          <CardBody className="d-flex justify-content-center">
            <ListGroup className="w-100">
              <ListGroupItem color={errorToColor(5)} className="text-center">
                Connection:{" "}
                <span className="fw-bold">{connectionToValue()}</span>
              </ListGroupItem>
              <ListGroupItem
                color={errorToColor(0)}
                className="text-center"
                action
                onClick={() => {
                  toggleM(healthStatus[0]);
                }}
              >
                Light Sensor:{" "}
                <span className="fw-bold">{Errors[healthStatus[0]]}</span>
              </ListGroupItem>
              <ListGroupItem
                color={errorToColor(1)}
                className="text-center"
                action
                onClick={() => {
                  toggleM(healthStatus[1]);
                }}
              >
                Limit Switches:{" "}
                <span className="fw-bold">{Errors[healthStatus[1]]}</span>
              </ListGroupItem>
              <ListGroupItem
                color={errorToColor(2)}
                className="text-center"
                action
                onClick={() => {
                  toggleM(healthStatus[2]);
                }}
              >
                Relay:{" "}
                <span className="fw-bold">{Errors[healthStatus[2]]}</span>
              </ListGroupItem>
              <ListGroupItem
                color={errorToColor(3)}
                className="text-center"
                action
                onClick={() => {
                  toggleM(healthStatus[3]);
                }}
              >
                Motor:{" "}
                <span className="fw-bold">{Errors[healthStatus[3]]}</span>
              </ListGroupItem>
              <ListGroupItem
                color={errorToColor(4)}
                className="text-center"
                action
                onClick={() => {
                  toggleM(healthStatus[4]);
                }}
              >
                Panels:{" "}
                <span className="fw-bold">{Errors[healthStatus[4]]}</span>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </div>*/}
    </>
  );
};
