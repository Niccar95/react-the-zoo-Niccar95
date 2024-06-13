import { RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import { router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
