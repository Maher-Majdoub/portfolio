import { Stack, Tooltip, ButtonBase, Link, Box } from "@mui/material";
import linkedinIcon from "../assets/linkedin_icon.png";
import githubIcon from "../assets/github-icon.png";
import codeforcesIcon from "../assets/codeforces_icon.png";

const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Linked-In">
        <ButtonBase>
          <Link
            href={"https://www.linkedin.com/in/maher-majdoub-220294256"}
            target="_blank"
          >
            <Box width={25} height={25}>
              <img src={linkedinIcon} />
            </Box>
          </Link>
        </ButtonBase>
      </Tooltip>
      <Tooltip title="GitHub">
        <ButtonBase>
          <Link href={"https://github.com/Maher-Majdoub"} target="_blank">
            <Box width={25} height={25}>
              <img src={githubIcon} />
            </Box>
          </Link>
        </ButtonBase>
      </Tooltip>
      <Tooltip title="Codeforces">
        <ButtonBase>
          <Link
            href={"https://codeforces.com/profile/maherayari24"}
            target="_blank"
          >
            <Box width={25} height={25}>
              <img src={codeforcesIcon} />
            </Box>
          </Link>
        </ButtonBase>
      </Tooltip>
    </Stack>
  );
};

export default SocialLinks;
