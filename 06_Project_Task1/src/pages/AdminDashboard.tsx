import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

interface ApiUser  {
  id: string,
  username: string,
  email: string,
  role: "Admin" | "Regular User"
}

export const AdminDashboard: React.FC = () => {
  const dispatch = useDispatch()
  const [apiUsers, setApiUsers] = useState<ApiUser[]>([]) 
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const users = useSelector((state: RootState) => state.user.users)

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users')
        if(!response.ok) {
          throw new Error("Failed to fetched users")
        }

        const data = await response.json()
         console.log(data.users);
         if (Array.isArray(data.users)) {
           setApiUsers(data.users); // Make sure it's an array before setting state
         } else {
           setError("Unexpected data format from API");
         }
        // setApiUsers(data) //? Set fetched users in local state
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // const handleDelete = (userId: string) => {
  //   dispatch(deleteUser(userId))
  // }

   const data = [...apiUsers, ...users];

  // ? Define columns
   const columns = React.useMemo(
     () => [
       {
         accessorKey: "id",
         header: "ID",
       },
       {
         accessorKey: "username",
         header: "Username",
       },
       {
         accessorKey: "email",
         header: "Email",
       },
       {
         accessorKey: "role",
         header: "Role",
       },
     ],
     []
   );

  // ? Use the table hook from Tanstack Table
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    debugTable: true
  })

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold">Admin Dashboard</h1>
      {loading ? (
        <p>Loading Users....</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }} // Apply dynamic width
                    className="border border-gray-300 px-4 py-2 text-left"
                    {...{
                      colSpan: header.colSpan,
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          style: {
                            cursor: header.column.getIsResizing()
                              ? "col-resize"
                              : "pointer",
                          },
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* Resize Handle */}
                        {header.column.getCanResize() && (
                          <div
                            className={`resizer ${
                              header.column.getIsResizing() ? "isResizing" : ""
                            }`}
                            {...header.getResizeHandler()}
                          />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
