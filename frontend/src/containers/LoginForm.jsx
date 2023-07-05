import React from "react";
import Button from "../components/common/Button";
import WhiteBox from "../components/common/WhiteBox";
import logoImg from "../static/images/logo.png";
import Input from "../components/common/Input";
import "../styles/LoginForm.scss";
function LoginForm() {
  return (
    <>
      <WhiteBox>
        <img src={logoImg} alt="로고 이미지" id="logoImg" />
        <form action="">
          <Input type="text" placeholder="ID" size={"large"} />
          <Input type="password" placeholder="PW" size={"large"} />
          <div id="warring">
            <p style={{ fontSize: "14px" }}>
              아이디 및 비밀번호를 재확인 해주십시오.
            </p>
          </div>
          <Button size={"large"} fullWidth>
            로그인
          </Button>
        </form>
      </WhiteBox>
    </>
  );
}

export default LoginForm;
