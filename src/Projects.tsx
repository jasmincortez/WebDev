import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "./theme";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Projects() {
  const isBig = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minWidth: "100vw",
        backgroundImage:
          "url('https://i.pinimg.com/originals/db/b5/fd/dbb5fd8b25e3fd584d3dc439eb6d0d82.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "bottom",
        pb: 30,
      }}
      id="projects"
    >
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            sx={{
              mt: 10,
              pt: 6.5,
              mb: 2,
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              textShadow: "1px 1px 1px black",
            }}
          >
            Projects
          </Typography>
        </Box>
      </Container>
      <Container>
        <ImageList
          sx={{
            width: isBig ? 832 : 344,
            mx: "auto",
            maxWidth: "100vw",
          }}
          cols={isBig ? 4 : 2}
          rowHeight={isBig ? 200 : 164}
          gap={16}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              component="a"
              target="_blank"
              href={item.url}
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderRadius: "1rem",
                  borderColor: theme.palette.secondary.main,
                  borderStyle: "solid",
                  borderWidth: 5,
                }}
              />
              <ImageListItemBar
                title={item.title}
                sx={{
                  borderRadius: "0 0 1rem 1rem",
                  "& .MuiImageListItemBar-title": { fontSize: "1rem" },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Container>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/736x/da/57/af/da57affe2fdaed40724a28a6a66fd420.jpg",
    title: "Chá Vivo",
    url: "https://chavivo.com.br/",
  },
  {
    img: "https://i.pinimg.com/736x/3a/c4/68/3ac4682fceef54292f84646ab9b938a1.jpg",
    title: "Acting Portfolio",
    url: "https://jasmincortez.com/",
  },
  {
    img: "https://i.pinimg.com/originals/90/c8/91/90c8916246c86c2cf7e05730a70b21ed.png",
    title: "ZenMosquito",
    url: "https://zenmosquito.github.io/",
  },
  {
    img: "https://i.pinimg.com/originals/dd/2e/9c/dd2e9cb163d0e60c7f27148637f45aa7.jpg",
    title: "Honey King Films",
    url: "https://honeykingfilms.github.io/",
  },
  {
    img: "https://i.pinimg.com/originals/84/a1/1b/84a11b0bde29a78e301954b1cb3c67b9.jpg",
    title: "Marco Chagas",
    url: "https://chagasmarco.github.io/",
  },
  {
    img: "https://pixeljoint.com/files/icons/full/nightsky_l.png",
    title: "Dino Game",
    url: "https://jasmincortez.github.io/dino-game/",
  },
  {
    img: "https://i.pinimg.com/originals/8d/57/ce/8d57cea438f76db257b2dfe6b050b112.jpg",
    title: "Linktree",
    url: "https://jasmincortez.github.io/framboeja",
  },
  {
    img: "https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZHcxMS1ub29uMDAwMTctZXllLmpwZw.jpg",
    title: "Prefix Calculator",
    url: "https://codepen.io/jasmincortez/pen/GRwYqgY",
  },
  {
    img: "https://i.pinimg.com/564x/43/e2/86/43e2860ad61726759d6a52a4f45785e6.jpg",
    title: "Random Quote Machine",
    url: "https://jasmincortez.github.io/Random_Quote_Machine",
  },
];
