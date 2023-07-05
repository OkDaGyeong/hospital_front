import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import PatientList from "./pages/PatientList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient-list" element={<PatientList />} />
      </Routes>
    </div>
  );
}

export default App;
