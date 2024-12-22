import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const DoubleLineChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Income",
          data: [6500, 6000, 8100, 8000, 5600, 5500, 4000],
          borderColor: "#22C55E",
          backgroundColor: "rgba(34, 197, 94, 0.2)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Expenses",
          data: [1100, 5000, 6200, 3200, 2100, 6100, 4600],
          borderColor: "#6366F1",
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          tension: 0.4,
          fill: true,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          display: true,
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
        },
        y: {
          display: true,
          ticks: {
            color: textColorSecondary,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return <Chart type="line" data={chartData} options={chartOptions} />;
};

export default DoubleLineChart;
