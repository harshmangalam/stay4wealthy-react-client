import {
  Box,
  Container,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import Logo from "./Logo";

function Navbar() {

  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box
      py="2"
      borderBottom="1px"
      borderBottomColor={colorMode === "light" ? "gray.300" : "gray.700"}
    >
      <Container maxW="container.lg">
        <HStack justifyContent="space-between">
          <Sidebar />
          <Logo />
          <IconButton
            rounded="full"
            variant="solid"
            icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
