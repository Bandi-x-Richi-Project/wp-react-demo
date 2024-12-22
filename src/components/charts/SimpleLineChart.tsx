import { useState, useEffect, FC } from "react";
import { Chart } from "primereact/chart";

interface LineChartProps {
  color?: string;
}

const SimpleLineChart: FC<LineChartProps> = ({ color = "blue" }) => {
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
          data: [42, 59, 50, 60, 56, 70, 51],
          borderColor: color,
          tension: 0.4,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 2,
      plugins: {
        legend: {
          display: false,
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          display: false,
          ticks: {
            color: textColorSecondary,
          },
        },
        y: {
          display: false,
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

export default SimpleLineChart;
