import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

function AddPost(props) {
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{ position: "fixed", bottom: 20, left: "calc(50% - 25px)" }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
    </>
  );
}

export default AddPost;
