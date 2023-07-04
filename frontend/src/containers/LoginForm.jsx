import React from "react";
import Button from "../components/common/Button";
import WhiteBox from "../components/common/WhiteBox";
import logoImg from "../static/images/logo.png";
import Input from "../components/common/Input";
import "../styles/LoginForm.scss";
function LoginForm() {
  return (
    <>
      <WhiteBox size={"medium"}>
        <img src={logoImg} alt="로고 이미지" id="logoImg" />
        <form action="">
          <Input type="text" />
          <Input type="password" />
          <Button size={"large"} fullWidth>
            로그인
          </Button>
        </form>
      </WhiteBox>
    </>
  );
}

export default LoginForm;
