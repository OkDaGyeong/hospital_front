import React from "react";
import Button from "../components/common/Button";
import Header from "../containers/common/Header";
import "../styles/pages/PatientListPage.scss";

import OffcanvasExample from "../containers/common/HeaderEx";
function PatientList() {
  return (
    <>
      <div className="pl-bg">
        <Header />
        <OffcanvasExample />
        <h1>환자목록</h1>
      </div>
    </>
  );
}

export default PatientList;
