import React from "react";
// Material UI
import { TextField } from "@material-ui/core";

const Input = ({
  label = "Insert something",
  required = false,
  disabled = false,
  type = "text",
  defaultValue = "",
  placeholder,
  inputRef,
  size = "medium",
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      required={required}
      disabled={disabled}
      type={type}
      defaultValue={defaultValue}
      inputRef={inputRef}
      placeholder={placeholder ?? label}
      size={size}
    />
  );
};

export default Input;
