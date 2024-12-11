import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const BarChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "#6366f1",
          data: [65, 59, 80, 81, 56, 55, 40],
          borderRadius: 20,
        },
        {
          label: "Profit",
          backgroundColor: "#d9ddfc",
          data: [28, 48, 40, 19, 86, 27, 90],
          borderRadius: 20,
        },
      ],
    };
    const options = {
      responsive: true,
      barPercentage: 1,
      categoryPercentage: 0.2,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return <Chart type="bar" data={chartData} options={chartOptions} />;
};

export default BarChart;
