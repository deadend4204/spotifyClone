import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "50%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <CircularProgress size="3.5rem" color="success" />
    </Box>
  );
}
