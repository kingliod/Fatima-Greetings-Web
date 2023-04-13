import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Divider } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "white", // Change to the desired color
            border: "8px solid #D885A3",
            borderRadius: "10px",
            color: "#FF008E ",
          },
        }}
      >
        <DialogTitle>{"Happy Monthsary Abunjing!"}</DialogTitle> <Divider />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ textAlign: "center", color: "#D885A3" }}
          >
            <b>
              Hi Fatima ko, <br />
              Love mo ba ko?
            </b>
          </DialogContentText>{" "}
        </DialogContent>{" "}
        <DialogActions>
          <Button onClick={handleClose}>YES</Button>
          <Button onClick={handleClose}>YES</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
