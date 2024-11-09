import { useEffect, useState } from "react";
import { useWindowType } from "../Providers/WindowTypeProvider";
import { Stack, Avatar } from "@mui/material";
import maherImage from "../assets/maher.png";

const MyAvatar = () => {
  const [avatarSize, setAvatarSize] = useState(250);
  const { isPhone } = useWindowType();

  useEffect(() => {
    if (isPhone && avatarSize > 250) setAvatarSize(250);
    if (!isPhone && avatarSize < 350) setAvatarSize(350);
  }, [isPhone]);

  return (
    <Stack alignItems="center" width="100%">
      <Avatar src={maherImage} sx={{ width: avatarSize, height: avatarSize }} />
    </Stack>
  );
};

export default MyAvatar;
