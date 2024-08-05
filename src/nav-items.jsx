import { Home, BarChart } from "lucide-react";
import Index from "./pages/Index.jsx";
import Chart from "./pages/Chart.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Chart",
    to: "/chart",
    icon: <BarChart className="h-4 w-4" />,
    page: <Chart />,
  },
];
