import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "../Components/RootLayout/RootLayout";

import Home from "../Routes/Home/Home";

function BearingSelector() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default BearingSelector;
