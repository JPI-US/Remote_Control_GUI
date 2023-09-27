export const Error = {
    // Global Errors
    "0": "Fully Functional",
    "1": "End of Life (EOL)",
    "2": "Incorrect State",

    // Connection Errors
    "1000": "Wifi Connection Failed",
    "1001": "No SSID Found",
    "1002": "No Internet Connection",
    "1003": "Complete MQTT Failure",
    "1004": "IotHub Connection Failure",
    "1005": "Telemetry Send Failure",
    "1006": "State Update Failure",
    "1007": "Esp Not Found",
    "1008": "OTA Failure",

    // Mechanical Errors
    "1100": "Motor Stalled",
    "1101": "Low Voltage / Slow Motor",

    // Sensor Errors
    "1200": "Incorrect Flux Values",
    "1201": "Flux Values Fluctuating",
    "1202": "Incorrect Switch Readings",

    // Panel Errors
    "1300": "Low Power Output",
    "1301": "No Power Output",

    // Esp Errors
    "1400": "Low Esp Voltage",
    "1401": "Internal RTC Desync",
    "1402": "Memory Corruption",
    "1403": "Flash Memory Unwritable",
    "1404": "Shorting Circuits",

    // Unknown Errors and Error Types



    // Inverse Of Above
    "NoError": 0,
    "EOL": 1,
    "IncorrectState": 2,

    // Connection Errors
    "WifiConFailed": 1000,
    "NoSSID": 1001,
    "No Internet": 1002,
    "MQTTFail": 1003,
    "IotHubFail": 1004,
    "TelemetryFail": 1005,
    "StateUpdateFail": 1006,
    "NoMessage": 1007,
    "OTAFail": 1008,

    // Mechanical Errors
    "MotorStall": 1100,
    "LowMotorVoltage": 1101,

    // Sensor Errors
    "BadFlux": 1200,
    "FluxFluctuating": 1201,
    "BadLimitSw": 1202,

    // Panel Errors
    "LowPowerOutput": 1300,
    "NoPowerOutput": 1301,

    // Esp Errors
    "LowEspVoltage": 1400,
    "RTCDesync": 1401,
    "MemoryCorruption": 1402,
    "FlashUnwritable": 1403,
    "ShortCircuit": 1404,

};

