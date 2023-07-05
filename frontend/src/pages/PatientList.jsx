import React from "react";
import Button from "../components/common/Button";
import Header from "../containers/common/Header";
import "../styles/pages/PatientListPage.scss";

function PatientList() {
  return (
    <>
      <div className="pl-bg">
        <Header />
        <h1>환자목록</h1>
      </div>
    </>
  );
}

export default PatientList;
