import { Button, useColorMode } from "@chakra-ui/react";
import { CiDark, CiLight } from "react-icons/ci";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Button variant="ghost" onClick={toggleColorMode}>
      {colorMode === "dark" ? <CiLight size={20} /> : <CiDark size={20} />}
    </Button>
  );
};

export default ColorModeSwitch;
