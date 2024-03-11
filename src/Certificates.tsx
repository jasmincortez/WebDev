import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "./theme";
import Course from "./Course";
import Cv from "./Cv";

export default function Certificates() {
  return (
    <Container id="certificates">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            sx={{
              mt: 10,
              mb: 2,
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              textShadow: "1px 1px 1px black",
            }}
          >
            Certificates
          </Typography>
        </Box>
      </Container>
      <Course />
      <Cv />
    </Container>
  );
}
