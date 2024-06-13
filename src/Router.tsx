import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { AnimalsPage } from "./pages/AnimalsPage";
import { AnimalPage } from "./pages/AnimalPage";
import { PageNotFound } from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/animals",
        element: <AnimalsPage></AnimalsPage>,
      },
      {
        path: "/animal/:id",
        element: <AnimalPage></AnimalPage>,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);
