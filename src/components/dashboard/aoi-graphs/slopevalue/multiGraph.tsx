import ReactEcharts from "echarts-for-react";
import styled from "styled-components";

const GraphData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const PieChartStyle = styled.div`
  display: flex;
`;

const PieChart = styled.div`
  width: 147px;
  margin-top: -115px;
`;

const DataTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #a2a9b0;
  width: 95px;
`;

const Value = styled.div`
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
`;

//graph component for showing graph of multiple line for horizontal,vertical etc components
function MultiGraph() {
  var colorPalette1: string[] = ["#DA1E28", "#878D96", "#878D96"];
  var colorPalette2: string[] = ["#878D96", "#F1C21B", "#878D96"];
  var colorPalette3: string[] = ["#878D96", "#878D96", "#24A148"];
  var colorPalette4: string[] = ["#DA1E28", "#24A148", "#F1C21B"];
  const optionCritical = {
    tooltip: {
      trigger: "item",
    },
    color: colorPalette1,

    title: {
      text: "9.8",
      left: "center",
      top: "center",
      textStyle: {
        color: "white",
        fontSize: "12px",
      },
    },

    series: [
      {
        type: "pie",
        radius: ["45%", "35%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "black",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          disabled: true,
          label: {
            show: false,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 2930, name: "Critical" },
          { value: 18693 },
          { value: 9178 },
        ],
      },
    ],
  };

  const optionObserve = {
    tooltip: {
      trigger: "item",
    },
    color: colorPalette2,

    title: {
      text: "61.2",
      left: "center",
      top: "center",
      textStyle: {
        color: "white",
        fontSize: "12px",
      },
    },

    series: [
      {
        type: "pie",
        radius: ["45%", "35%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "black",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          disabled: true,
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
          { value: 2930 },
          { value: 18693, name: "Observe" },
          { value: 9178 },
        ],
      },
    ],
  };

  const optionSafe = {
    tooltip: {
      trigger: "item",
    },
    color: colorPalette3,

    title: {
      text: "19",
      left: "center",
      top: "center",
      textStyle: {
        color: "white",
        fontSize: "12px",
      },
    },

    series: [
      {
        type: "pie",
        radius: ["45%", "35%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "black",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          disabled: true,
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
          { value: 2930 },
          { value: 18693 },
          { value: 9178, name: "Safe" },
        ],
      },
    ],
  };

  const optionStackedGraph = {
    tooltip: {
      trigger: "axis",
    },
    color: colorPalette4,

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
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
      },
    ],
  };

  return (
    <>
      <GraphData>
        <div>
          <DataTitle>Total PS Points</DataTitle>
          <Value>30801</Value>
        </div>

        <PieChartStyle>
          <PieChart>
            <ReactEcharts option={optionCritical} />
          </PieChart>
          <div>
            <DataTitle>Critical</DataTitle>
            <Value>2930</Value>
          </div>
        </PieChartStyle>

        <PieChartStyle>
          <PieChart>
            <ReactEcharts option={optionObserve} />
          </PieChart>
          <div>
            <DataTitle>Observe</DataTitle>
            <Value>18693</Value>
          </div>
        </PieChartStyle>

        <PieChartStyle>
          <PieChart>
            <ReactEcharts option={optionSafe} />
          </PieChart>
          <div>
            <DataTitle>Safe</DataTitle>
            <Value>9178</Value>
          </div>
        </PieChartStyle>
      </GraphData>

      <div>
        <ReactEcharts option={optionStackedGraph} />
      </div>
    </>
  );
}

export default MultiGraph;
