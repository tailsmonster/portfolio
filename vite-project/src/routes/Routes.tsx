import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ExperiencePage from "../pages/ExperiencePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import PageNotFound from "../pages/404Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      // {path: "blog", element: <BlogPage />},
      {path: "experience", element: <ExperiencePage />},
      {path: "portfolio", element: <PortfolioPage />},
      {path: "contact", element: <ContactPage />},
      {path: "*", element: <PageNotFound />},
    ]
  }
],
{
  basename: "/nicoaroca_portfolio",  // <-- Add this here
}
)