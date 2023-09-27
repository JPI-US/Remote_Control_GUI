import React from 'react';
import { useState, useEffect } from 'react';
import { Registry, Client } from 'azure-iothub';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, UncontrolledDropdown, Dropdown, DropdownToggle, Button, DropdownItem, DropdownMenu, Spinner, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./App.css";
import { Error } from "./errors"

export const HomePage = () => {
  const [state, setState] = useState("Startup");
  const [method, setMethod] = useState("Restart");
  const [deviceID, setDeviceID] = useState("E-3")
  const [response, setResponse] = useState("None")
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState(0);
  const [healthStatus, setHealthStatus] = useState([Error.NoError, Error.NoError, Error.NoError, Error.NoError, Error.NoError, Error.NoError])

  var connectionString = 'HostName=EspTest.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=1KTLsTs2R80sKTPlK9TP+5u/yGcQBuni43NRTxU4vpQ=';
  var registry = Registry.fromConnectionString(connectionString);
  var client = Client.fromConnectionString(connectionString);

  var directMethod = (twin) => {

    var methodParams = {
        methodName: method,
        payload: null,
        timeoutInSeconds: 60,
        connectTimeoutInSeconds: 30
    };

    client.invokeDeviceMethod(deviceID, methodParams, function(err, result) {
        if (err) {
            setResponse("Connection Failed, Please try again.")
            setTimeout(() => {setResponse("None")}, 5000)
            setLoading(false);
            console.error("Direct method error: "+err.message);
            setHealthStatus([healthStatus[0], healthStatus[1], healthStatus[2], healthStatus[3], healthStatus[4], Error.NoMessage])
        } else {
            setResponse("Success!")
            setTimeout(() => {setResponse("None")}, 5000)
            setLoading(false);
            console.log("Successfully sent command.");
            console.log(result);
            if (method === "Health Check") {
              let resp = result.payload.Response
              setHealthStatus([resp.LightSensor, resp.LimitSwitches, resp.Relay, resp.Motor, resp.Panels, Error.NoError])
            }
        }
    });
  };

  useEffect(() => {
    const states = ["Startup", "Connection", "Health Check", "Sun Tracking", "Cloudy", "Idle", "Night", "Maintenance"];

    var getState = (val) => {
      return states[val];
    }

    var queryTwinLastReboot = () => {
      

      registry.getTwin(deviceID, function(err, twin){
  
          if (twin.properties.reported.towerState != null)
          {
              if (err) {
                  console.error('Could not query twins: ' + err.constructor.name + ': ' + err.message);
              } else {
                  setState(getState(twin.properties.reported.towerState));
                  if (twin.properties.reported.LightSensor != null) {
                    let reported = twin.properties.reported;
                    setHealthStatus([reported.LightSensor, reported.LimitSwitches, reported.Relay, reported.Motor, reported.Panels, Error.NoError])
                  }
              }
          }
          else
              console.log('Waiting for state.');
      });
    };
    setTimeout(queryTwinLastReboot, 2000);
  }, [registry, deviceID, state]);

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleM = (code) => {
    setCode(code);
    setModal(!modal)
  }

  const errorToColor = (index) => {
    switch (healthStatus[index]) {
      case Error.NoError:
        return "success"
      case Error.LowMotorVoltage:
        return "warning"
      case Error.BadLimitSw:
        return "warning"
      case Error.RTCDesync:
        return "warning"
      case Error.LowPowerOutput:
        return "warning"
      case Error.FlashUnwritable:
        return "warning"
      case Error.MemoryCorruption:
        return "warning"
      case Error.LowEspVoltage:
        return "warning"
      case Error.EOL:
        return "warning"
      case Error.NoMessage:
        return "warning"
      default:
        return "danger"
    }
  }

  const connectionToValue = () => {
    if (healthStatus[5] === 0)
      return "Stable";
    else
      return "Unstable";
  }

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

  const getTroubleshootingInfo = () => {
    switch (code) {
      case 0:
        return "No steps need to be taken."
      case 1200:
        return "The issue could be any number of things, please investigate both the wiring and the light sensors themselves to come to a conclusion. "+
        "The wires or the sensors may need replacing. There might also be some kind of obstruction or external situation causing the error."
      case 1202:
        return "The issue is either the wiring or the switch itself. Please check both to be sure of the issue. The wiring of the switch or the switch itself "+
        "may need to be replaced."
      default:
        return "Unknown component status."
    }
  }

  return <>
    <img src="logo_mixed_black.png" className='im-logo' alt="Janta Power Mid-sized Logo"/>
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      <Card className='me-5 ms-5 mb-5'>
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
              <DropdownItem onClick={() => {setDeviceID("E-3")}}>
                E-3
              </DropdownItem>
              <DropdownItem onClick={() => {setDeviceID("E-6")}}>
                E-6
              </DropdownItem>
              <DropdownItem onClick={() => {setDeviceID("E-9")}}>
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


      <Card className='ms-5 me-5 mb-5'>
        <CardHeader>
          <CardTitle className='text-center'>
            Choose what action should be performed:
          </CardTitle>
        </CardHeader>
        <CardBody className='d-flex justify-content-center align-items-center'>
          <UncontrolledDropdown className='d-inline-block' group>
            {!loading && <Button color="warning" onClick={() => {setLoading(true); directMethod()}}>
              Submit
            </Button>}
            {loading && <Button color="warning" onClick={() => {setLoading(true); directMethod()}}>
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
              <DropdownItem onClick={() => {setMethod("Restart")}}>
                Restart
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("East")}}>
                East
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("West")}}>
                West
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("Stop")}}>
                Stop
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("Maintenance")}}>
                Maintenance
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("End Maintenance")}}>
                End Maintenance
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("Reset")}}>
                Reset
              </DropdownItem>
              <DropdownItem onClick={() => {setMethod("Health Check")}}>
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
            <ListGroupItem color={errorToColor(0)} className='text-center' action onClick={()=>{toggleM(healthStatus[0])}}>
              Light Sensor: <span className='fw-bold'>{Error[healthStatus[0]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(1)} className='text-center' action onClick={()=>{toggleM(healthStatus[1])}}>
              Limit Switches: <span className='fw-bold'>{Error[healthStatus[1]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(2)} className='text-center' action onClick={()=>{toggleM(healthStatus[2])}}>
              Relay: <span className='fw-bold'>{Error[healthStatus[2]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(3)} className='text-center' action onClick={()=>{toggleM(healthStatus[3])}}>
              Motor: <span className='fw-bold'>{Error[healthStatus[3]]}</span>
            </ListGroupItem>
            <ListGroupItem color={errorToColor(4)} className='text-center' action onClick={()=>{toggleM(healthStatus[4])}}>
              Panels: <span className='fw-bold'>{Error[healthStatus[4]]}</span>
            </ListGroupItem>
          </ListGroup>
          <Modal isOpen={modal} toggle={toggleM}>
            <ModalHeader toggle={toggleM}>
              Additional Information
            </ModalHeader>
            <ModalBody>
              <span className='fw-bold w-100'>{getInfo()}</span>
              <br/>
            </ModalBody>
            <ModalHeader>
              Troubleshooting
            </ModalHeader>
            <ModalFooter>
            <span className='fw-bold w-100'>{getTroubleshootingInfo()}</span>
              <br/>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </div>
  </>;
}