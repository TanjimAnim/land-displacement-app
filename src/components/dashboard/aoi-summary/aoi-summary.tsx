import { cityData } from "../../../app/data";
import ReactEcharts from "echarts-for-react";
import "./aoi-summary.css";

function AoiSummary() {
  var criticalCount: object[] = cityData.filter(
    (item) => item.status.toLowerCase() === "critical"
  );
  var observeCount: object[] = cityData.filter(
    (item) => item.status.toLowerCase() === "observe"
  );
  var safeCount: object[] = cityData.filter(
    (item) => item.status.toLowerCase() === "safe"
  );
  //color pallete for pie chart
  var colorPalette: string[] = ["#24A148", "#F1C21B", "#DA1E28"];

  const option = {
    tooltip: {
      trigger: "item",
    },
    color: colorPalette,
    legend: {
      top: "25px",
      right: "5px",
      orient: "vertical",
      icon: "rect",
      itemGap: 50,
      textStyle: {
        color: "#C1C7CD",
        fontWeight: "400",
        fontSize: "18px",
      },
    },
    title: {
      text: "12",
      left: "85px",
      top: "85px",
      textStyle: {
        color: "white",
        fontSize: "32px",
      },
    },

    series: [
      {
        type: "pie",
        center: [110, 100],
        radius: ["45%", "40%"],
        avoidLabelOverlap: false,

        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: safeCount.length, name: `Safe: ${safeCount.length}` },
          {
            value: observeCount.length,
            name: `Observe: ${observeCount.length}`,
          },
          {
            value: criticalCount.length,
            name: `Critical: ${criticalCount.length}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <h3 className='aoi-summary-title'>AOI Summary</h3>
      <div className='aoi-summary-chart'>
        <ReactEcharts option={option} style={{ height: "250px" }} />
      </div>
    </>
  );
}
export default AoiSummary;
