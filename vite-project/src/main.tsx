import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { router } from "./routes/Routes.tsx";
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/ > */}
  </StrictMode>,
)
