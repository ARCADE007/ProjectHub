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
          fontSize: "30px",
          color: COLORS.white,
          borderBottom: "5px solid",
          borderColor: COLORS.primary2,
          width: "175px",
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
