import { Tabs, Tab } from "@mui/material";
import { PageName } from "./pages/MainPage";

interface Props {
  selectedPage: string;
  onSetSelectedPage(newPage: PageName): void;
}

const NavBar = ({ selectedPage, onSetSelectedPage }: Props) => {
  return (
    <Tabs
      value={selectedPage}
      indicatorColor="secondary"
      sx={{
        "& .MuiTab-root": {
          fontSize: 12,
          color: "primary.main",
          letterSpacing: 3,
          minWidth: 0,
          paddingBottom: 1,
          "&.Mui-selected": { color: "secondary.main" },
        },
        "& .MuiTabs-flexContainer": {
          justifyContent: "space-between",
        },
      }}
    >
      <Tab
        label="Home"
        color="white"
        value="home"
        onClick={() => onSetSelectedPage("home")}
      />
      <Tab
        label="About"
        value="about"
        onClick={() => onSetSelectedPage("about")}
      />
      <Tab
        label="Projects"
        value="projects"
        onClick={() => onSetSelectedPage("projects")}
      />
      <Tab
        label="Contact"
        value="contact"
        onClick={() => onSetSelectedPage("contact")}
      />
    </Tabs>
  );
};

export default NavBar;
