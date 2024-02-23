import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PageLoading from "../../Loading/PageLoading";
import ModelContent from "./ModelContent";
import { FC, useEffect, useRef, useState } from "react";
import theme from "../../../MUI/themeDefalut";
import { ThemeProvider } from "@mui/material/styles";
import { useModelStore } from "../../../store/useModelStore";
import useDeviceProperties from "../../../Hooks/UseMediaQueries";

interface BasicModalProps {
  open?: boolean;
  handleOpen?: () => void;
  handleClose?: () => void;
  data?: any;
  onInputChange: (value: string) => void;
  triggerRef?: any;
  titleText: string;
  subTitleText: string;
  btnText: string;
  searchText: string;
}

const BasicModal: FC<BasicModalProps> = ({
  // open,
  // handleOpen,
  // handleClose,
  onInputChange,
  triggerRef,
  data,
  titleText,
  subTitleText,
  btnText,
  searchText,
}) => {
  const { handleOpen, open, handleClose } = useModelStore();
  const { isTabletOrMobile, isMobile } = useDeviceProperties();
  if (!data) {
    return <PageLoading />;
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    // top: "50%",
    // left: "60%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? 390 : isTabletOrMobile ? 600 : 1000,
    // width: 300,

    // width: 390,
    marginX: "",
    bgcolor: "background.paper",
    //   border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    paddingY: 4,
  };

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
            titleText={titleText}
            subTitleText={subTitleText}
            btnText={btnText}
            searchText={searchText}
          />
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default BasicModal;
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
// const [position, setPosition] = useState({ top: 0, left: 0 });
