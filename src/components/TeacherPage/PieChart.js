import React from 'react'
import { Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

function PieChart() {
    const dataPie = {
        labels: ["Good", "Average", "Below Avg"],
        datasets: [
          {
            label: "Nidhi Ka Idea",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      };
  return (
      <div>

          <Pie data={dataPie}/>
      </div>
  )
}

export default PieChart