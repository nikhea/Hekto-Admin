import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PageLoading from "../../Loading/PageLoading";
import ModelContent from "./ModelContent";
import { FC, useEffect, useRef, useState } from "react";
import theme from "../../../MUI/themeDefalut";
import { ThemeProvider } from "@mui/material/styles";
import { useModelStore } from "../../../store/useModelStore";

interface BasicModalProps {
  open?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  data?: any;
  onInputChange: (value: string) => void;
  triggerRef?: any;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  // top: "50%",
  // left: "60%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  marginX: "",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  paddingY: 4,
};

const BasicModal: FC<BasicModalProps> = ({
  // open,
  // handleOpen,
  // handleClose,
  onInputChange,
  triggerRef,
  data,
}) => {
  const { handleOpen, open, handleClose } = useModelStore();

  const [position, setPosition] = useState({ top: 0, left: 0 });
  if (!data) {
    return <PageLoading />;
  }

  // useEffect(() => {
  //   const calculatePosition = () => {
  //     if (triggerRef.current) {
  //       const { top, left } = triggerRef.current.getBoundingClientRect();
  //       setPosition({ top, left });
  //     }
  //   };

  //   calculatePosition();
  //   window.addEventListener("resize", calculatePosition);

  //   return () => {
  //     window.removeEventListener("resize", calculatePosition);
  //   };
  // }, [triggerRef]);

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModelContent
            handleClose={handleClose}
            onInputChange={(e) => onInputChange(e)}
            data={data}
            titleText="select category"
            subTitleText="Select the category too be added."
            btnText="select category"
            searchText="filter categories by name"
          />
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default BasicModal;
