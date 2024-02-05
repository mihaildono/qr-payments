import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "..";
import { Receipt } from "../Cart/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cart />,
  },
  {
    path: "/success",
    element: <Receipt />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
