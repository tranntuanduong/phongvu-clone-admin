import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Slidebar from "./Sidebar";

function Layouts() {
  return (
    <Fragment>
      <Header />
      <StyledLayout>
        <Slidebar />
        <Box sx={{ p: 2, ml: "240px" }}>
          <Outlet />
        </Box>
      </StyledLayout>
    </Fragment>
  );
}

const StyledLayout = styled(Box)`
  margin-top: 56px;
  min-height: calc(100vh - 56px);
  background-color: ${(props) => props.theme.palette.background.default};
`;

export default Layouts;
