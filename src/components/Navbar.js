import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { unauthlinks, links } from "../data/links";
import useAuth from "../store/authStore";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const currentUser = useAuth((state) => state.currentUser);

  return (
    <Box
      py="2"
      borderBottom="1px"
      borderBottomColor={colorMode === "light" ? "gray.300" : "gray.700"}
    >
      <Container maxW="container.lg">
        <HStack justifyContent="space-between">
          <Logo />
          <HStack>
            {links.map((link) => (
              <Button
                as={Link}
                to={link.to}
                key={link.name}
                variant="ghost"
                size="md"
              >
                {link.name}
              </Button>
            ))}

            {!isAuthenticated &&
              unauthlinks.map((link) => (
                <Button
                  as={Link}
                  to={link.to}
                  key={link.name}
                  variant="ghost"
                  size="md"
                >
                  {link.name}
                </Button>
              ))}

            <IconButton
              rounded="full"
              variant="solid"
              icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
              onClick={toggleColorMode}
            />
            {isAuthenticated && (
              <ProfileDropdown />
            )}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
