import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { links, unauthlinks } from "../data/links";
import useAuth from "../store/authStore";
import ProfileDropdown from "./ProfileDropdown";
function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return (
    <Box>
      <IconButton
        icon={<AiOutlineMenu size="20px" />}
        size="md"
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Company</DrawerHeader>
          <DrawerBody>
            <VStack alignItems="stretch">
              {isAuthenticated && (
                <HStack justifyContent="center">
                  <ProfileDropdown />
                </HStack>
              )}

              {links.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  as={Link}
                  to={link.to}
                  onClick={onClose}
                >
                  {link.name}
                </Button>
              ))}

              {!isAuthenticated &&
                unauthlinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    as={Link}
                    to={link.to}
                    onClick={onClose}
                  >
                    {link.name}
                  </Button>
                ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
