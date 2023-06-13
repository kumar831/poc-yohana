import React from "react";

import SunburstChart from "sunburst-chart";
import fromKapsule from "react-kapsule";
import "../App.css";

const ReactSunburst = fromKapsule(SunburstChart, {
  methodNames: ["focusNode"],
});

const WeeklyChart = ({ data }) => (
  <div>
    {console.log(data)}
    <ReactSunburst
      class="sun-burst"
      width={500}
      height={500}
      label="name"
      size="size"
      color={"color"}
      centerRadius={0.4}
      radiusScaleExponent={0.7}
      data={data}
      transitionDuration={300}
    />
  </div>
);

export default WeeklyChart;
