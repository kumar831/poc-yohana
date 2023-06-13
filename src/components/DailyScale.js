import React, { useEffect } from "react";
import { CirclePosition, LineCirclePosition } from "react-circular";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DailyScale() {
  const angles = [];

  for (let i = 0; i < 360; i += 15) {
    angles.push(i);
  }

  useEffect(() => {
    //code to place the clock numbers inside the circle
    return () => {
      var canvas = document.getElementById("canvas");
      if (canvas) {
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.55;
        drawNumbers(ctx, radius);
      }
    };
  });

  function drawNumbers(ctx, radius) {
    var ang;
    var num;
    var clockValues = [
      12 + "PM",
      2,
      4,
      6 + "PM",
      8,
      10,
      12 + "AM",
      2,
      4,
      6 + "AM",
      8,
      10,
    ];
    ctx.font = radius * 0.18 + "px arial";
    ctx.fontWeight = 700;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 0; num < clockValues.length; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.98);
      ctx.rotate(-ang);
      ctx.fillText(clockValues[num].toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.98);
      ctx.rotate(-ang);
    }
  }

  return (
    <div className="c-clock">
      <span className="dot whitedot1"></span>
      <span className="dot whitedot2"></span>
      <span className="dot whitedot3"></span>
      <span className="dot whitedot4"></span>
      <span className="dot whitedot5"></span>
      <span className="dot whitedot6"></span>
      <span className="activity1">
        <img
          src={require("../notebook.png")}
          alt=""
          style={{ width: "35px", height: "35px", marginTop: "8px" }}
        ></img>
      </span>
      <span className="activity2">
        <img
          src={require("../activity3.png")}
          alt=""
          style={{ width: "35px", height: "35px", marginTop: "8px" }}
        ></img>
      </span>
      <span className="activity5">
        <img
          src={require("../activity5.png")}
          alt=""
          style={{ width: "35px", height: "35px", marginTop: "8px" }}
        ></img>
      </span>
      <span className="activity3">
        <img
          src={require("../activity4.png")}
          alt=""
          style={{ width: "35px", height: "35px", marginTop: "8px" }}
        ></img>
      </span>
      <span className="activity4">
        <img
          src={require("../activity2.png")}
          alt=""
          style={{ width: "35px", height: "35px", marginTop: "8px" }}
        ></img>
      </span>
      <svg
        height="320"
        width="350"
        viewBox="0 20 400 400"
        style={{ overflow: "visible" }}
      >
        {angles.map((angle) => (
          <LineCirclePosition
            key={angle}
            angle={angle}
            radius={200}
            length={angle % 90 ? (angle % 60 ? 10 : 20) : 30}
            adjust={angle % 90 ? (angle % 60 ? -10 : -20) : -30}
          >
            {({ x1, y1, x2, y2 }) => (
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth="1"
                stroke="black"
              />
            )}
          </LineCirclePosition>
        ))}

        {({ angle }) => (
          <CirclePosition angle={angle} radius={200} adjust={-35}>
            {({ x, y }) => (
              <line
                x1={200}
                y1={200}
                x2={x}
                y2={y}
                strokeWidth="1"
                stroke="black"
              />
            )}
          </CirclePosition>
        )}
      </svg>

      <canvas id="canvas" width="400" height="400"></canvas>

      <CircularProgressbar
        className="circle-progress"
        value={10}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
      <CircularProgressbar
        className="circle-progress1"
        value={7}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
      <CircularProgressbar
        className="circle-progress2"
        value={5}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
      <CircularProgressbar
        className="circle-progress3"
        value={20}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
      <CircularProgressbar
        className="circle-progress4"
        value={6}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
    </div>
  );
}
export default DailyScale;
