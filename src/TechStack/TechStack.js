import React from "react";
import TechStackIcon from "./TechStackIcon";
import { COLORS } from "../Values/Colors";

function TechStack() {
  return (
    <div
      style={{
        margin: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "3vw",
          color: COLORS.white,
          borderBottom: "5px solid",
          borderColor: COLORS.primary2,
          width: "18vw",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Tech Stack
      </h1>
      <TechStackIcon />
    </div>
  );
}

export default TechStack;
