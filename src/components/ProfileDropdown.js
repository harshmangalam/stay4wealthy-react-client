import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/userService";

function ProfileDropdown() {
  const toast = useToast();

  const handleLogout = async () => {
    const data = await logoutUser();

    if (data) {
      toast({
        title: "Logout Message",
        description: data.message,
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      window.location.reload();
    }
  };
  return (
    <Menu>
      <MenuButton
        as={Avatar}
        _hover={{ cursor: "pointer" }}
        size="sm"
        aria-label="Profile"
      />
      <MenuList>
        <MenuItem
          as={Link}
          to="/profile"
          icon={<AiOutlineUser fontSize="20px" />}
        >
          Profile
        </MenuItem>

        <MenuDivider />

        <MenuItem
          onClick={handleLogout}
          icon={<RiLogoutBoxLine fontSize="20px" />}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileDropdown;
