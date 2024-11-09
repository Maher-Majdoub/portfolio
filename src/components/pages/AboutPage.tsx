import { Stack, Typography, Grid2 as Grid } from "@mui/material";
import SectionTitle from "../SectionTitle";
import { mySkills } from "../../utils/constants";
import SkillCard from "../SkillCard";
import { useWindowType } from "../../Providers/WindowTypeProvider";

const AboutPage = () => {
  const { isTablet } = useWindowType();
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
        title="About Me"
        description="Here you will find more information about me, what I do and my current
          skills in terms of programming and technology"
      />
      <Stack direction={isTablet ? "column" : "row"} spacing={4}>
        <Stack flex={1} spacing={2}>
          <Typography variant="h4" color="secondary.main" fontWeight={500}>
            What I Do?
          </Typography>
          <Typography variant="body1" fontWeight={350} color="primary.main">
            As a computer science student at the Higher Institute of Computer
            Science Of Tunis (ISI), I’m immersed in the fundamentals of
            technology and its applications, continually expanding my knowledge
            in both theory and practice. With a passion for problem-solving, I’m
            dedicated to competitive programming, where I refine my logical
            thinking and algorithmic skills. My interest in web development
            drives me to create efficient, responsive, and user-focused
            applications, making me proficient in a range of tools and
            technologies. I’m committed to building innovative solutions and
            advancing my expertise in software development.
          </Typography>
        </Stack>
        <Stack flex={1} spacing={2}>
          <Typography variant="h4" color="secondary.main" fontWeight={500}>
            My Skills
          </Typography>
          <Grid container gap={1}>
            {mySkills.map((skill, index) => (
              <Grid size="auto" key={index}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutPage;
