import { Avatar, Box, Text, useColorMode, VStack } from "@chakra-ui/react";

function Service({ service }) {
  const { colorMode } = useColorMode();
  return (
    <Box
      p="4"
      boxShadow="sm"
      borderRadius="lg"
      bg={colorMode === "light" ? "gray.100" : "gray.700"}
      border="1px solid transparent"
      _hover={{
        boxShadow: "md",
      }}
      cursor="pointer"
    >
      <VStack alignItems="stretch" spacing="6">
        <Text fontWeight="bold" fontSize="lg">
          {service.title}
        </Text>
        <Text color={colorMode === "light" ? "gray.600" : "gray.400"}>
          {service.content}
        </Text>
      </VStack>
    </Box>
  );
}

export default Service;
