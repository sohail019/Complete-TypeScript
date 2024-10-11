import { useId, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdLock, IoMdMail, IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { registerUser } from "../features/userSlice";
import ReCAPTCHA from "react-google-recaptcha";
import HorizontalNonLinearStepper from "../components/Stepper";


export const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"Admin" | "Regular User">("Regular User");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [step, setStep] = useState<number>(0); // Active step management

  const dispatch = useDispatch<AppDispatch>();
  const id = useId();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "role":
        setRole(value as "Admin" | "Regular User");
        break;
      default:
        break;
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleStep = (step: number) => () => {
    setStep(step);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!captchaValue) {
      setError("Please complete the reCAPTCHA");
      return;
    }
    const newUser = {
      id,
      email,
      username,
      password,
      role,
    };

    dispatch(registerUser(newUser));
    // Redirect based on user role
    navigate(role === "Admin" ? "/login" : "/user-dashboard");
  };

  return (
    <section className="flex items-center justify-center ">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto sm:px-40 md:px-64 lg:px-64">
        <main className="flex flex-col justify-center flex-grow rounded-lg">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">
            Sign Up
          </h1>
          <HorizontalNonLinearStepper
            activeStep={step}
            handleNext={handleNext}
            handleBack={handleBack}
            handleStep={handleStep}
            isLastStep={() => step === 2}
            allStepsCompleted={() => step === 2}
          />
          <form
            className="mt-4 flex flex-col gap-4"
            onSubmit={handleFormSubmit}
          >
            {step === 0 && (
              <div className="flex flex-col">
                {/* Role Selection */}
                <label className="block mb-2 text-sm font-medium">Role:</label>
                <select
                  value={role}
                  onChange={handleChange}
                  required
                  name="role"
                  className="input-class"
                >
                  <option value="Regular User">Regular User</option>
                  <option value="Admin">Admin</option>
                </select>
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-4 rounded-md border border-brightRed bg-brightRed px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800"
                >
                  Next
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col">
                {/* Email */}
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <IoMdMail className="input-icon" />
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
                  <label className="block mb-2 text-sm font-medium">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <IoMdPerson className="input-icon" />
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

                <button
                  type="button"
                  onClick={handleBack}
                  className="mt-4 rounded-md border border-brightRed bg-brightRed px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="mt-4 rounded-md border border-brightRed bg-brightRed px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col">
                {/* Password */}
                <div className="flex flex-col">
                  <label className="block mb-2 text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <IoMdLock className="input-icon" />
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
                        <FaEyeSlash className="input-icon" />
                      ) : (
                        <FaEye className="input-icon" />
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
                      <IoMdLock className="input-icon" />
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

                {/* reCAPTCHA */}
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(value) => setCaptchaValue(value)}
                />

                {error && (
                  <p className="text-red-500 text-center text-sm">{error}</p>
                )}

                <div className="flex flex-col items-center">
                  <button
                    className="rounded-md border border-brightRed bg-brightRed px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800 focus:outline-none focus:ring active:text-brightRedDark"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <p className="mt-2 text-sm">
                    Already have an account?
                    <Link
                      to="/login"
                      className="input-icon underline ml-2"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}
          </form>
        </main>
      </div>
    </section>
  );
};
