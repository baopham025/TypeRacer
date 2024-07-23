import React from "react";
import "./Stylings/StatisticsChart.css";
import { Line } from "react-chartjs-2"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";  // Import necessary components from Chart.js

// Register the Chart.js components that are necessary for the line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = ({ dataset }) => {
  console.log(typeof dataset);  // Log the type of the dataset prop to the console for debugging

  return (
    <section className="chart">
      <Line  // Line chart component from react-chartjs-2
        data={{
          type: "line", 
          labels: JSON.parse(localStorage.getItem("practice-stats")).map(
            (item) => item.date  // Extracting dates to use as labels on the x-axis
          ),
          datasets: [
            {
              data: JSON.parse(localStorage.getItem("practice-stats"))
                .map((item) => item["wpm"])  // Extracting wpm values for the first dataset
                .reverse(),  // Reversing the data order to match the labels order
              borderWidth: 2,
              borderColor: "#0c7c59",  
            },
            {
              data: JSON.parse(localStorage.getItem("practice-stats"))
                .map((item) => item["mistakes"])  // Extracting mistakes values for the second dataset
                .reverse(),  // Reversing the data order to match the labels order
              borderWidth: 2,
              borderColor: "#d64933", 
            },
          ],
        }}
        options={{  // Configuration options for the chart
          responsive: true,  // Makes the chart responsive
          tension: 0.5,  
          plugins: {
            legend: {
              display: false,  // Hides the legend
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,  // Hides x-axis ticks
              },
            },
            y: {
              beginAtZero: true,  // Ensures the y-axis starts at zero
            },
          },
        }}
      />
    </section>
  );
};

export default StatisticsChart;  
