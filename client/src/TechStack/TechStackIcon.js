import React from "react";
import icons from "../image/iconsTech.svg";
import Marquee from "react-fast-marquee";

function TechStackIcon() {
  return (
    <div style={{ padding: "5vw" }}>
      <Marquee speed="50" gradient={false}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((e) => (
          <img
            style={{ height: "200px", width: "200px", margin: "10px" }}
            src={icons}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
}

export default TechStackIcon;
