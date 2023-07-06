import React from "react";
import Header from "../containers/common/Header";
import Table from "react-bootstrap/Table";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Button from "../components/common/Button";
import "../styles/pages/Patient.scss";
function Patient() {
  return (
    <>
      <Header />
      <div className="content">
        <div>
          <h3>환자 기본 정보</h3>
          <Table bordered className="patient-table">
            <tbody>
              <tr>
                <th>병동/병실</th>
                <td>51/5101</td>
                <th>환자명</th>
                <td>홍길동</td>
                <th>나이/성별</th>
                <td>44/남</td>
                <th>입원일자</th>
                <td>2023-02-23</td>
              </tr>
              <tr>
                <th>진료과</th>
                <td>OS</td>
                <th>진료의</th>
                <td>ㅇㅇㅇ</td>
                <th>차트번호</th>
                <td>123123</td>
                <th>보험유형</th>
                <td>건강보험</td>
              </tr>
              <tr>
                <th>진단명</th>
                <td colSpan={7}></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <hr />

        <div id="tab">
          <form action="" id="searchDate">
            <input type="date" />
          </form>
          <Tabs
            defaultActiveKey="pState"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="pState" title="환자상태">
              환자 상태
            </Tab>
            <Tab eventKey="prescription" title="처방내역">
              처방 내역
            </Tab>
            <Tab eventKey="inspection" title="검사결과">
              검사결과
            </Tab>
            <Tab eventKey="reading" title="판독결과">
              판독결과
            </Tab>
          </Tabs>
        </div>

        <div id="b-btn">
          <Button color={"blue"}>뒤로가기</Button>
        </div>
      </div>
    </>
  );
}

export default Patient;
