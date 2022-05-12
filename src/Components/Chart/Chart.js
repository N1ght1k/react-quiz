import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  let labels = [];
  let data = [];
  props.answers.forEach((answer) => {
    labels.push(answer.answerText);
    data.push(answer.count);
  });
  console.log(labels);
  console.log(data);
  const barChartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        label: "Число ответов",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true,
      },
      // {
      //   data: [1216410, 1371390, 1477380],
      //   label: "Deaths People",
      //   borderColor: "#ff3333",
      //   backgroundColor: "rgba(255, 0, 0, 0.5)",
      //   fill: true,
      // },
    ],
  };

  const barChart = (
    <Bar
      type="bar"
      width={500}
      height={200}
      options={{
        // title: {
        //   display: false,
        //   text: "COVID-19 Cases of Last 3 Months",
        //   fontSize: 15,
        // },
        // legend: {
        //   display: false, //Is the legend shown?
        //   position: "top", //Position of the legend.
        // },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                // if (Number.isInteger(value)) {
                //   return value;
                // }
                const valueLegend = this.getLabelForValue(value);
                if (valueLegend.length > 9) {
                  return valueLegend.substr(0, 6) + "...";
                }
                return valueLegend;
              },
            },
          },
        },
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default Chart;
