import React from "react";
import { useState, useEffect } from "react";
import { gql, GraphQLClient } from "graphql-request";
import ".././CSS/OpenScreen.css";

export const OpenScreen = (onTowerSelection) => {
  return (
    <>
      <div className="screen">
        <div className="background"></div>
      </div>
    </>
  );
};
