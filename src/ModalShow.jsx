// import React from 'react';
// import Modal from "@mui/Modal";

import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import bangladesh from "./assets/img/download.jpeg";
import palestine from "./assets/img/download.png";
import dubai from "./assets/img/images.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  color: "#fff",
  p: 4,
};

const ModalShow = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" className="button" onClick={handleOpen}>
        Click me
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={style}>
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            <MenuList>
              <MenuItem sx={{ display: "flex", gap: "20px" }}>
                <img className="img_style" src={bangladesh} alt="" />
                Bangladesh
              </MenuItem>
              <MenuItem sx={{ display: "flex", gap: "20px" }}>
                <img className="img_style" src={dubai} alt="" />
                Dubai
              </MenuItem>

              <MenuItem sx={{ display: "flex", gap: "20px" }}>
                <img className="img_style" src={palestine} alt="" />
                Palestine
              </MenuItem>
            </MenuList>
          </Typography>
          <Button variant="contained" className="button" onClick={handleClose}>
            Close modal
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalShow;
