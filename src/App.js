import React from 'react';
import { useState, useEffect } from 'react';
import { Registry, Client } from 'azure-iothub';
import "./App.css";

export const HomePage = () => {
  const [state, setState] = useState("Startup");
  const [method, setMethod] = useState("Restart");
  const [deviceID, setDeviceID] = useState("E-3")
  const [querying, setQuerying] = useState(false);

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
            console.error("Direct method error: "+err.message);
        } else {
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
        return "Idle";
      case 5:
        return "Night";
      case 6:
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
              }
          } else 
              console.log('Waiting for state.');
      });
    };
    if (!querying) {
      setInterval(queryTwinLastReboot, 5000);
      setQuerying(true);
    }
  }, [registry, deviceID, querying]);
  console.log(method);
  return <>
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
      <h3 className='state'>Tower State: {state}</h3>
    </div>
  </>;
}

//export default HomePage;
