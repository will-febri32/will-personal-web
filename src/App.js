import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Main Pages
import Challenge from "./pages/challenge/Challenge";
import Home from "./pages/Home";

// Challenges
const FM_N_Challenge_1 = lazy(() =>
  import("./pages/challenge/frontend-mentor/newbie/1/FM_N_Challenge_1")
);
const FM_N_Challenge_2 = lazy(() =>
  import("./pages/challenge/frontend-mentor/newbie/2/FM_N_Challenge_2")
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="challenge">
          <Route index element={<Challenge />} />
          <Route path="frontend-mentor/newbie">
            <Route
              element={
                <Suspense fallback={null}>
                  <FM_N_Challenge_1 />
                </Suspense>
              }
              path="1"
            />
            <Route
              element={
                <Suspense fallback={null}>
                  <FM_N_Challenge_2 />
                </Suspense>
              }
              path="2"
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
