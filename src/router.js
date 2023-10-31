import { createBrowserRouter } from "react-router-dom";
import CreateTicket from './pages/CreateTicket';
import Desktop from './pages/Desktop';
import GetStarted from './pages/GetStarted';
import Queue from './pages/Queue';
import RouterPage from "./pages/RouterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RouterPage,
    children: [
      {
        path: "/get-started",
        Component: GetStarted,
      },
      {
        path: "/queue",
        Component: Queue,
      },
      {
        path: "/new-ticket",
        Component: CreateTicket,
      },
      {
        path: "/desktop",
        Component: Desktop,
      },
      {
        path: "*",
        Component: GetStarted,
      },
    ],
  },
])
