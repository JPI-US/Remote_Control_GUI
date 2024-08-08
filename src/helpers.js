import { Errors } from "./errors";

const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

// Get the severity of an error code based on color
export const errorToColor = (error) => {
  switch (error) {
    case Errors.NoError:
      return "success";
    case Errors.LowMotorVoltage:
      return "warning";
    case Errors.BadLimitSw:
      return "warning";
    case Errors.RTCDesync:
      return "warning";
    case Errors.LowPowerOutput:
      return "warning";
    case Errors.FlashUnwritable:
      return "warning";
    case Errors.MemoryCorruption:
      return "warning";
    case Errors.LowEspVoltage:
      return "warning";
    case Errors.EOL:
      return "warning";
    case Errors.NoMessage:
      return "warning";
    default:
      return "danger";
  }
};

// Get error code info for the modal, will be expanded to another file at some point
export const getInfo = (code) => {
  switch (code) {
    case 3:
      return "The Tower is currently following the sun."
    case 100:
      return "The component is fully operational, no errors were found during the health check.";
    case 1200:
      return "This is a code 1200. The light sensor is returning incorrect values given the current time.";
    case 1202:
      return "This is a code 1202. One or more limit switches are reading incorrectly.";
    default:
      return "Unknown component status.";
  }
};

// Get the troubleshooting information for the modal, should be to same file as the regular code info
export const getTroubleshootingInfo = (code) => {
  switch (code) {
    case 100:
      return "No steps need to be taken.";
    case 1200:
      return (
        "The issue could be any number of things, please investigate both the wiring and the light sensors themselves to come to a conclusion. " +
        "The wires or the sensors may need replacing. There might also be some kind of obstruction or external situation causing the error."
      );
    case 1202:
      return (
        "The issue is either the wiring or the switch itself. Please check both to be sure of the issue. The wiring of the switch or the switch itself " +
        "may need to be replaced."
      );
    default:
      return "Unknown component status.";
  }
};

export const weatherToIcon = (text) => {
  if (!text) return "icons/Sun.svg";
  if (text.toLowerCase().includes("sun")) return "icons/Sun.svg";
  else if (text.toLowerCase().includes("cloud")) return "icons/Cloud.svg";
  else if (text.toLowerCase().includes("storm")) return "icons/Storm.svg";
  else if (text.toLowerCase().includes("rain")) return "icons/Rain.svg";
  else if (text.toLowerCase().includes("wind")) return "icons/Wind.svg";
  else return "icons/Sun.svg";
};

export const weatherToAlt = (text) => {
  if (!text) return "Unknown Weather";
  if (text.toLowerCase().includes("sun")) return "Sunny Icon";
  else if (text.toLowerCase().includes("cloud")) return "Cloudy Icon";
  else if (text.toLowerCase().includes("storm")) return "Stormy Icon";
  else if (text.toLowerCase().includes("rain")) return "Rainy Icon";
  else if (text.toLowerCase().includes("windy")) return "Windy Icon";
  else return "Clear Icon";
};
