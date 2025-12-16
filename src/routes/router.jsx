import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import HomeMain from "../components/HomeMain";
import SirDEtals from "../components/Pages/SirDEtals";
import Coming from "../components/Pages/Comiong ";
import HscLayouut from "../components/HSC/HscLayouut";
import Pdfall1 from "../components/HSC/Pdfall1";
import Qna from "../Fictureall/Qna";
import Bord from "../Fictureall/Bord";
import Exam from "../Fictureall/Exam";
import Pdfall2 from "../components/HSC/pdfall2";
import Notepp from "../Fictureall/Notepp";
import Mcq from "../Fictureall/Mcq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeMain />,
      },
      {
        path: "sirDetails",
        element: <SirDEtals />,
      },
      {
        path: "HSC",
        element: <HscLayouut />,
      },
      {
        path: "AllpdfPart1",
        element: <Pdfall1 />,
      },
      {
        path: "AllpdfPart2",
        element: <Pdfall2 />,
      },
      {
        path: "qnapdf",
        element: <Qna />,
      },
      {
        path: "bordan",
        element: <Bord />,
      },
      {
        path: "Exam",
        element: <Exam />,
      },
      {
        path: "Mcq",
        element: <Mcq/>
      },
      { path: "pactis", 
        element: <Notepp /> },
      {
        path: "*",
        element: <Coming />,
      },
    ],
  },
]);

export default router;
