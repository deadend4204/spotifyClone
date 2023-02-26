import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { availableRoutes } from "./routes/availableRoutes";
import { PrivateRoute } from "./routes/privateRoute";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            {availableRoutes.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <PrivateRoute
                    Component={item.component}
                    isDashboard={item.isDashboard}
                    isPrivate={item.isPrivate}
                  />
                }
              />
            ))}
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
