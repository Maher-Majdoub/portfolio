import { Stack } from "@mui/material";
import { useState } from "react";
import Header from "../Header";
import HomePage from "./HomePage";
import BgParticles from "../BgParticles";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

export type PageName = "home" | "about" | "projects" | "contact";

const MainPage = () => {
  const [selectedPage, setSelectedPage] = useState<PageName>("home");

  return (
    <>
      <BgParticles />
      <Stack
        minHeight="100dvh"
        width="100%"
        alignItems="center"
        position="absolute"
        top={0}
        left={0}
        sx={{ overflowX: "hidden" }}
      >
        <Stack height="100dvh" width="min(1024px, 100%)" padding="0 10px">
          <Header
            selectedPage={selectedPage}
            onSetSelectedPage={(newPage) => setSelectedPage(newPage)}
          />
          {selectedPage === "home" && <HomePage />}
          {selectedPage === "about" && <AboutPage />}
          {selectedPage === "projects" && <ProjectsPage />}
          {selectedPage === "contact" && <ContactPage />}
        </Stack>
      </Stack>
    </>
  );
};

export default MainPage;
