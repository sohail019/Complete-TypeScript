import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Navigate } from 'react-router-dom'
// import { Alert, Box } from '@mui/material'

export const AdminRoute:React.FC<{children: JSX.Element}> = ({children}) => {
    const currentUser = useSelector((state: RootState) => state.user.currentUser)
    console.log("Current user from Redux:", currentUser);

    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }

    if (currentUser.role !== "Admin") {
      return (
        <div className="text-center mt-4">
          <h2 className="text-red-500 font-bold">Access Denied</h2>
          <p className="text-gray-700">
            You need higher access rights to view this page.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-2 bg-orange-500 text-white p-2 rounded"
          >
            Go Back
          </button>
        </div>
      );
    }
    return children
}
