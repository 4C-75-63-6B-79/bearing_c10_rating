import { NavLink, Outlet } from "react-router-dom";

import Home from "../../Routes/Home/Home";
import ThingsToAdd from "../../Routes/ThingsToAdd/ThingsToAdd";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1>Bearing Selector</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" element={<Home />}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="ThingsToAdd" element={<ThingsToAdd />}>
                ThingsToAdd
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
