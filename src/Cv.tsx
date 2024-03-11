import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CvButtons() {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent={"center"}
      sx={{ mt: 6 }}
    >
      <Button
        variant="contained"
        component="a"
        target="_blank"
        color="secondary"
        aria-label="Cv"
        href="https://pdfhost.io/v/Itca0Wt7~_Jasmin_Cortez_CV___WebDev"
        sx={{
          borderRadius: "1rem",
          textTransform: "lowercase",
        }}
      >
        Full CV
      </Button>
    </Stack>
  );
}
