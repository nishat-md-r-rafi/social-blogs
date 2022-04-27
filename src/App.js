import { Box, Button, Stack, styled } from "@mui/material";
import Feed from "./components/Feedbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
function App() {
  // const BlueButton = styled(Button)({
  //   backgroundColor: "skyBlue",
  //   color: "black",
  //   margin: 5,

  //   "&:hover": {
  //     backgroundColor: "black",
  //     color: "white",
  //   },
  //   "&:disabled": {
  //     backgroundColor: "gray",
  //     color: "white",
  //   },
  // });
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ gap: "10px" }}
        >
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
