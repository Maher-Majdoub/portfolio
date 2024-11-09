import { Stack } from "@mui/material";
import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";
import { projects } from "../../utils/constants";

const ProjectsPage = () => {
  return (
    <Stack
      color="primary.main"
      spacing={5}
      padding="20px 0"
      flex={1}
      minHeight={0}
      overflow="auto"
    >
      <SectionTitle
        title="My Projects"
        description="Here you will find some of the my personal projects, each project containing its own case study"
      />
      <Stack spacing={4}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ProjectsPage;
