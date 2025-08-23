import "./App.css";
import Body from "./components/Body";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, // Custom error page
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
