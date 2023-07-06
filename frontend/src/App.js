import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import PatientList from "./pages/PatientList";
import Patient from "./pages/Patient";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/patient-list" element={<PatientList />} />
        <Route path="/patient" element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
