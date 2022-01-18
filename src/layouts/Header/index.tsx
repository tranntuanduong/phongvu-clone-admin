import Box from "@mui/material/Box";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1,
      }}
      onClick={handleChangePage}
    >
      Header
    </Box>
  );
}
