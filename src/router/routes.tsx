import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Role from "../pages/Role";
import Forces from "../pages/Forces";
import Conditions from "../pages/Conditions";
import Front from "../pages/Front";
import Methods from "../pages/Methods";
import Debate from "../pages/Debate";
import Updates from "../pages/Updates";
import AIUsage from "../pages/AIUsage";
import Shell from "../layout/Shell";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      { index: true, element: <Home /> },
      { path: "vai-tro", element: <Role /> },
      { path: "luc-luong", element: <Forces /> },
      { path: "dieu-kien", element: <Conditions /> },
      { path: "mat-tran", element: <Front /> },
      { path: "phuong-thuc", element: <Methods /> },
      { path: "debate", element: <Debate /> },
      { path: "cap-nhat", element: <Updates /> },
      { path: "ai-usage", element: <AIUsage /> },
    ],
  },
]);
