import React from "react";

import "../../styles/common/WhiteBox.scss";
import classNames from "classnames";

function WhiteBox({ size, height, direction, ...rest }) {
  return (
    <div
      className={classNames("WhiteBox", size, height, direction)}
      {...rest}
    ></div>
  );
}

WhiteBox.defaultProps = {
  size: "medium",
  direction: "column",
};

export default WhiteBox;
