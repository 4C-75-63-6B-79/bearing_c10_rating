import { NavLink, Outlet } from "react-router-dom";

import Home from "../../Routes/Home/Home";
import BearingLoadLifeAtRatedReliability from "../../Routes/BearingLoadLifeAtRatedReliability/BearingLoadLifeAtRatedReliability";
import RelatingLoadLifeReliability from "../../Routes/RelatingLoadLifeReliability/RelatingLoadLifeReliability";

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
              <NavLink
                to="BearingLoadLifeAtRatedReliability"
                element={<BearingLoadLifeAtRatedReliability />}
              >
                Bearing Load Life At Rated Reliability
              </NavLink>
            </li>
            <li>
              <NavLink
                to="RelatingLoadLifeReliability"
                element={<RelatingLoadLifeReliability />}
              >
                Relating Load, Life and Reliability
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
