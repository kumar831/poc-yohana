import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "../App.css";

export default function MonthlyScale() {
  useEffect(() => {
    // Create root element2
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
        radius: am5.percent(70),
        
      })
    );

    let bgColor = root.interfaceColors.get("background");

    series0.ticks.template.setAll({ forceHidden: true });
    series0.labels.template.setAll({ forceHidden: true });
    series0.slices.template.setAll({
      stroke: am5.color("#ffffff"),
      fill: am5.color("#ffffff"),
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
      fill: am5.color("#000000"),
      fontSize: 15
    }));
    label.set("text", "Walking");

    ///1st Outer circle
    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "outer",
        categoryField: "country",
        alignLabels: false,
        innerRadius: am5.percent(100)
      })
    );

    series1.slices.template.setAll({
      stroke: bgColor,
      strokeWidth: 0,
      tooltipText:
        "{category}: {valuePercentTotal.formatNumber('0.00')}% ({value} outer)",
      fill: am5.color("#48D1CC"),
      
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
        innerRadius: am5.percent(100),
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

     //3rd Outer circle
     let series3 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "inner",
        categoryField: "country",
        alignLabels: false,
        innerRadius:am5.percent(90)
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
        country: "1",
        outer: 500,
        inner: 500,
      },
      {
        country: "2",
        outer: 500,
        inner: 500,
      },
      {
        country: "3",
        outer: 500,
        inner: 500,
      },
      {
        country: "4",
        outer: 500,
        inner: 500,
      },
      {
        country: "5",
        outer: 500,
        inner: 500,
      },
      {
        country: "6",
        outer: 500,
        inner: 500,
      },
      {
        country: "7",
        outer: 500,
        inner: 500,
      },
      {
        country: "8",
        outer: 500,
        inner: 500,
      },
      {
        country: "9",
        outer: 500,
        inner: 500,
      },
      {
        country: "10",
        outer: 500,
        inner: 500,
      },
      {
        country: "11",
        outer: 500,
        inner: 500,
      },
      {
        country: "12",
        outer: 500,
        inner: 500,
      },
      {
        country: "13",
        outer: 500,
        inner: 500,
      },
      {
        country: "15",
        outer: 500,
        inner: 500,
      },
      {
        country: "16",
        outer: 500,
        inner: 500,
      },
      {
        country: "17",
        outer: 500,
        inner: 500,
      },
      {
        country: "18",
        outer: 500,
        inner: 500,
      },
      {
        country: "19",
        outer: 500,
        inner: 500,
      },
      {
        country: "20",
        outer: 500,
        inner: 500,
      },
      {
        country: "21",
        outer: 500,
        inner: 500,
      },
      {
        country: "22",
        outer: 500,
        inner: 500,
      },
      {
        country: "23",
        outer: 500,
        inner: 500,
      },
      {
        country: "24",
        outer: 500,
        inner: 500,
      },
      {
        country: "25",
        outer: 500,
        inner: 500,
      },
      {
        country: "26",
        outer: 500,
        inner: 500,
      },
      {
        country: "27",
        outer: 500,
        inner: 500,
      },
      {
        country: "28",
        outer: 500,
        inner: 500,
      },
      {
        country: "29",
        outer: 500,
        inner: 500,
      },
      {
        country: "30",
        outer: 500,
        inner: 500,
      },
      {
        country: "31",
        outer: 500,
        inner: 500,
      },
      {
        country: "",
        outer: 500,
        inner: 500,
      },
      {
        country: "",
        outer: 500,
        inner: 500,
      },
      {
        country: "",
        outer: 500,
        inner: 500,
      },
      {
        country: "",
        outer: 500,
        inner: 500,
      },
      {
        country: "",
        outer: 500,
        inner: 500,
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
