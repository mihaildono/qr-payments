import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Cart } from "..";
import { Receipt } from "../Cart/components";
import logo from "../../assets/icons/restaurant.svg";
import css from "./styles.module.scss";

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
  return (
    <div className={css.wrapper}>
      <img className={css.logo} src={logo} alt="logo" />
      <RouterProvider router={router} />
    </div>
  );
};
