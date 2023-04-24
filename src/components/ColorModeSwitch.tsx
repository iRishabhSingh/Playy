import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { CiDark, CiLight } from "react-icons/ci";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>
        {colorMode === "dark" ? <CiLight size={20} /> : <CiDark size={20} />}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
