import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import theme from "./theme";

const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 100;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
        if (props.href) {
          scrollToSection(props.href);
        }
      }}
      aria-current={props.selected && "page"}
      sx={{
        color: theme.palette.secondary.main,
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.mysage,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        centered={true}
        TabIndicatorProps={{
          style: {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        <LinkTab label="Certificates" href="certificates" />
        <LinkTab label="Projects" href="projects" />
        <LinkTab label="Contact" href="contacts" />
        {/* Make scroll and link to sections */}
      </Tabs>
    </Box>
  );
}
