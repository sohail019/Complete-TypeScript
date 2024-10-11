import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Signup } from "./pages/Signup.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import Hero from "./components/Hero.tsx";
import { Login } from "./pages/Login.tsx";
import { Error } from "./pages/Error.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { AdminDashboard } from "./pages/AdminDashboard.tsx";
import { UserDashboard } from "./pages/UserDashboard.tsx";
import { DefaultData } from "./pages/DefaultData.tsx";
import { AdminRoute } from "./routes/AdminRoute.tsx";
import {SignupForm} from "./formik/SignupForm.tsx";
import { SignupYup } from "./formik/SignupYup.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/admin-dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        )
      },
      {
        path: "user-dashboard",
        element: <UserDashboard />,
      },
      {
        path: "default-data",
        element: <DefaultData />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "formik-signup",
        element: <SignupForm />
      },
      {
        path: "formik-yup",
        element: <SignupYup />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
