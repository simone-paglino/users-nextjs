import React from "react";
// Material UI
import { Dialog as DialogMaterialUI } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ({ children, isOpen }) => {
  return (
    <DialogMaterialUI
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
    >
      {children}
    </DialogMaterialUI>
  );
};
