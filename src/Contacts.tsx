import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import theme from "./theme";

export default function Contacts() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"center"}
      spacing={1}
      id="contact"
    >
      {/* <Typography
        variant="body1"
        sx={{ fontWeight: "bold", color: theme.palette.secondary.main }}
      >
        Get in touch!
      </Typography> */}
      <IconButton
        component="a"
        target="_blank"
        aria-label="Email"
        href="mailto:jasmincortez_@outlook.com"
        sx={{
          "&:hover": { color: theme.palette.mypink },
          color: theme.palette.mysage,
        }}
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        component="a"
        target="_blank"
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/jasmin-cortez-/"
        sx={{
          "&:hover": { color: theme.palette.mypink },
          color: theme.palette.mysage,
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        target="_blank"
        aria-label="Github"
        href="https://github.com/JasminCortez"
        sx={{
          "&:hover": { color: theme.palette.mypink },
          color: theme.palette.mysage,
        }}
      >
        <GitHubIcon />
      </IconButton>
    </Stack>
  );
}
