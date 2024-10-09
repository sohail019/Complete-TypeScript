import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { logoutUser, updateUser } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'

export const UserDashboard: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector((state: RootState) => state.user.currentUser)

  const [username, setUsername] = useState<string>(currentUser?.username || "")
  const [email, setEmail] = useState<string>(currentUser?.email || "")

  useEffect(() => {
    // Load user data from local storage
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      dispatch(updateUser(userData)); // or your action to set currentUser
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/")
  }

  const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Profile Updated")
    console.log("Updated:", { username, email });
    alert(`Updated profile ${username} ${email}`)

    if(currentUser){
      dispatch(updateUser({...currentUser, username, email}))

      // Save to localStorage
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
    }
  }

  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col w-full max-w-4xl mx-auto sm:px-40 md:px-64 lg:px-64">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">
          User Dashboard
        </h1>
        {
          currentUser ? (
            <>
            <h2>Welcome, {currentUser.username}</h2>
                    <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleProfileUpdate}
        >
          {/* Username */}
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-class"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-class"
            />
          </div>

          <div className="flex flex-col items-center">
            <button
              className="rounded-md border border-orange-600 bg-orange-700 px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800 focus:outline-none focus:ring active:text-orange-500"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </form>
        <button onClick={handleLogout}>Logout</button>
        </>
          ) : (
            <p>Please Login to see your dashboard</p>
          )
        }

      </div>
    </section>
  );
}
