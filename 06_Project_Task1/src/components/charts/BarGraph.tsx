import React from "react";
import { Bar } from "react-chartjs-2";

interface BarGraphProps {
  users: any[];
}

export const BarGraph: React.FC<BarGraphProps> = ({ users }) => {
  const data = {
    labels: users.map((user) => user.firstName),
    datasets: [
      {
        label: "Age of the User",
        data: users.map((user) => user.age),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
        ],
      },
    ],
  };

  return (
    <div className="flex justify-center w-screen px-52 h-[70vh]">
      <Bar data={data} />
    </div>
  );
};