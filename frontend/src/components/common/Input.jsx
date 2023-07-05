import React from "react";
import "../../styles/common/Input.scss";
import classNames from "classnames";
function Input({ type, placeholder, size, ...rest }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={classNames(size)}
        {...rest}
      />
    </>
  );
}

export default Input;
