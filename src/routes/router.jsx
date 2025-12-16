import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomeMain from "../components/HomeMain";
import SirDEtals from "../components/Pages/SirDEtals";
import Coming from "../components/Pages/Comiong ";
import HscLayouut from "../components/HSC/HscLayouut";
import Pdfall1 from "../components/HSC/Pdfall1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children:[{
      index: true,
      element: <HomeMain/>
    },
    {
      path: "sirDetails",
      element: <SirDEtals/>
    },
    {
      path: "HSC",
      element: <HscLayouut/>
    },
    {
      path: "AllpdfPart1",
      element: <Pdfall1/>
    },
    {
      path: "*",
      element: <Coming/>
    }
  
  
  ],
  },
]);

export default router;
