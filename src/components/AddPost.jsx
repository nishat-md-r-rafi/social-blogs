import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  Box,
  Fab,
  Modal,
  Typography,
  styled,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add, PostAdd } from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
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
            height: "50%",
            width: "50%",
            backgroundColor: "white",
            borderRadius: "10px",
            p: 5,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
            textAlign="center"
          >
            Make a new Post!
          </Typography>
          <UserBox>
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/photos/cute-kitten-licking-glass-table-with-copy-space-picture-id1293763250?b=1&k=20&m=1293763250&s=170667a&w=0&h=zcK63xxkMVX-ca0d5laTsDxauVUMH62F71MKcbqaGnI="
            />
            <Typography variant="h6"> Funny Master</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%", marginTop: "30px", marginBottom: "20px" }}
            label="What is in your mind?"
            // placeholder="What is in your mind"
            multiline
            variant="filled"
            margin="10px"
          />

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button>
              <PostAdd />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default AddPost;
