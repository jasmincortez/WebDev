import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavTabs from "./Nav";
import theme from "./theme";
import Certificates from "./Certificates";
import ImageAvatars from "./Avatar";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Appbar from "./Appbar";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  const isBig = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/89/53/58/8953585e52af9dec801c9e84f07ea33f.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Appbar />
      <Container maxWidth={false}>
        <Box
          sx={{
            my: 4,
          }}
        >
          <ImageAvatars />
          <Typography
            align="center"
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              color: theme.palette.mywhite,
              fontWeight: "bold",
            }}
          >
            Jasmin Cortez
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            sx={{ color: theme.palette.mysage }}
          >
            Front-end Developer & Web Designer
          </Typography>
          <Contacts />
        </Box>
        <Certificates />
      </Container>

      <Projects />
    </Container>
  );
}
