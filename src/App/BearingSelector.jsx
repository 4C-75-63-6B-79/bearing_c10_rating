import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../Components/RootLayout/RootLayout";

import Home from "../Routes/Home/Home";
import ThingsToAdd from "../Routes/ThingsToAdd/ThingsToAdd";

function BearingSelector() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="ThingsToAdd" element={<ThingsToAdd />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default BearingSelector;
