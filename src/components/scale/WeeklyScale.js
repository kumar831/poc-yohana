import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "../../App.css";


export default function WeeklyScale() {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // start and end angle must be set both for chart and series
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        //innerRadius: am5.percent(20),
        //backgroundColor: am5.color("#000000"),
      })
    );

    // Create series
    // start and end angle must be set both for chart and series
    //Inner circle
    let series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "inner",
        categoryField: "country",
        alignLabels: false,
      })
    );

    let bgColor = root.interfaceColors.get("background");

    series0.ticks.template.setAll({ forceHidden: true });
    series0.labels.template.setAll({ forceHidden: true });
    series0.slices.template.setAll({
      stroke: am5.color("#000000"),
      fill: am5.color("#000000"),
    });
    series0.slices.template.states.create("hover", { scale: 0.95 });
    //to disable the tooltip on inner circle
    series0.slices.template.set("tooltipText", "");

    //label inside inner circle
    let label = root.tooltipContainer.children.push(am5.Label.new(root, {
      x: am5.p50,
      y: am5.p50,
      centerX: am5.p50,
      centerY: am5.p50,
      fill: am5.color("#ffffff"),
      fontSize: 15
    }));
    label.set("text", "JUNE 3-9");

    ///1st Outer circle
    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "outer",
        categoryField: "country",
        alignLabels: false,
      })
    );

    series1.slices.template.setAll({
      stroke: bgColor,
      strokeWidth: 0,
      tooltipText:
        "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} outer)",
      fill: am5.color("#ffffff"),
    });

    series1.ticks.template.setAll({ forceHidden: true });
    series1.labels.template.setAll({ forceHidden: true });
    
    //to disable the tooltip on outer circle
    series1.slices.template.set("tooltipText", "");

    //2nd Outer circle
    let series2 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "inner",
        categoryField: "country",
        alignLabels: false,
        radius:am5.percent(85)
      })
    );


    series2.ticks.template.setAll({ forceHidden: true });
    series2.labels.template.setAll({ forceHidden: true });
    series2.slices.template.setAll({
      stroke: bgColor,
      strokeWidth: 1,
      fill: am5.color("#ffc0cb"),
    });
    series2.slices.template.states.create("hover", { scale: 0.95 });
    //to disable the tooltip on inner circle
    series2.slices.template.set("tooltipText", "");
    //Added bullets on the 2nd last circle

    series2.bullets.push(function() {
      let cirCleMotion = am5.Bullet.new(root, {
        sprite: am5.Picture.new(root, {
          width: 32,
          height: 32,
          x: am5.percent(30),
          y: am5.percent(50),
          centerX: am5.percent(50),
          centerY: am5.percent(50),
          src: require("../../activity4.png"),
          className:"picture-item"
        })
      });
      cirCleMotion.events.on("click", function(e) {
        console.log('nnnn', e)
      });
      return cirCleMotion
    });

    // series2.bullets.push(function(root) {ß
    //   var circle = am5.Circle.new(root, {
    //     radius: 5,
    //     //fill: am5.color("#000000"),
    //     templateField: "bulletSettings"
    //   });
    //   circle.events.on("click", function(ev) {
    //     console.log("Clicked on a bullet!", ev.target);
    //   });
    //   return am5.Bullet.new(root, {
    //     sprite: circle
    //   });
    // });
  

     //3rd Outer circle
     let series3 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "inner",
        categoryField: "country",
        alignLabels: false,
        innerRadius:am5.percent(85)
      })
    );


    series3.ticks.template.setAll({ forceHidden: true });
    //series2.labels.template.setAll({ forceHidden: true });
    series3.labels.template.setAll({
      fontSize: 12,
      text: "{category}",
      textType: "circular",
      inside: true,
      radius: 5,
      fill: am5.color("#000000")
    });
    series3.slices.template.setAll({
      stroke: bgColor,
      strokeWidth: 1,
      fill: am5.color("#ffffff"),
    });
    series3.slices.template.states.create("hover", { scale: 0.95 });
    //to disable the tooltip on inner circle
    series3.slices.template.set("tooltipText", "");

    let data = [
      {
        country: "Monday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "Tuesday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "Wednesday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "Thursday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "Friday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "Saturday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "Sunday",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
      {
        country: "",
        outer: 500,
        inner: 500,
        bulletSettings: {
          fill: am5.color(0x009ACD)
        }
      },
    ];

    // Set data
    series0.data.setAll(data);
    series1.data.setAll(data);
    series2.data.setAll(data);
    series3.data.setAll(data);

    // Play initial series animation
    series0.appear(1000, 100);
    series1.appear(1000, 100);
    series2.appear(1000, 100);
    series3.appear(1000, 100);
    return () => {
      root.dispose();
    };
  });
  return (
    <div>
      <div id="chartdiv"></div>
    </div>
  );
}
