// Get the severity of an error code based on color
const errorToColor = (error) => {
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
