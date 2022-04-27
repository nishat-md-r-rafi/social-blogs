import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { Box, Fab, Modal, Typography, styled } from "@mui/material";
import { Add } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function AddPost(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          sx={{
            height: "20%",
            width: "20%",
            backgroundColor: "white",
            borderRadius: "10px",
            p: 3,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Welcome! <br />
            Make a new Post!
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
}

export default AddPost;
