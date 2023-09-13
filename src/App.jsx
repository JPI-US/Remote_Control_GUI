import React from 'react';
import { useState, useEffect } from 'react';
import { Registry, Client } from 'azure-iothub';
import { Card, CardBody, CardHeader, CardFooter, CardTitle, UncontrolledDropdown, Dropdown, DropdownToggle, Button, DropdownItem, DropdownMenu, Spinner } from 'reactstrap';
import "./App.css";

export const HomePage = () => {
  const [state, setState] = useState("Startup");
  const [method, setMethod] = useState("Restart");
  const [deviceID, setDeviceID] = useState("E-3")
  const [response, setResponse] = useState("None")
  const [querying, setQuerying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
            setResponse("Connection Unstable, Please try again.")
            setLoading(false);
            console.error("Direct method error: "+err.message);
        } else {
            setResponse("Success!")
            setLoading(false);
            console.log("Successfully invoked the device to reboot.");
            console.log(result);
        }
    });
  };

  var getState = (val) => {
    switch (val) {
      case 0:
        return "Startup";
      case 1:
        return "Connection";
      case 2:
        return "Health Check";
      case 3:
        return "Sun Tracking";
      case 4:
        return "Cloudy"
      case 5:
        return "Idle";
      case 6:
        return "Night";
      case 7:
        return "Maintenance";
      default:
        return "Idle";
    }
  }

  useEffect(() => {
    var queryTwinLastReboot = () => {

      registry.getTwin(deviceID, function(err, twin){
  
          if (twin.properties.reported.towerState != null)
          {
              if (err) {
                  console.error('Could not query twins: ' + err.constructor.name + ': ' + err.message);
              } else {
                  setState(getState(twin.properties.reported.towerState));
                  console.log(state);
                  //console.log(twin.properties.reported.towerState)
              }
          } else 
              console.log('Waiting for state.');
      });
    };
    if (!querying) {
      setInterval(queryTwinLastReboot, 5000);
      setQuerying(true);
    }
  }, [registry, deviceID, querying, state]);
  console.log(method);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return <>
    <img src="logo_mixed_black.png" className='im-logo' alt="Janta Power Mid-sized Logo"/>
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      <Card className='me-5 ms-5 mb-5'>
        <CardHeader>
          <CardTitle>
            Choose which tower you want to control:
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} className='w-25 d-inline-block'>
            <DropdownToggle caret color="warning">
              {deviceID}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => {setDeviceID("E-1")}}>
                E-1
              </DropdownItem>
              <DropdownItem onClick={() => {setDeviceID("E-2")}}>
                E-2
              </DropdownItem>
              <DropdownItem onClick={() => {setDeviceID("E-3")}}>
                E-3
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
        <CardFooter>
          <CardTitle>
            Tower State: {state}
          </CardTitle>
        </CardFooter>
      </Card>
      <Card className='ms-5 me-5 mb-5'>
        <CardHeader>
          <CardTitle>
            Choose what action should be performed:
          </CardTitle>
        </CardHeader>
        <CardBody>
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
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardBody>
        <CardFooter>
          <CardTitle>
            Response: {response}
          </CardTitle>
        </CardFooter>
      </Card>
    </div>
    {/*
    <h1>Janta Remote Control</h1>
    <div className="content">
      <select onChange={e => {setMethod(e.target.value)}} className="buttons" name="controls" id="controls">
        <option value="Restart">Restart</option>
        <option value="East">East</option>
        <option value="West">West</option>
        <option value="Stop">Stop</option>
        <option value="Maintenance">Maintenance</option>
        <option value="End Maintenance">End Maintenance</option>
        <option value="Reset">Reset</option>
      </select>
      <label className='buttons' htmlFor="fname">Device ID:</label>
      <input defaultValue={"E-3"} className='buttons' onChange={e => {setDeviceID(e.target.value)}} type="text" id="fname" name="fname"/> 
      <button className="buttons" onClick={directMethod} >Submit</button>
<h  3 className='state'>Tower State: {state}</h3>
  </div>*/}
  </>;
}

//export default HomePage;
