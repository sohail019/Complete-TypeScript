import React, { useState } from 'react';
import { IoMdLock, IoMdMail } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store/store';
import { loginUser } from '../features/userSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // ? Access the current user from Redux state to verify login status
  // const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const loginError = useSelector((state: RootState) => state.user.error);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //? Dispatch login action with entered email and password
    const resultAction = await dispatch(loginUser({email,password}))
    
    if (loginUser.fulfilled.match(resultAction)) {
      const user = resultAction.payload;
      console.log("Logged in user:", user);

      // Redirect based on user role
      if (user.role === "Admin") {
        navigate("/admin-dashboard"); // Redirect to Admin Dashboard
      } else {
        navigate("/user-dashboard"); // Redirect to User Dashboard
      }
    } else {
      setError(loginError || "Invalid Credentials, Please Try Again");
    }
  }

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

  return (
    <section className="flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto sm:px-40 md:px-64 lg:px-64">
        <main className="flex flex-col justify-center flex-grow p-6 rounded-lg">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">
            Login
          </h1>
          <form
            className="mt-6 flex flex-col gap-4"
            onSubmit={handleFormSubmit}
          >
            {/* Email */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMdMail className="text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-class"
                  placeholder="email@digitalsalt.in"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMdLock className="text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-class"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            />

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex flex-col items-center">
              <button
                className="rounded-md border border-orange-600 bg-orange-700 px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800 focus:outline-none focus:ring active:text-orange-500"
                type="submit"
              >
                Login
              </button>
              <p className="mt-2 text-sm">
                Don't have an account?
                <Link to="/signup" className="text-orange-700 underline ml-2">
                  Sign Up
                </Link>
                .
              </p>
            </div>
          </form>
        </main>
      </div>
    </section>
  );
}
