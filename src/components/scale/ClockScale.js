import React, { useEffect, useState } from "react";
import { CirclePosition, LineCirclePosition } from "react-circular";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ClockScale() {
  const angles = [];
  const [date, setDate] = useState(new Date());

  for (let i = 0; i < 360; i += 5) {
    angles.push(i);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Get time
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const [h, m, s] = time;

    // Get angles
    const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    const degSec = s * (360 / 60);

    // Set angles to CSS custom property
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty("--degHour", `${degHour}deg`);
    rootStyle.setProperty("--degMin", `${degMin}deg`);
    rootStyle.setProperty("--degSec", `${degSec}deg`);
    return () => clearInterval(timerId);
  }, [date]);

  return (
    <div className="c-clockscale">
      <div id="js-hours" className="h-hand"></div>
      <div id="js-minutes" className="m-hand"></div>
      <div id="js-seconds" className="s-hand"></div>
      <span className="graydot dotstyle"></span>
      <span className="graydot dotstyle1"></span>
      <span className="graydot dotstyle2"></span>
      <span className="graydot dotstyle3"></span>
      <span className="graydot dotstyle4"></span>
      <span className="graydot dotstyle5"></span>
      <span className="graydot dotstyle6"></span>
      <span className="graydot dotstyle7"></span>
      <span className="graydot dotstyle8"></span>
      <span className="graydot dotstyle9"></span>
      <span className="graydot dotstyle10"></span>
      <span className="graydot dotstyle11"></span>
      <span className="graydot dotstyle12"></span>
      <span className="clockactivity1">
        <img
          src={require("../../notebook.png")}
          alt=""
          style={{ width: "15px", height: "20px", marginTop: "2px" }}
        ></img>
      </span>
      <span className="clockactivity4">
        <img
          src={require("../../activity2.png")}
          alt=""
          style={{ width: "15px", height: "20px", marginTop: "3px" }}
        ></img>
      </span>
      <svg
        height="360"
        width="380"
        viewBox="0 30 400 290"
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

      <CircularProgressbar
        className="clockcircle-progress2"
        value={20}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
      <CircularProgressbar
        className="clockcircle-progress3"
        value={15}
        styles={{ background: "#ffffff", trail: { stroke: "transparent" } }}
      />
    </div>
  );
}
export default ClockScale;
