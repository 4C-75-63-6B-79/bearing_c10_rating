import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../Components/RootLayout/RootLayout";

import Home from "../Routes/Home/Home";
import BearingLoadLifeAtRatedReliability from "../Routes/BearingLoadLifeAtRatedReliability/BearingLoadLifeAtRatedReliability";

function BearingSelector() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="BearingLoadLifeAtRatedReliability"
          element={<BearingLoadLifeAtRatedReliability />}
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default BearingSelector;
