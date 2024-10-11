import { Formik, useFormik } from "formik";
import React from "react";
import { FaLock, FaRegUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import * as Yup from "yup";

export const SignupYup: React.FC = () => {
  // const formik = useFormik({
  //     initialValues: {
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         password: "",
  //         confirmPassword: ""
  //     },
  //     validationSchema: Yup.object({
  //       firstName: Yup.string()
  //         .max(15, "Must be 15 characters or less")
  //         .required("Required"),
  //       lastName: Yup.string()
  //         .max(20, "Must be 20 characters or less")
  //         .required("Required"),
  //       email: Yup.string()
  //         .email("Invalid email address")
  //         .required("Required"),
  //       password: Yup.string()
  //         .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number")
  //         .min(8, "Must be 8 characters or more")
  //         .required("Required"),
  //       confirmPassword: Yup.string()
  //         .oneOf([Yup.ref("password")], "Passwords Do Not match")
  //         .required("Required")
  //     }),
  //     onSubmit: values => {
  //         alert(JSON.stringify(values, null, 2))
  //     }
  // })
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
          )
          .min(8, "Must be 8 characters or more")
          .required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords Do Not match")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        });
      }}
    >
      {(formik) => (
        <div className="flex items-center justify-center">
          <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto sm:px-40 md:px-64 lg:px-64">
            <main className="flex flex-col justify-center flex-grow rounded-lg">
              <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">
                Formik Component and Yup Validation
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="mt-4 flex flex-col gap-4"
              >
                <div className="flex flex-col">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FaRegUser className="input-icon" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      className="input-class"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                  </div>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 mt-1">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="email"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FaRegUser className="input-icon" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      className="input-class"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                  </div>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500 mt-1">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <IoMdMail className="input-icon" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="input-class"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 mt-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FaLock className="input-icon" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="input-class"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 mt-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <FaLock className="input-icon" />
                    </div>
                    <input
                      type="text"
                      name="confirmPassword"
                      className="input-class"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="text-red-500 mt-1">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="mt-4 rounded-md border border-brightRed bg-brightRed px-6 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-800"
                >
                  Submit
                </button>
              </form>
            </main>
          </div>
        </div>
      )}
    </Formik>
  );
};
