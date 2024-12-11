import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const PieChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Electronics", "Fashion", "Household"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--indigo-700"),
            documentStyle.getPropertyValue("--indigo-400"),
            documentStyle.getPropertyValue("--indigo-100"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--indigo-600"),
            documentStyle.getPropertyValue("--indigo-300"),
            documentStyle.getPropertyValue("--indigo-200"),
          ],
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.2,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <Chart
      type="pie"
      data={chartData}
      options={chartOptions}
      className="w-full md:w-30rem"
    />
  );
};

export default PieChart;
