import React from "react";
import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import { motion } from "framer-motion";
import ".././CSS/UnderlinedValue.css";
import { getInfo, getTroubleshootingInfo } from "../helpers";

export const UnderlinedValue = ({
  subtitle,
  value,
  color,
  id,
  code,
  error_code,
}) => {
  return (
    <>
      <UncontrolledPopover placement="top" target={id} trigger="legacy">
        <PopoverHeader className="janta-bg-white">
          Additional Information
        </PopoverHeader>
        <PopoverBody>{getInfo(code)}</PopoverBody>
        <PopoverHeader className="janta-bg-white add-top-separater">
          Troubleshooting
        </PopoverHeader>
        <PopoverBody>{getTroubleshootingInfo(error_code)}</PopoverBody>
      </UncontrolledPopover>
      <motion.div className="u-container clickable" id={id}>
        <span className="u-subtitle">{subtitle}</span>
        <br />
        <span className={"u-value " + color}>{value}</span>
      </motion.div>
    </>
  );
};
