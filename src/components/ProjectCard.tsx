import {
  Box,
  Stack,
  Typography,
  Grid2 as Grid,
  Button,
  Link,
} from "@mui/material";
import { useWindowType } from "../Providers/WindowTypeProvider";

interface Props {
  project: {
    name: string;
    description: string;
    image: string;
    stack: string[];
    sourceCode?: string;
    liveVersion?: string;
  };
}

const ProjectCard = ({ project }: Props) => {
  const { isTablet } = useWindowType();

  return (
    <Stack
      direction={isTablet ? "column" : "row"}
      spacing={isTablet ? 2 : 5}
      padding={2}
      alignItems="center"
      border="1px solid"
      borderRadius={5}
    >
      <Box width={isTablet ? "100%" : "300px"}>
        <img src={`/images/${project.image}`} />
      </Box>
      <Stack justifyContent="center" spacing={2} flex={1}>
        <Typography variant="h4" color="secondary">
          {project.name}
        </Typography>
        <Typography variant="h6" fontWeight={400} color="primary.main">
          {project.description}
        </Typography>
        <Grid container gap={1} color="primary.main">
          {project.stack.map((tool, index) => (
            <Grid size="auto" key={index}>
              <Box
                padding={1}
                border="1px solid"
                borderRadius="5px"
                fontWeight={400}
              >
                {tool}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2}>
          {project.sourceCode && (
            <Button variant="contained" color="secondary">
              <Link
                href={project.sourceCode}
                target="_blank"
                sx={{ textDecoration: "none" }}
                color="secondary.contrastText"
              >
                Source Code
              </Link>
            </Button>
          )}
          {project.liveVersion && (
            <Button variant="contained" color="secondary">
              <Link
                href={project.liveVersion}
                target="_blank"
                sx={{ textDecoration: "none" }}
                color="secondary.contrastText"
              >
                Live Vesion
              </Link>
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
