import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
function Nextime() {
  const Theme = useTheme();
  const Matches = useMediaQuery(Theme.breakpoints.up("sm"));
  const faith_pic = require("../img/faith-lab.jpg");
  return (
    <section
      className="section"
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        height: Matches ? "100%" : "87vh",
      }}
    >
      {" "}
      <div>
        <h4 style={{ textAlign: "center" }}>Coming Soon!</h4>{" "}
        <img
          src={faith_pic}
          loading="lazy"
          style={{
            width: Matches ? "80%" : "100%",
            height: Matches ? "74vh" : "80%",
            objectFit: "cover",
            border: "10px white solid",
          }}
        />
      </div>{" "}
    </section>
  );
}

export default Nextime;
