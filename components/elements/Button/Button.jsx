import React, { useState, useEffect } from "react";
// Material UI
import { Button as ButtonMaterial } from "@material-ui/core";

export const Button = ({
  text = "Button",
  variant = "contained",
  color = "primary",
  startIcon,
  endIcon,
  disabled = false,
  onClick,
}) => {
  const [disableState, setDisableState] = useState(false);

  let handleOnClick = async (onClickFunction) => {
    if (onClickFunction && typeof onClickFunction === "function") {
      setDisableState(true);
      await onClickFunction();
      setDisableState(false);
    }
  };

  return (
    <ButtonMaterial
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled || disableState}
      onClick={() => handleOnClick(onClick)}
    >
      {text}
    </ButtonMaterial>
  );
};

export default Button;
