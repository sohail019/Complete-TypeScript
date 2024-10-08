import { useId, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoMdLock, IoMdMail, IoMdPerson } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store/store';
import { registerUser } from '../features/userSlice';

export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Regular"); // Default role is Regular
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const id = useId();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target

    if(name === "email") setEmail(value)
    if(name === "username") setUsername(value)
    if(name === "password") setPassword(value)
    if(name === "confirmPassword") setConfirmPassword(value)
    if(name === "role") setRole(value)
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    //* Create a new user object and dispatch the registerUser action
    const newUser = {
      id,
      email,
      username,
      password,
      role,
    };

    dispatch(registerUser(newUser));

    //? Redirect to login page
    navigate("/login");
  };
  return (
    <section className="flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto sm:px-40 md:px-64 lg:px-64">
        <main className="flex flex-col justify-center flex-grow rounded-lg">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">
            Sign Up
          </h1>
          <form
            className="mt-4 flex flex-col gap-4"
            onSubmit={handleFormSubmit}
          >
            {/* Email */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMdMail className="text-brightRed dark:text-brightRedLight" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  className="input-class"
                  placeholder="email@digitalsalt.in"
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMdPerson className="text-brightRed dark:text-brightRedLight" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required
                  className="input-class"
                  placeholder="Username"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMdLock className="text-brightRed dark:text-brightRedLight" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={handleChange}
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
                    <FaEyeSlash className="text-brightRed dark:text-brightRedLight" />
                  ) : (
                    <FaEye className="text-brightRed dark:text-brightRedLight" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <IoMdLock className="text-brightRed dark:text-brightRedLight" />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                  className="input-class"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            {/* Role */}
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium">Role:</label>
              <select
                value={role}
                onChange={handleChange}
                required
                name="role"
                className="input-class"
              >
                <option value="Regular">Regular</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-center text-sm">{error}</p>
            )}

            <div className="flex flex-col items-center">
              <button
                className="rounded-md border border-brightRed bg-brightRed  px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800 focus:outline-none focus:ring active:text-brightRedDark"
                type="submit"
              >
                Sign Up
              </button>
              <p className="mt-2 text-sm">
                Already have an account?
                <Link
                  to="/login"
                  className=" text-brightRed dark:text-brightRedLight underline ml-2"
                >
                  Log in
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
