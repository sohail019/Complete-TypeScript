import React, { useEffect, useState } from "react";
import { LineGraph } from "./LineGraph";
import { BarGraph } from "./BarGraph";
import { PieGraph } from "./PieGraph";
import { fetchUsers } from "../../api/fetchUsers";
import { User } from "../../types"; // Import the User type

export const Charts: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(10);
  const [selectedChart, setSelectedChart] = useState<string>("Line");

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data.users));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleChartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedChart(e.target.value);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="h-[100vh]-screen text-center">
      {/* <h1 className="text-2xl font-bold">User Data Charts</h1> */}
      <div className="flex justify-center gap-3">
        <label htmlFor="chart-select" className="block text-sm font-medium">
          Select Chart Type:
        </label>
        <select
          name="users"
          id="chartSelect"
          onChange={handleChartChange}
          className="mb-4 rounded bg-brightRed font-bold outline-none border-none"
        >
          <option value="Line">Line Graph</option>
          <option value="Bar">Bar Graph</option>
          <option value="Pie">Pie Chart</option>
        </select>
      </div>

      {/* Use a key to force re-rendering */}
      {selectedChart === "Line" ? (
        <LineGraph key="line" users={currentUsers} />
      ) : selectedChart === "Bar" ? (
        <BarGraph key="bar" users={currentUsers} />
      ) : (
        <PieGraph key="pie" users={currentUsers} />
      )}

      <div className="flex mt-6 justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border ${
              currentPage === index + 1
                ? "bg-brightRed rounded border-2  text-white"
                : " text-brightRed rounded border-2 border-brightRed  dark:hover:text-brightRedLight"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
