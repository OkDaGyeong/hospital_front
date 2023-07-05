import React from "react";
import Button from "../components/common/Button";
import Header from "../containers/common/Header";
import "../styles/pages/PatientListPage.scss";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
function PatientList() {
  return (
    <>
      <div className="pl-bg">
        <Header />
        <div className="content">
          <div className="grid-box">
            <Card>
              <Card.Body>
                <Card.Title
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  환자 정보 검색
                  <Button size={"small"}>검색</Button>
                </Card.Title>

                <Card.Text>
                  <form action="">
                    <label htmlFor="">
                      병동
                      <input type="text" size={"small"} />
                    </label>
                  </form>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body id="userInfo">
                <Card.Img
                  variant="top"
                  src="data:image/png;base64,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"
                />
                <div>
                  <Card.Title>의료진 이름</Card.Title>
                  <Card.Text>진료과 코드</Card.Text>
                  <Card.Link href="#">로그아웃</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <hr />
          <Card>
            <Card.Header
              as="h5"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>51병동/5101호</span>
              <span>이준0/44세/남성</span>
              <Button>회진 ▶</Button>
            </Card.Header>
            <Card.Body>
              <Table striped={"columns"}>
                <tbody>
                  <tr>
                    <th>진료과</th>
                    <td>OS</td>
                    <th>진료의</th>
                    <td>ㅇㅇㅇ</td>
                    <th>차트번호</th>
                    <td>123123</td>
                    <th>입원일자</th>
                    <td>2023-02-23</td>
                  </tr>
                  <tr>
                    <th>진단명</th>
                    <td colSpan={3}></td>
                    <th>보험유형</th>
                    <td colSpan={3}>ㅇㅇㅇ</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default PatientList;
