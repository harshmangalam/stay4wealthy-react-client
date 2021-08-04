import { Flex, Text } from "@chakra-ui/react";

function Notice() {
  return (
    <Flex
      w="100%"
      p="2"
      bgGradient="linear(to-r, blue.500, purple.500)"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontFamily="monospace" fontSize="sm" fontWeight="bold">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      </Text>
    </Flex>
  );
}

export default Notice;
