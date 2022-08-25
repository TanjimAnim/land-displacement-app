import ReactEcharts from "echarts-for-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

function SingleGraph() {
  const link = useSelector((state: RootState) => state.area.selectedLink);
  var lineColor: string = "";
  if (link === "Ascending") lineColor = "#FF7EB6";
  if (link === "Descending") lineColor = "#8A3FFC";
  if (link === "Vertical") lineColor = "#FF7EB6";
  if (link === "Horizontal") lineColor = "#eb4034";

  interface DataItem {
    name: string;
    value: [string, number];
  }

  function randomData(): DataItem {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
        Math.round(value),
      ],
    };
  }

  let data: DataItem[] = [];
  let now = new Date(1997, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }

  const option = {
    grid: {
      show: false,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params: any) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: "time",
      splitLine: {
        show: true,
        lineStyle: {
          color: "#21272A",
        },
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: true,
        lineStyle: {
          color: "#21272A",
        },
      },
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        showSymbol: false,
        data: data,
        lineStyle: { color: lineColor },
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={option} />
    </>
  );
}

export default SingleGraph;
