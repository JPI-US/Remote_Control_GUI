import React from "react";
import { useState, useEffect } from "react";
import { gql, GraphQLClient } from "graphql-request";
import ".././CSS/OpenScreen.css";
import { AnimatePresence, motion } from "framer-motion";
import {
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  InputGroup,
  Input,
} from "reactstrap";

const endpoint = "http://97.98.26.32:4000/api/";
const client = new GraphQLClient(endpoint);

export const OpenScreen = ({ onTowerSelection }) => {
  return (
    <>
      <motion.div className="screen">
        <motion.div className="background"></motion.div>
        <motion.img
          animate={{
            y: [50, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 1 }}
          src="logos/logo_mixed_black.png"
          className="im-logo"
          alt="Janta Power Mid-sized Logo"
        />
        <motion.div
          animate={{
            y: [50, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 1, delay: 0.4 }}
          className="customer-select shadow-lg"
        >
          <motion.span className="fw-bold customer-select-title text-center">
            Which customer's towers do you want to select?
          </motion.span>
          <InputGroup className="customer-select-input">
            <Input
              className="round-left input-color customer-select-dropdown"
              defaultValue={"Janta Power"}
            ></Input>
            <UncontrolledDropdown className="customer-select-dropdown">
              <DropdownToggle
                caret
                color="warning"
                className="input-color round-right customer-select-dropdown"
              ></DropdownToggle>
              <DropdownMenu className="dropdown-item-color">
                <DropdownItem
                  className="input-color"
                  onClick={() => {
                    //setDeviceID("E-3");
                  }}
                >
                  Janta Power
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </InputGroup>
        </motion.div>
        <motion.div
          animate={{
            y: [50, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 1, delay: 1 }}
          className="customer-select shadow-lg"
        >
          <motion.span className="fw-bold customer-select-title text-center">
            Which tower do you want to look at?
          </motion.span>
          <InputGroup className="customer-select-input">
            <Input
              className="round-left input-color customer-select-dropdown"
              defaultValue={0}
            ></Input>
            <UncontrolledDropdown className="customer-select-dropdown">
              <DropdownToggle
                caret
                color="warning"
                className="input-color round-right customer-select-dropdown"
              ></DropdownToggle>
              <DropdownMenu className="dropdown-item-color">
                <DropdownItem
                  className="input-color"
                  onClick={() => {
                    //setDeviceID("E-3");
                  }}
                >
                  0
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </InputGroup>
        </motion.div>
        <motion.div
          animate={{
            y: [50, 0],
            opacity: [0, 100],
          }}
          transition={{ duration: 1, delay: 1.5 }}
          className="proceed-holder"
        >
          <motion.button
            className="btn btn-warning proceed button-color"
            onClick={onTowerSelection}
          >
            Proceed{" "}
            <motion.img
              src="icons/right-arrow.png"
              alt="proceed arrow"
              className="proceed-img"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};
