import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { color } from "framer-motion";

// Register required components for the Pie chart
Chart.register(ArcElement, Tooltip, Legend);

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
  role: string;
  gender: string;
}

interface PieGraphProps {
  users: User[];
}

export const PieGraph: React.FC<PieGraphProps> = ({ users }) => {
  // Prepare data for Pie Chart
  const pieData = {
    labels: users.map((user) => user.firstName), // Using first name for labeling
    datasets: [
      {
        label: "Users Age",
        data: users.map((user) => user.age), // Age data for Pie chart
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
        ], // Colors for the slices
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
        ],
        borderWidth: 1,
        borderColor: "black"
      },
    ],
    options: {
      plugins: {
        legend: {
          labels: {
            backgroundColor: "white"
          }
        }
      }
    }
  };

  return (
    <div className="flex justify-center w-screen px-5 h-[74vh]">
      <Pie data={pieData} />
    </div>
  );
};
