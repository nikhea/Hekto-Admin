import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import useDialogStore from "../../../store/useDialogStore";
import theme from "../../../MUI/themeDefalut";
import { ThemeProvider } from "@mui/material/styles";
import { ThreeDots } from "react-loader-spinner";

interface RemoveDialogProps {
  title: string;
  isLoading: boolean;
  open: boolean;
  handleClose: () => void;
  handleRemove: () => void;
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const DraggableDialog: React.FC<RemoveDialogProps> = ({
  title,
  isLoading,
  open,
  handleClose,
  handleRemove,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          className="capitalize "
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          remove {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this {title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button disabled={isLoading} onClick={handleRemove}>
            {isLoading ? (
              <ThreeDots
                height="10"
                width="30"
                radius="9"
                color="#000"
                wrapperClass="flex text-center cursor-not-allowed py-2"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            ) : (
              "Remove"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default DraggableDialog;
