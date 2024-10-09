import { Chart, registerables } from "chart.js";
import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);
interface LineGraphProps {
  users: any[];
}

export const LineGraph: React.FC<LineGraphProps> = ({ users }) => {
  const chartRef = useRef<any>(null);
  const data = {
    labels: users.map((user) => user.firstName), //? Display firstname as label
    datasets: [
      {
        label: "Age of Users",
        data: users.map((user) => user.age),
        backgroundColor: [
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384"],
        borderColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
      },
    ],
  };

  return (
    <div className="flex justify-center w-screen h-[70vh] px-52">
      <Line data={data} ref={chartRef} />
    </div>
  );
};

