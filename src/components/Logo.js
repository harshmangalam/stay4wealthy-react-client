import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Box>
      <Link to="/">
        <Text fontWeight="extrabold" fontSize="xx-large">
          Company
        </Text>
      </Link>
    </Box>
  );
}

export default Logo;
