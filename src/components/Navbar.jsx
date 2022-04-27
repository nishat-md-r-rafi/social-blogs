import styled from "@emotion/styled";
import { Mail, NotificationsTwoTone, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 10px",
  borderRadius: "5px",
}));

const Icon = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
}));

function Navbar(props) {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Rafi
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icon>
          <Badge badgeContent={4} color="primary">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="primary">
            <NotificationsTwoTone color="action" />
          </Badge>

          <Avatar
            onClick={(e) => setOpen(true)}
            alt="pro-pic"
            src="https://s36537.pcdn.co/wp-content/uploads/2017/12/A-cat-yowling-or-making-a-sound-with-mouth-open.jpg.optimal.jpg"
          />

          <Menu
            id="positioned-menu"
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Icon>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
