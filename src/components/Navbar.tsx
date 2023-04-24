import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="40px" />
      <Text>Navbar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
