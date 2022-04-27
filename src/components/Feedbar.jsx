import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

function Feedbar(props) {
  return (
    <Box flex={4} m={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feedbar;
