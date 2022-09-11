import ReactEcharts from "echarts-for-react";

//graph component of multiple lines for overview section
function StackedGraph() {
  const option = {
    tooltip: {
      trigger: "axis",
    },
    //color: colorPalette4,

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      splitLine: {
        show: true,
        lineStyle: {
          color: "#21272A",
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: "#21272A",
        },
      },
    },
    series: [
      {
        name: "Ascending",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
        lineStyle: { color: "#FF7EB6" },
      },
      {
        name: "Descending",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
        lineStyle: { color: "#8A3FFC" },
      },
      {
        name: "Vertical",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
        lineStyle: { color: "#4589FF" },
      },
      {
        name: "Horizontal",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
        lineStyle: { color: "#eb4034" },
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} />
    </>
  );
}

export default StackedGraph;
