import React from 'react';
import { Registry, Client } from 'azure-iothub';


var connectionString = 'HostName=EspTest.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=1KTLsTs2R80sKTPlK9TP+5u/yGcQBuni43NRTxU4vpQ=';
var registry = Registry.fromConnectionString(connectionString);
var client = Client.fromConnectionString(connectionString);
var deviceToReboot = 'E-6';

var state = 0;

var startRebootDevice = function(twin) {

  var methodName = "Restart";

  var methodParams = {
      methodName: methodName,
      payload: null,
      timeoutInSeconds: 60,
      connectTimeoutInSeconds: 30
  };

  client.invokeDeviceMethod(deviceToReboot, methodParams, function(err, result) {
      if (err) {
          console.error("Direct method error: "+err.message);
      } else {
          console.log("Successfully invoked the device to reboot.");
          console.log(result);
      }
  });
};

var queryTwinLastReboot = function() {

  registry.getTwin(deviceToReboot, function(err, twin){

      if (twin.properties.reported.towerState != null)
      {
          if (err) {
              console.error('Could not query twins: ' + err.constructor.name + ': ' + err.message);
          } else {
              var state = twin.properties.reported.towerState;
              console.log('Tower State: ' + state);
          }
      } else 
          console.log('Waiting for state.');
  });
};

/*
function HomePage() {
  setInterval(queryTwinLastReboot, 2000);

  const buttonStyle = {
    alignSelf: 'flex-start',
    marginLeft: '2rem',
    padding: '0.5rem 1rem',
    border: '2px solid #333',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    color: 'black', // Add this line to set the text color to black
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ color: 'yellow', fontSize: '4rem', marginBottom: '1rem' }}>Janta Remote Control</h1>
      <button style={buttonStyle} onClick={startRebootDevice} >Restart</button>
      <button style={buttonStyle}>East</button>
      <button style={buttonStyle}>West</button>
      <button style={buttonStyle}>Stop</button>
      <button style={buttonStyle}>Maintenance</button>
      <button style={buttonStyle}>End Maintenance</button>
      <button style={buttonStyle}>Reset</button>
      <h3>{state}</h3>
    </div>
  );
}
*/

function HomePage() {
  const [state, setState] = useState(0);

  const options = [
    { label: 'Restart', action: startRebootDevice },
    { label: 'East', action: () => console.log('East action') },
    { label: 'West', action: () => console.log('West action') },
    { label: 'Stop', action: () => console.log('Stop action') },
    { label: 'Maintenance', action: () => console.log('Maintenance action') },
    { label: 'End Maintenance', action: () => console.log('End Maintenance action') },
    { label: 'Reset', action: () => console.log('Reset action') },
  ];

  const handleOptionClick = (action) => {
    setState(action);
  };

  const optionStyle = {
    padding: '0.5rem 1rem',
    border: '2px solid #333',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginBottom: '0.5rem',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ color: 'yellow', fontSize: '4rem', marginBottom: '1rem' }}>Janta Remote Control</h1>
      <div style={{ overflowY: 'scroll', maxHeight: '400px', width: '200px' }}>
        {options.map((option, index) => (
          <div key={index} style={optionStyle} onClick={() => handleOptionClick(option.action)}>
            {option.label}
          </div>
        ))}
      </div>
      <h3>Selected Option: {state}</h3>
    </div>
  );
}

// Rest of your code...


export default HomePage;
