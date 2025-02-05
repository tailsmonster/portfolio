import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import PageNotFound from "../pages/404Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "resume", element: <ResumePage />},
      {path: "portfolio", element: <PortfolioPage />},
      {path: "contact", element: <ContactPage />},
      {path: "*", element: <PageNotFound />},
    ]
  }
])