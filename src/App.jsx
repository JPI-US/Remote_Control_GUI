import React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, UncontrolledDropdown, Dropdown, DropdownToggle, Button, DropdownItem, DropdownMenu, Spinner, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Errors } from "./errors"
import { gql, GraphQLClient } from 'graphql-request'
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./App.css";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Fix the nodejs error implementation
require("error-polyfill");

// HomePage compoenent, may need to be expanded as the functionality increases
export const HomePage = () => {
  // State
  const [state, setState] = useState("Startup");
  // Direct Method
  const [method, setMethod] = useState("Restart");
  // Device ID
  const [deviceID, setDeviceID] = useState("0");
  // Response from Tower
  const [response, setResponse] = useState("None")
  // bool for Loading spinner
  const [loading, setLoading] = useState(false);
  // Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Modal state
  const [modal, setModal] = useState(false);
  // Error code for use in the modal
  const [code, setCode] = useState(0);
  // Data from the database
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        fill: true,
        label: 'Power Output',
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });
  // Labels for data
  //const [labels, setLabels] = useState([]);
  // The Health Status for the tower represented as error codes
  const [healthStatus, setHealthStatus] = useState([Errors.NoError, Errors.NoError, Errors.NoError, Errors.NoError, Errors.NoError, Errors.NoError])

  const endpoint = 'http://localhost:4000/api/'
  const client = new GraphQLClient(endpoint)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Janta Power Curve',
      },
    },
  };

  // Invoke the direct method saved in method
  var directMethod = (twin) => { };

  // Handle the background tasks for the webpage
  useEffect(() => {
    const states = ["Startup", "Connection", "Health Check", "Sun Tracking", "Cloudy", "Idle", "Night", "Maintenance"];

    var getState = (val) => {
      return states[val];
    }

    var queryBackend = async () => {
      const morning = new Date();
      morning.setHours(6);
      morning.setMinutes(0);
      //morning.setDate(17);
      const current = new Date();
      console.log(morning);
      //current.setDate(17);
      //current.setHours(24);
      const document = gql`{
        telemetry(after: "${morning.toISOString()}", before: "${current.toISOString()}"){
          date_time
          power_output
        }
      }`;
      const stuff = (await client.request(document)).telemetry;
      console.log(stuff);
      const labels = stuff.map((item) => {
        let date = new Date(item.date_time)
        return date.getHours() + ":" + date.getMinutes();
      });
      const loaded_data = stuff.map((item) => item.power_output);
      console.log(labels);
      setData({
        labels,
        datasets: [
          {
            fill: true,
            label: 'Power Output',
            data: loaded_data,
            borderColor: 'rgb(255, 193, 106)',
            backgroundColor: 'rgba(255, 193, 106, 0.5)',
          },
        ],
      })

    };

    setTimeout(queryBackend, 3000);
  }, [client]);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleM = (code) => {
    setCode(code);
    setModal(!modal)
  }

  // Get the severity of an error code based on color
  const errorToColor = (index) => {
    switch (healthStatus[index]) {
      case Errors.NoError:
        return "success"
      case Errors.LowMotorVoltage:
        return "warning"
      case Errors.BadLimitSw:
        return "warning"
      case Errors.RTCDesync:
        return "warning"
      case Errors.LowPowerOutput:
        return "warning"
      case Errors.FlashUnwritable:
        return "warning"
      case Errors.MemoryCorruption:
        return "warning"
      case Errors.LowEspVoltage:
        return "warning"
      case Errors.EOL:
        return "warning"
      case Errors.NoMessage:
        return "warning"
      default:
        return "danger"
    }
  }
  // Connection mapper
  const connectionToValue = () => {
    if (healthStatus[5] === 0)
      return "Stable";
    else
      return "Unstable";
  }

  // Get error code info for the modal, will be expanded to another file at some point
  const getInfo = () => {
    switch (code) {
      case 0:
        return "The component is fully operational, no errors were found during the health check."
      case 1200:
        return "This is a code 1200. The light sensor is returning incorrect values given the current time."
      case 1202:
        return "This is a code 1202. One or more limit switches are reading incorrectly."
      default:
        return "Unknown component status."
    }
  }

  // Get the troubleshooting information for the modal, should be to same file as the regular code info
  const getTroubleshootingInfo = () => {
    switch (code) {
      case 0:
        return "No steps need to be taken."
      case 1200:
        return "The issue could be any number of things, please investigate both the wiring and the light sensors themselves to come to a conclusion. " +
          "The wires or the sensors may need replacing. There might also be some kind of obstruction or external situation causing the error."
      case 1202:
        return "The issue is either the wiring or the switch itself. Please check both to be sure of the issue. The wiring of the switch or the switch itself " +
          "may need to be replaced."
      default:
        return "Unknown component status."
    }
  }

  return <>
    <img src="logo_mixed_black.png" className='im-logo' alt="Janta Power Mid-sized Logo" />
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      <Line options={options} data={data} className='' />
      <Card className='me-5 ms-5 mb-5 shadow'>
        <CardHeader>
          <CardTitle className='text-center'>
            Choose which tower you want to control:
          </CardTitle>
        </CardHeader>
        <CardBody className='d-flex justify-content-center align-items-center'>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} className='w-25 d-inline-block'>
            <DropdownToggle caret color="warning">
              {deviceID}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => { setDeviceID("E-3") }}>
                E-3
              </DropdownItem>
              <DropdownItem onClick={() => { setDeviceID("E-6") }}>
                E-6
              </DropdownItem>
              <DropdownItem onClick={() => { setDeviceID("E-9") }}>
                E-9
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CardFooter>
          <CardTitle className='text-center'>
            Tower State: {state}
          </CardTitle>
        </CardFooter>
      </Card>


      <Card className='ms-5 me-5 mb-5 shadow'>
        <CardHeader>
          <CardTitle className='text-center'>
            Choose what action should be performed:
          </CardTitle>
        </CardHeader>
        <CardBody className='d-flex justify-content-center align-items-center'>
          <UncontrolledDropdown className='d-inline-block' group>
            {!loading && <Button color="warning" onClick={() => { setLoading(true); directMethod() }}>
              Submit
            </Button>}
            {loading && <Button color="warning" onClick={() => { setLoading(true); directMethod() }}>
              <Spinner size="sm">
                Loading...
              </Spinner>
              <span className='ms-3'>
                Submit
              </span>
            </Button>}
            <DropdownToggle caret color="warning">
              {method}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => { setMethod("Restart") }}>
                Restart
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("East") }}>
                East
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("West") }}>
                West
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("Stop") }}>
                Stop
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("Maintenance") }}>
                Maintenance
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("End Maintenance") }}>
                End Maintenance
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("Reset") }}>
                Reset
              </DropdownItem>
              <DropdownItem onClick={() => { setMethod("Health Check") }}>
                Health Check
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardBody>
        <CardFooter>
          <CardTitle className='text-center'>
            Response: {response}
          </CardTitle>
        </CardFooter>
      </Card>

      <Card className='me-5 ms-5 mb-5'>
        <CardHeader>
          <CardTitle className='text-center'>
            Tower Health {"(Click to get more information)"}:
          </CardTitle>
        </CardHeader>
        <CardBody className='d-flex justify-content-center'>
          <ListGroup className='w-100'>
            <ListGroupItem color={errorToColor(5)} className='text-center'>
              Connection: <span className='fw-bold'>{connectionToValue()}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(0)} className='text-center' action onClick={() => { toggleM(healthStatus[0]) }}>
              Light Sensor: <span className='fw-bold'>{Errors[healthStatus[0]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(1)} className='text-center' action onClick={() => { toggleM(healthStatus[1]) }}>
              Limit Switches: <span className='fw-bold'>{Errors[healthStatus[1]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(2)} className='text-center' action onClick={() => { toggleM(healthStatus[2]) }}>
              Relay: <span className='fw-bold'>{Errors[healthStatus[2]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(3)} className='text-center' action onClick={() => { toggleM(healthStatus[3]) }}>
              Motor: <span className='fw-bold'>{Errors[healthStatus[3]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(4)} className='text-center' action onClick={() => { toggleM(healthStatus[4]) }}>
              Panels: <span className='fw-bold'>{Errors[healthStatus[4]]}</span>
            </ListGroupItem>
          </ListGroup>
          <Modal isOpen={modal} toggle={toggleM}>
            <ModalHeader toggle={toggleM}>
              Additional Information
            </ModalHeader>
            <ModalBody>
              <span className='fw-bold w-100'>{getInfo()}</span>
              <br />
            </ModalBody>
            <ModalHeader>
              Troubleshooting
            </ModalHeader>
            <ModalFooter>
              <span className='fw-bold w-100'>{getTroubleshootingInfo()}</span>
              <br />
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </div>
  </>;
}