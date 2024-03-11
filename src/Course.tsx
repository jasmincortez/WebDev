import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import DvrIcon from "@mui/icons-material/Dvr";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import DrawIcon from "@mui/icons-material/Draw";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { Avatar, ListItemAvatar, Stack, useMediaQuery } from "@mui/material";
import theme from "./theme";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [openCFG, setOpenCFG] = React.useState(false);

  const handleClickCFG = () => {
    setOpenCFG(!openCFG);
  };

  const [openUdemy, setOpenUdemy] = React.useState(false);

  const handleClickUdemy = () => {
    setOpenUdemy(!openUdemy);
  };

  const [openGoogle, setOpenGoogle] = React.useState(false);

  const handleClickGoogle = () => {
    setOpenGoogle(!openGoogle);
  };

  const isBig = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box>
      <Stack
        direction={isBig ? "row" : "column"}
        alignItems="center"
        justifyContent={"center"}
        spacing={3}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: theme.palette.mysage,
            borderRadius: "1rem",
            "& .MuiTypography-root": { fontSize: "1.25rem" },
          }}
          aria-labelledby="nested-list-subheader"
        >
          {/* Dropdown btn  */}
          {/* freeCodeCamp */}
          <ListItemButton onClick={handleClick}>
            <ListItemAvatar>
              <Avatar
                alt="FCC"
                src="https://d33wubrfki0l68.cloudfront.net/bbfa33a202e8612d49b6c1ed05c1fdd8e4001566/bbdd1/img/fcc_secondary_small.svg"
                sx={{
                  "& .MuiAvatar-img": {
                    objectFit: "contain",
                  },
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="freeCodeCamp" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Course */}

              <ListItemButton
                sx={{
                  pl: 4,
                }}
                href=""
                target="_blank"
              >
                <ListItemIcon>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary="Front End Development Libraries" />
              </ListItemButton>
              {/* Course */}
              <ListItemButton
                sx={{ pl: 4 }}
                href="https://www.freecodecamp.org/certification/jasmincortez/javascript-algorithms-and-data-structures"
                target="_blank"
              >
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText primary="JavaScript Algorithms and Data Structures" />
              </ListItemButton>
              {/* Course */}
              <ListItemButton
                sx={{ pl: 4 }}
                href="https://www.freecodecamp.org/certification/jasmincortez/responsive-web-design"
                target="_blank"
              >
                <ListItemIcon>
                  <HtmlIcon />
                </ListItemIcon>
                <ListItemText primary="Responsive Web Design" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* Dropdown btn */}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: theme.palette.mysage,
            borderRadius: "1rem",
            "& .MuiTypography-root": { fontSize: "1.25rem" },
          }}
          aria-labelledby="nested-list-subheader"
        >
          {/* Dropdown btn  */}
          {/* Code First Girls */}
          <ListItemButton onClick={handleClickCFG}>
            <ListItemAvatar>
              <Avatar
                alt="CFG"
                src="https://codefirstgirls.org.uk/wp-content/uploads/2021/04/Black-Code-First-Girls-Logo-Transparent.png"
                sx={{
                  "& .MuiAvatar-img": {
                    objectFit: "contain",
                  },
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="Code First Girls" />
            {openCFG ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCFG} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Course */}
              <ListItemButton
                sx={{ pl: 4 }}
                href="https://i.pinimg.com/originals/ad/1a/93/ad1a935c17c323bacbb5ccb803d89047.jpg"
                target="_blank"
              >
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText primary="Introduction to JavaScript" />
              </ListItemButton>
              {/* Course */}
              <ListItemButton
                sx={{ pl: 4 }}
                href="https://i.pinimg.com/originals/4d/4f/d0/4d4fd0a6aab6c37ae7f2e8a04317ae18.jpg"
                target="_blank"
              >
                <ListItemIcon>
                  <HtmlIcon />
                </ListItemIcon>
                <ListItemText primary="Introduction to Web Development" />
              </ListItemButton>
              {/* Course */}
              <ListItemButton
                sx={{ pl: 4 }}
                href="https://i.pinimg.com/originals/0f/0c/61/0f0c6165c7f9c507cdbc67ff0ec053c6.jpg"
                target="_blank"
              >
                <ListItemIcon>
                  <DeveloperModeIcon />
                </ListItemIcon>
                <ListItemText primary="Introduction to Python and Apps" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Stack>

      {/* 2nd line btns */}

      <Stack
        direction={isBig ? "row" : "column"}
        alignItems="center"
        justifyContent={"center"}
        spacing={3}
        sx={{ mt: isBig ? 10 : 3 }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: theme.palette.mysage,
            borderRadius: "1rem",
            "& .MuiTypography-root": { fontSize: "1.25rem" },
          }}
          aria-labelledby="nested-list-subheader"
        >
          {/* Dropdown btn  */}
          {/* Udemy */}
          <ListItemButton onClick={handleClickUdemy}>
            <ListItemAvatar>
              <Avatar
                alt="Udemy"
                src="https://seeklogo.com/images/U/udemy-logo-5315F166A4-seeklogo.com.png"
                sx={{
                  "& .MuiAvatar-img": {
                    objectFit: "contain",
                  },
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="Udemy" />
            {openUdemy ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openUdemy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Course */}
              <ListItemButton sx={{ pl: 4 }} href="" target="_blank">
                <ListItemIcon>
                  <DrawIcon />
                </ListItemIcon>
                <ListItemText primary="Figma UI UX Essentials" />
              </ListItemButton>
              {/* Course */}
              <ListItemButton sx={{ pl: 4 }} href="" target="_blank">
                <ListItemIcon>
                  <DesignServicesIcon />
                </ListItemIcon>
                <ListItemText primary="Complete Web & Mobile Designer: UI/UX, Figma, +more" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* Dropdown btn */}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: theme.palette.mysage,
            borderRadius: "1rem",
            "& .MuiTypography-root": { fontSize: "1.25rem" },
          }}
          aria-labelledby="nested-list-subheader"
        >
          {/* Dropdown btn  */}
          {/* Google Digital Garage */}
          <ListItemButton onClick={handleClickGoogle}>
            <ListItemAvatar>
              <Avatar
                alt="GDG"
                src="https://i.pinimg.com/originals/3e/26/04/3e26049d9396f49912688a986b4027b8.png"
                sx={{
                  "& .MuiAvatar-img": {
                    objectFit: "contain",
                  },
                }}
              />
            </ListItemAvatar>
            <ListItemText primary="Google DigitalGarage" />
            {openGoogle ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGoogle} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Course */}
              <ListItemButton
                sx={{ pl: 4 }}
                href="https://i.pinimg.com/originals/0e/18/b9/0e18b90476c3b4d7759504b9ab9d42c6.jpg"
                target="_blank"
              >
                <ListItemIcon>
                  <AppShortcutIcon />
                </ListItemIcon>
                <ListItemText primary="The Fundamentals of Digital Marketing" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Stack>
    </Box>
  );
}
