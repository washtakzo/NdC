import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

type Props = {
  className?: string;
};

export default function LoadingSpinner({ className }: Props) {
  return (
    <Box className={`flex justify-center items-center ${className}`}>
      <CircularProgress />
    </Box>
  );
}
