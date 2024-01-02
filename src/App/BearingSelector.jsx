import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../Components/RootLayout/RootLayout";

import calculateC10Rating from "../HelperFunctions/CalculateC10Rating";

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
          action={calculateC10Rating}
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default BearingSelector;
