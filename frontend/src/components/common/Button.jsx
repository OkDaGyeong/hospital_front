import React from "react";

// import palette from "../../lib/styles/palette";
import "../../styles/Button.scss";
import classNames from "classnames";

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "mint",
  // color: palette.blue[0],
};

export default Button;
