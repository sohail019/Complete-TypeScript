// src/pages/AdminDashboard.tsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import UserTable from "../components/UserTable";

interface ApiUser {
  id: string;
  username: string;
  email: string;
  role: "Admin" | "Regular User";
  age: number;
  phone: string;
}

export const AdminDashboard: React.FC = () => {
  const [apiUsers, setApiUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const users = useSelector((state: RootState) => state.user.users);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Start loading when fetching
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        if (Array.isArray(data.users)) {
          setApiUsers(data.users); // Make sure it's an array before setting state
        } else {
          setError("Unexpected data format from API");
        }
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchUsers();
  }, []);

  // Combine users from Redux and API
  const allUsers = [...apiUsers, ...users];

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Admin Dashboard</h1>
      {loading ? (
        <p>Loading Users....</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <UserTable users={allUsers} />
      )}
    </div>
  );
};

export default AdminDashboard;
