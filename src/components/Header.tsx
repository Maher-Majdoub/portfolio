import { Stack } from "@mui/material";
import { PageName } from "./pages/MainPage";
import NavBar from "./NavBar";
import Logo from "./Logo";
import { useWindowType } from "../Providers/WindowTypeProvider";
import ToggleButton from "./ToggleButton/ToggleButton";

interface Props {
  selectedPage: string;
  onSetSelectedPage(newPage: PageName): void;
}

const Header = ({ selectedPage, onSetSelectedPage }: Props) => {
  const { isPhone } = useWindowType();

  if (isPhone)
    return (
      <Stack
        padding="10px 0"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Logo />
          <ToggleButton />
        </Stack>
        <NavBar
          selectedPage={selectedPage}
          onSetSelectedPage={onSetSelectedPage}
        />
      </Stack>
    );

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="10px 0"
    >
      <Logo />
      <NavBar
        selectedPage={selectedPage}
        onSetSelectedPage={onSetSelectedPage}
      />
      <ToggleButton />
    </Stack>
  );
};

export default Header;
