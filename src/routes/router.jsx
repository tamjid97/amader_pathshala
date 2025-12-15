import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomeMain from "../components/HomeMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children:[{
      index: true,
      element: <HomeMain/>
    }],
  },
]);

export default router;
