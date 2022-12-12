import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

type Props = {
  className?: string;
};

export default function LoadingSpinner({ className }: Props) {
  return (
    <Box
      sx={{ width: "100%" }}
      className={`flex justify-center items-center fixed inset-0 bg-overlay z-[999] ${className}`}
    >
      <LinearProgress sx={{ width: "50%" }} color="primary" />
    </Box>
  );
}
