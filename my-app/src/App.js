import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AlertsPage, { loader as alertsLoader } from "./pages/AlertsPage";
import ErrorPage from "./pages/ErrorPage";
import { action as loginAction } from "./components/Login";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader } from "./util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    action: loginAction,
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        action: loginAction,
      },
      {
        path: "alerts",
        element: <AlertsPage />,
        loader: alertsLoader,
      },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
