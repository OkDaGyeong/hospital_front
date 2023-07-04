import React from "react";

// import palette from "../../lib/styles/palette";
import "../../styles/Button.scss";

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
  color: "blue",
  // color: palette.blue[0],
};

export default Button;
