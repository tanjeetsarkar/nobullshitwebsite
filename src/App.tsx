import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <>HUGE ERROR incorrect route...</>,
    },
  ],
  {
    basename: "/nobullshitwebsite",
  }
);

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="mt-5">
          <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
        </div>
      </div>
    </>
  );
}

export default App;

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
